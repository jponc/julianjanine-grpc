package main

import (
	"database/sql"
	_ "embed"

	_ "github.com/lib/pq"

	"julianjanine/internal/repository"

	"github.com/gocarina/gocsv"
	log "github.com/sirupsen/logrus"
)

type GuestRow struct {
	InvitationCode string `csv:"InvitationCode"`
	Name           string `csv:"Name"`
}

//go:embed guests.csv
var guestsCSV []byte

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

	for _, guestRow := range guestRows {
		if guestRow.InvitationCode == "" {
			continue
		}

		err = repo.AddGuestIfMissing(guestRow.InvitationCode, guestRow.Name)
		if err != nil {
			log.Fatalf("failed to add guest: %v", err)
		}
	}

	log.Info("Finished rebuilding guests")
}
