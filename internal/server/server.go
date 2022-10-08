package server

import (
	"fmt"
	"log"
	"net"

	"julianjanine/internal/apipb"

	"google.golang.org/grpc"
)

type Server struct {
	apiServer apipb.ApiServer
}

func NewServer(apiServer apipb.ApiServer) *Server {
	return &Server{apiServer: apiServer}
}

func (s *Server) Serve(port int) error {
	// Create listener
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	log.Printf("server listening at %v", lis.Addr())

	// Create gRPC server
	grpcServer := grpc.NewServer()

	// Register servers
	apipb.RegisterApiServer(grpcServer, s.apiServer)

	// Server gRPC
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

	return nil
}
