package apiserver

import (
	"context"
	"fmt"

	"julianjanine/internal/apipb"
)

type Repository interface {
	GetGuests(inviteCode string) ([]*apipb.Guest, error)
}

type ApiServer struct {
	apipb.UnimplementedApiServer
	repository Repository
}

func NewApiServer(repository Repository) *ApiServer {
	return &ApiServer{
		repository: repository,
	}
}

func (s *ApiServer) Hello(ctx context.Context, in *apipb.HelloRequest) (*apipb.HelloResponse, error) {
	return &apipb.HelloResponse{Message: "Hello " + in.GetName()}, nil
}

func (s *ApiServer) Healthcheck(ctx context.Context, in *apipb.HealthcheckRequest) (*apipb.HealthcheckResponse, error) {
	fmt.Printf("Healthcheck...\n")
	return &apipb.HealthcheckResponse{Message: "OK"}, nil
}

func (s *ApiServer) GetGuests(ctx context.Context, in *apipb.GetGuestsRequest) (*apipb.GetGuestsResponse, error) {
	guests, err := s.repository.GetGuests(in.InviteCode)
	if err != nil {
		return nil, fmt.Errorf("failed to get guests: %v", err)
	}

	return &apipb.GetGuestsResponse{
		Guests: guests,
	}, nil
}
