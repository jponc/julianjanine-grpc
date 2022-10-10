package main

import (
	"database/sql"

	"julianjanine/internal/apiserver"
	"julianjanine/internal/repository"
	"julianjanine/internal/server"

	_ "github.com/lib/pq"

	log "github.com/sirupsen/logrus"
)

func main() {
	config := NewConfig()

	db, err := sql.Open("postgres", config.PGConnString)
	if err != nil {
		log.Fatalf("failed to initialise db: %v", err)
	}

	defer db.Close()

	repo := repository.NewRepository(db)
	apiServer := apiserver.NewApiServer(repo)

	s := server.NewServer(apiServer)
	err = s.Serve(config.Port)
	if err != nil {
		log.Fatalf("failed to server gRPC server: %v", err)
	}
}
