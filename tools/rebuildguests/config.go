package main

import (
	"os"

	log "github.com/sirupsen/logrus"
)

type Config struct {
	PGConnString string
}

func NewConfig() *Config {
	return &Config{
		PGConnString: getEnv("PG_DB_CONN_STRING"),
	}
}

func getEnv(key string) string {
	val := os.Getenv(key)

	if val == "" {
		log.Fatalf("Environment variable %s not found", key)
	}

	return val
}
