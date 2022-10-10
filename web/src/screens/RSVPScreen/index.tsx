import React, { useEffect } from "react";
import { Container } from "../../components/Container";
import { HealthcheckRequest } from "../../protos/api_pb";
import { apiClient } from "../../services/api";

export const RSVPScreen = () => {
  useEffect(() => {
    require("../../script");
  }, []);

  useEffect(() => {
    (async () => {
      const req = new HealthcheckRequest();
      const res = await apiClient.healthcheck(req, {});

      console.log(res.getMessage());
    })();
  }, []);
  console.log("RESVP");

  return (
    <Container screen="RSVP">
      <div
        className="ready banner-full-padding bg-img valign"
        data-background="/images/1920x1080-no.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8 offset-md-2 bg-white">
                  <div className="contact-form">
                    <h6>Contact Me</h6>
                    <hr className="line line-hr-center" />
                    <br />
                    <p>
                      I'd love to hear from you! Please fill out the form below
                      to request my availability and to receive information of
                      my wedding collections.{" "}
                    </p>
                    <form
                      method="post"
                      className="contact__form"
                      action="mail.php"
                    >
                      <div className="row">
                        <div className="col-12">
                          <div
                            className="alert alert-success contact__msg"
                            style={{ display: "none" }}
                            role="alert"
                          >
                            Your message was sent successfully.
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Your Full Names *"
                            required
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email Address *"
                            required
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            name="phone"
                            type="text"
                            placeholder="Phone Number *"
                            required
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject *"
                            required
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <textarea
                            name="message"
                            id="message"
                            cols={40}
                            rows={3}
                            placeholder="Enter your message here. I would love to hear as much details about your day as possible, and other vendors you might be working with! *"
                            required
                          ></textarea>
                        </div>
                        <div className="col-md-12">
                          <input name="submit" type="submit" value="Submit" />
                        </div>
                      </div>
                    </form>
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
