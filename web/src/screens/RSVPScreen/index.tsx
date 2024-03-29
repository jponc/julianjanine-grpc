import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { RSVPItem } from "../../components/RSVPItem";
import {
  Attendance,
  GetGuestsRequest,
  Guest,
  UpdateAttendanceRequest,
  UpdateDietaryRequirementRequest,
} from "../../protos/api_pb";
import { apiClient } from "../../services/api";

export const RSVPScreen = () => {
  useEffect(() => {
    require("../../script");
  }, []);

  const { code } = useParams();
  const [guests, setGuests] = useState<Guest[]>([]);
  const [tempCode, setTempCode] = useState<string>("");

  // Search for guests depending on code specified
  useEffect(() => {
    (async () => {
      if (code === undefined) {
        return;
      }

      const req = new GetGuestsRequest();
      req.setInviteCode(code);

      try {
        const res = await apiClient.getGuests(req, {});
        const sortedGuests = res
          .getGuestsList()
          .sort((a, b) => (a.getName() < b.getName() ? -1 : 1));
        setGuests(sortedGuests);
      } catch {
        alert(
          "Something went wrong. Please message Julian or Janine on Facebook Messenger."
        );
      }
    })();
  }, [code]);

  const handleOnAttendanceChange = async (
    guestId: string,
    newAttendance: Attendance
  ) => {
    const req = new UpdateAttendanceRequest();

    req.setGuestId(guestId);
    req.setAttendance(newAttendance);

    try {
      await apiClient.updateAttendance(req, {});
    } catch {
      alert(
        "Something went wrong. Please message Julian or Janine on Facebook Messenger."
      );
    }
  };

  const handleOnDietaryRequirementChange = async (
    guestId: string,
    newDietaryRequirement: string
  ) => {
    const req = new UpdateDietaryRequirementRequest();

    req.setGuestId(guestId);
    req.setDietaryRequirement(newDietaryRequirement);

    try {
      await apiClient.updateDietaryRequirement(req, {});
    } catch {
      alert(
        "Something went wrong. Please message Julian or Janine on Facebook Messenger."
      );
    }
  };

  const handleSubmit = () => {
    window.location.replace(`/rsvp/${tempCode}`);
  };

  return (
    <Container screen="RSVP">
      <div
        className="ready bg-img valign"
        data-background="https://ik.imagekit.io/jponc/julianjanine/rsvp.jpg?tr=w-2001"
        style={{ minHeight: "100vh", backgroundPosition: "center center" }}
      >
        <div className="container rsvp-container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8 offset-md-2 bg-white">
                  <div className="contact-form">
                    <h6 className="rsvp-title">RSVP</h6>
                    <hr className="line line-hr-center" />
                    {code && (
                      <div className="subtext">
                        Invite Code: <b>{code}</b>
                      </div>
                    )}
                    <div className="subtext">
                      Wedding Date: <b>May 20, 2023</b>
                    </div>
                    <br />

                    {code ? (
                      <ul className="list-group">
                        {guests.map((guest) => (
                          <RSVPItem
                            guest={guest}
                            onAttendanceChange={handleOnAttendanceChange}
                            onDietaryRequirementChange={
                              handleOnDietaryRequirementChange
                            }
                            key={guest.getId()}
                          />
                        ))}
                      </ul>
                    ) : (
                      <div className="contact__form">
                        <div className="row">
                          <div className="col-md-12 form-group">
                            <input
                              type="text"
                              placeholder="Enter your invite code *"
                              onChange={(e) =>
                                setTempCode(e.currentTarget.value)
                              }
                              value={tempCode}
                              required
                            />
                          </div>
                          <div
                            className="col-md-12"
                            style={{ textAlign: "center" }}
                          >
                            <button
                              onClick={handleSubmit}
                              disabled={tempCode === ""}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
