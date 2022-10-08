package main

import (
	"os"
	"strconv"

	log "github.com/sirupsen/logrus"
)

type Config struct {
	// PGHost     string
	// PGDatabase string
	// PGUser     string
	// PGPassword string
	Port int
}

func NewConfig() *Config {
	port, err := strconv.Atoi(getEnv("PORT"))
	if err != nil {
		log.Fatalf("Cannot convert port to int")
	}

	return &Config{
		// PGHost:     getEnv("PG_HOST"),
		// PGDatabase: getEnv("PG_DATABASE"),
		// PGUser:     getEnv("PG_USER"),
		// PGPassword: getEnv("PG_PASSWORD"),
		Port: port,
	}
}

func getEnv(key string) string {
	val := os.Getenv(key)

	if val == "" {
		log.Fatalf("Environment variable %s not found", key)
	}

	return val
}
