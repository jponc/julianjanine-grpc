package apiserver

import (
	"context"
	"fmt"

	"julianjanine/internal/apipb"

	log "github.com/sirupsen/logrus"
)

type Repository interface {
	GetGuests(inviteCode string) ([]*apipb.Guest, error)
	UpdateAttendance(guestId string, attendance apipb.Attendance) error
	UpdateDietaryRequirement(guestId string, dietaryRequirement string) error
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

func (s *ApiServer) UpdateAttendance(ctx context.Context, in *apipb.UpdateAttendanceRequest) (*apipb.UpdateAttendanceResponse, error) {
	log.Infof("Updating attendance for guest (%s): %d", in.GuestId, in.Attendance)

	err := s.repository.UpdateAttendance(in.GuestId, in.Attendance)
	if err != nil {
		return nil, fmt.Errorf("failed to update attendance: %v", err)
	}

	return &apipb.UpdateAttendanceResponse{
		Message: "Updated Attendance",
	}, nil
}

func (s *ApiServer) UpdateDietaryRequirement(ctx context.Context, in *apipb.UpdateDietaryRequirementRequest) (*apipb.UpdateDietaryRequirementResponse, error) {
	log.Infof("Updating dietary requirement for guest (%s): %d", in.GuestId, in.DietaryRequirement)

	err := s.repository.UpdateDietaryRequirement(in.GuestId, in.DietaryRequirement)
	if err != nil {
		return nil, fmt.Errorf("failed to update dietary requirement: %v", err)
	}

	return &apipb.UpdateDietaryRequirementResponse{
		Message: "Updated Dietary Requirement",
	}, nil
}
