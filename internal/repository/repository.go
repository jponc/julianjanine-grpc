package repository

import (
	"database/sql"
	"fmt"

	"julianjanine/internal/apipb"
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
	query := fmt.Sprintf(`
    SELECT id, name, invite_code, status
    FROM guests
    WHERE invite_code = '%s'
  `, inviteCode)

	rows, err := r.dbClient.Query(query)
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

		guest := &apipb.Guest{
			Id:         id,
			Name:       name,
			Attendance: attendance,
		}

		guests = append(guests, guest)
	}

	return guests, nil
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
