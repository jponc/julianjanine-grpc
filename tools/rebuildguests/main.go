package main

import (
	"database/sql"
	_ "embed"
	"fmt"
	"math/rand"
	"time"

	_ "github.com/lib/pq"

	"julianjanine/internal/repository"

	"github.com/gocarina/gocsv"
	log "github.com/sirupsen/logrus"
)

type GuestRow struct {
	Count int    `csv:"Count"`
	Name  string `csv:"Name"`
}

//go:embed guests.csv
var guestsCSV []byte

const INVITE_CODE_LENGTH = 6

func main() {
	c := NewConfig()

	db, err := sql.Open("postgres", c.PGConnString)
	if err != nil {
		log.Fatalf("failed to initialise db: %v", err)
	}
	defer db.Close()

	guestRows := []GuestRow{}
	err = gocsv.UnmarshalString(string(guestsCSV), &guestRows)
	if err != nil {
		log.Fatalf("cannot initialise config %v", err)
	}

	repo := repository.NewRepository(db)

	inviteCode := randomString(INVITE_CODE_LENGTH)

	for _, guestRow := range guestRows {
		if guestRow.Count != 0 {
			guest, err := repo.GetGuestByName(guestRow.Name)
			if err != nil {
				log.Fatalf("failed to get guest by name (%s): %w", guestRow.Name, err)
			}

			if guest == nil {
				inviteCode = randomString(INVITE_CODE_LENGTH)
			} else {
				inviteCode = guest.InviteCode
			}
		}

		err = repo.AddGuestIfMissing(inviteCode, guestRow.Name)
		if err != nil {
			log.Fatalf("failed to add guest: %v", err)
		}
	}

	log.Info("Finished rebuilding guests")
}

func randomString(length int) string {
	rand.Seed(time.Now().UnixNano())
	b := make([]byte, length)
	rand.Read(b)
	return fmt.Sprintf("%x", b)[:length]
}
