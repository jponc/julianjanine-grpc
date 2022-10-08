package apiserver

import (
	"context"

	"julianjanine/internal/apipb"
)

type ApiServer struct {
	apipb.UnimplementedApiServer
}

func NewApiServer() *ApiServer {
	return &ApiServer{}
}

func (s *ApiServer) Hello(ctx context.Context, in *apipb.HelloRequest) (*apipb.HelloResponse, error) {
	return &apipb.HelloResponse{Message: "Hello " + in.GetName()}, nil
}

func (s *ApiServer) Healthcheck(ctx context.Context, in *apipb.HealthcheckRequest) (*apipb.HealthcheckResponse, error) {
	return &apipb.HealthcheckResponse{Message: "OK"}, nil
}

func (s *ApiServer) GetGuests(ctx context.Context, in *apipb.GetGuestsRequest) (*apipb.GetGuestsResponse, error) {
	return &apipb.GetGuestsResponse{
		Guests: []*apipb.Guest{
			{
				Id:         "1",
				Name:       "Julian",
				Attendance: apipb.Attendance_ATTENDANCE_YES,
			},
		},
	}, nil
}
