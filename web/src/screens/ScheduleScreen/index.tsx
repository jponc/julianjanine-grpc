import React, { useEffect } from "react";
import { Container } from "../../components/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ChurchIcon from "@mui/icons-material/Church";

export const ScheduleScreen = () => {
  useEffect(() => {
    require("../../script");
  }, []);

  return (
    <Container screen="Schedule">
      <div
        className="ready banner-padding bg-img"
        data-overlay-light="0"
        data-background="https://ik.imagekit.io/jponc/julianjanine/faq.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="cat text-center animate-box fadeInUp animated"
                data-animate-effect="fadeInUp"
              >
                {" "}
                <span>Schedule</span>
                <hr className="line line-hr-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
// @ts-ignore */}
      <Timeline style={{ paddingTop: "50px" }} position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            4:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <DirectionsCarIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Arrive at venue
            </Typography>
            <Typography>
              Just to give you some time to find parking and get into the
              wedding ceremony venue.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            4:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <ChurchIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Wedding Ceremony
            </Typography>
            <Typography>
              Our wedding ceremony will be conducted in The Manila Cathedral.
            </Typography>
            <Link href="https://goo.gl/maps/L19S8B6wSKFgrgK67" target="_blank">
              Google Maps Link
            </Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            4:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <ChurchIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Serve cocktails and
            </Typography>
            <Typography>
              Our wedding ceremony will be conducted in The Manila Cathedral.
            </Typography>
            <Link href="https://goo.gl/maps/L19S8B6wSKFgrgK67" target="_blank">
              Google Maps Link
            </Link>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};
