package apiserver

import (
	"context"
	"log"

	"julianjanine/internal/apipb"
)

type ApiServer struct {
	apipb.UnimplementedApiServer
}

func NewApiServer() *ApiServer {
	return &ApiServer{}
}

func (s *ApiServer) Hello(ctx context.Context, in *apipb.HelloRequest) (*apipb.HelloResponse, error) {
	log.Printf("Received: %v", in.GetName())
	return &apipb.HelloResponse{Message: "Hello " + in.GetName()}, nil
}
