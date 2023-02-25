package apiserver

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

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

type HashtagResponse struct {
	Data struct {
		Hashtag struct {
			EdgeHashtagToMedia struct {
				Edges []struct {
					Node struct {
						DisplayUrl string `json:"display_url"`
					} `json:"node"`
				} `json:"edges"`
			} `json:"edge_hashtag_to_media"`
		} `json:"hashtag"`
	} `json:"data"`
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

func (s *ApiServer) GetInstagramFeed(ctx context.Context, in *apipb.GetInstagramFeedRequest) (*apipb.GetInstagramFeedResponse, error) {
	url := "https://www.instagram.com/graphql/query/?query_hash=174a5243287c5f3a7de741089750ab3b&variables={%22tag_name%22:%20%22" + in.Hashtag + "%22,%20%22after%22:%20null,%20%22first%22:%2030}"

	req, err := http.NewRequest("GET", url, nil)
	req.Header.Set("Content-Type", "application/json")
	if err != nil {
		return nil, fmt.Errorf("failed to build instagram feed request: %w", err)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("failed to get instagram feed: %w", err)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to get response body: %w", err)
	}

	var hashtagResponse HashtagResponse
	err = json.Unmarshal(body, &hashtagResponse)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal instagram feed response: %w", err)
	}

	urls := []string{}
	for _, edge := range hashtagResponse.Data.Hashtag.EdgeHashtagToMedia.Edges {
		urls = append(urls, edge.Node.DisplayUrl)
	}

	return &apipb.GetInstagramFeedResponse{
		Urls: urls,
	}, nil
}
