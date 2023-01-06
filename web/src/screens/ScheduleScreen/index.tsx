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
              Find Parking
            </Typography>
            <Typography>CBRIS Parking</Typography>
            <Link href="https://goo.gl/maps/ooBiPHZ3pXKJymqy7" target="_blank">
              Google Maps
            </Link>{" "}
            |{" "}
            <Link
              href="https://www.waze.com/en/live-map/directions/ph/ncr/manila/cbris-space-rental-parking?place=ChIJc4njX3PLlzMRqe5f_vWarPc"
              target="_blank"
            >
              Waze
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
              Wedding Ceremony
            </Typography>
            <Typography>The Manila Cathedral</Typography>
            <Link href="https://goo.gl/maps/L19S8B6wSKFgrgK67" target="_blank">
              Google Maps
            </Link>{" "}
            |{" "}
            <Link
              href="https://www.waze.com/en/live-map/directions/manila-cathedral-basilica-of-the-immaculate-conception-cabildo-cor-beaterio?place=w.79298706.792790451.941134"
              target="_blank"
            >
              Waze
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
            6:00 pm
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
              Serve cocktails and drinks
            </Typography>
            <Typography>La Castellana, Manila</Typography>
            <Link href="https://goo.gl/maps/L19S8B6wSKFgrgK67" target="_blank">
              Google Maps
            </Link>{" "}
            |{" "}
            <Link
              href="https://www.waze.com/en/live-map/directions/la-castellana-cabildo-manila?place=w.79298706.792790451.3962158"
              target="_blank"
            >
              Waze
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
            7:00 pm
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
              Dinner
            </Typography>
            <Typography>La Castellana, Manila</Typography>
            <Link href="https://goo.gl/maps/L19S8B6wSKFgrgK67" target="_blank">
              Google Maps
            </Link>{" "}
            |{" "}
            <Link
              href="https://www.waze.com/en/live-map/directions/la-castellana-cabildo-manila?place=w.79298706.792790451.3962158"
              target="_blank"
            >
              Waze
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
            7:30 pm - 9:00 pm
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
              Dinner
            </Typography>
            <Typography>La Castellana, Manila</Typography>
            <Link href="https://goo.gl/maps/L19S8B6wSKFgrgK67" target="_blank">
              Google Maps
            </Link>{" "}
            |{" "}
            <Link
              href="https://www.waze.com/en/live-map/directions/la-castellana-cabildo-manila?place=w.79298706.792790451.3962158"
              target="_blank"
            >
              Waze
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
            9:00 pm - 11:00 pm
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
              After-party
            </Typography>
            <Typography>La Castellana, Manila</Typography>
            <Link href="https://goo.gl/maps/L19S8B6wSKFgrgK67" target="_blank">
              Google Maps
            </Link>{" "}
            |{" "}
            <Link
              href="https://www.waze.com/en/live-map/directions/la-castellana-cabildo-manila?place=w.79298706.792790451.3962158"
              target="_blank"
            >
              Waze
            </Link>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};
