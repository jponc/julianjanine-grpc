package repository

import (
	"database/sql"
	"fmt"

	"julianjanine/internal/apipb"

	log "github.com/sirupsen/logrus"

	"github.com/google/uuid"
)

type Repository struct {
	dbClient *sql.DB
}

func NewRepository(dbClient *sql.DB) *Repository {
	return &Repository{
		dbClient: dbClient,
	}
}

func (r *Repository) GetGuests(inviteCode string) ([]*apipb.Guest, error) {
	rows, err := r.dbClient.Query(`
    SELECT id, name, invite_code, status
    FROM guests
    WHERE LOWER(invite_code) = LOWER($1)
  `, inviteCode)
	if err != nil {
		return nil, fmt.Errorf("failed to query guests: %v", err)
	}

	guests := []*apipb.Guest{}

	defer rows.Close()
	for rows.Next() {
		var id string
		var name string
		var inviteCode string
		var status string

		err = rows.Scan(&id, &name, &inviteCode, &status)
		if err != nil {
			return nil, fmt.Errorf("failed to deserialise row: %v", err)
		}

		attendance := statusToAttendance(status)

		guest := &apipb.Guest{
			Id:         id,
			Name:       name,
			Attendance: attendance,
			InviteCode: inviteCode,
		}

		guests = append(guests, guest)
	}

	return guests, nil
}

func (r *Repository) GetGuestByName(name string) (*apipb.Guest, error) {
	row := r.dbClient.QueryRow(`
    SELECT id, name, invite_code, status
    FROM guests
    WHERE name = $1
  `, name)

	var id string
	var queriedName string
	var inviteCode string
	var status string

	err := row.Scan(&id, &queriedName, &inviteCode, &status)
	// If no rows, don't return an error
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		} else {
			return nil, fmt.Errorf("failed to scan row: %w", err)
		}
	}

	attendance := statusToAttendance(status)

	guest := &apipb.Guest{
		Id:         id,
		Name:       name,
		Attendance: attendance,
		InviteCode: inviteCode,
	}

	return guest, nil
}

func (r *Repository) UpdateAttendance(guestId string, attendance apipb.Attendance) error {
	var status string

	switch attendance {
	case apipb.Attendance_ATTENDANCE_TENTATIVE:
		status = "tentative"
	case apipb.Attendance_ATTENDANCE_NO:
		status = "no"
	case apipb.Attendance_ATTENDANCE_YES:
		status = "yes"
	case apipb.Attendance_ATTENDANCE_PENDING:
		status = "pending"
	}

	_, err := r.dbClient.Exec(`
    UPDATE guests
    SET status = $1
    WHERE id = $2
  `, status, guestId)
	if err != nil {
		return fmt.Errorf("failed to update guest attendance (%s, %s): %v", guestId, status, err)
	}

	return nil
}

func (r *Repository) AddGuestIfMissing(inviteCode string, name string) error {
	guests, err := r.GetGuests(inviteCode)
	if err != nil {
		return fmt.Errorf("failed to get guests: %v", err)
	}

	for _, guest := range guests {
		if guest.GetName() == name {
			return nil
		}
	}

	id := uuid.New()

	_, err = r.dbClient.Exec(`
    INSERT INTO guests(id, name, invite_code, status)
    VALUES ($1, $2, $3, $4)
  `, id.String(), name, inviteCode, "pending")
	if err != nil {
		return fmt.Errorf("failed to insert a new guest (%s, %s, %s): %v", id.String(), inviteCode, name, err)
	}

	log.Infof("Successfully added (%s): %s", inviteCode, name)
	return nil
}

func statusToAttendance(status string) apipb.Attendance {
	attendance := apipb.Attendance_ATTENDANCE_PENDING

	switch status {
	case "tentative":
		attendance = apipb.Attendance_ATTENDANCE_TENTATIVE
	case "no":
		attendance = apipb.Attendance_ATTENDANCE_NO
	case "yes":
		attendance = apipb.Attendance_ATTENDANCE_YES
	case "pending":
		attendance = apipb.Attendance_ATTENDANCE_PENDING
	}

	return attendance
}
