import React, { useEffect } from "react";
import Link from "@mui/material/Link";
import { Container } from "../../components/Container";

type FAQ = {
  title: string;
  description: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    title: "When will the ceremony start?",
    description: (
      <div>
        <p>
          The ceremony starts at <b>4:30PM</b> but we encourage the guests to
          arrive by <b>4PM</b> for the processional.
        </p>
      </div>
    ),
  },
  {
    title: "What should I wear? Is there a dress code?",
    description: (
      <div>
        The dress code for our wedding is semi-formal attire. You may refer to
        the{" "}
        <Link href="/dress-code" target="_blank">
          Dress Code
        </Link>{" "}
        page for further information.
      </div>
    ),
  },
  {
    title: "What will the weather be like this time of year?",
    description: (
      <div>
        <p>
          Weather during May is very unpredictable, so we would suggest to
          prepare for potential showers.
        </p>
        <Link
          href="https://www.accuweather.com/en/ph/manila/264885/may-weather/264885?year=2023"
          target="_blank"
        >
          Weather Forecast
        </Link>
      </div>
    ),
  },
  {
    title: "Where are the ceremony and the reception taking place?",
    description: (
      <div>
        Both ceremony and reception will take place in Intramuros, Manila.
        Please refer to the{" "}
        <Link href="/schedule" target="_blank">
          Schedule
        </Link>{" "}
        page for more information.
      </div>
    ),
  },
  {
    title: "What should I do if I can’t make it?",
    description: (
      <div>
        If you can not make it to the wedding, please let us know as soon as
        possible,{" "}
        <Link href="/rsvp" target="_blank">
          use your invite code in RSVP page
        </Link>{" "}
        and select "Not Attending" so we can plan accordingly.
      </div>
    ),
  },
  {
    title: "Is there any parking space available?",
    description: (
      <div>
        <p>
          We booked CBRIS Parking to provide convience for our guests attending
          the wedding. Whilst the parking is a first-come-first-served basis, we
          will provide a dedicated parking slot for immediate family and
          principal sponsors.
        </p>
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
      </div>
    ),
  },
  {
    title: "Can I bring my kids or a date to your wedding?",
    description: (
      <div>
        Our wedding is{" "}
        <Link href="/rsvp" target="_blank">
          strictly RSVP
        </Link>{" "}
        only. We will only be able to accommodate those listed on your
        invitation.
      </div>
    ),
  },
  {
    title: "When is the deadline for RSVP?",
    description: (
      <div>
        Our{" "}
        <Link href="/rsvp" target="_blank">
          RSVP
        </Link>{" "}
        is done online. Just make sure to use your invite code and RSVP by{" "}
        <b>April 1, 2023</b>.
      </div>
    ),
  },
  {
    title: "Are the wedding venues wheelchair accessible?",
    description:
      "Both ceremony and reception venues are wheelchair accessible.",
  },
  {
    title: "Will there be any dietary options available during reception?",
    description: (
      <div>
        We will try and consider all dietary options. Please make sure to
        specify it in your{" "}
        <Link href="/rsvp" target="_blank">
          RSVP
        </Link>
        .
      </div>
    ),
  },
  {
    title: "Can I take photos and videos during the ceremony?",
    description: (
      <div>
        <p>
          Our ceremony is unplugged and we aim to keep it solemn. Please keep
          your phones during the processional and ceremony.
        </p>
        <p>
          After we are announced as husband and wife, you're free to take a shot
          and post it with a hashtag <b>#JulianJanineSayIDo</b> :)
        </p>
        <p>
          Plus, we have an amazing team of photographers and videographers to
          capture the moments. We promise to share it to you after the wedding!
        </p>
      </div>
    ),
  },
];

export const FAQsScreen = () => {
  useEffect(() => {
    require("../../script");
  }, []);

  return (
    <Container screen="FAQs">
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
                <span>Faq's</span>
                <hr className="line line-hr-center" />
                <h1>Frequently Asked Questions</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="karla-about-img mb-30">
                <img
                  src="https://ik.imagekit.io/jponc/julianjanine/DSC09740.jpg?tr=w-1080"
                  alt=""
                />
              </div>
            </div>

            <div className="col-md-7 faqs-accordion">
              <div className="accordion faqs-container">
                {faqs.map((faq) => (
                  <div className="item" key={faq.title}>
                    <div className="title">
                      <h6>{faq.title}</h6>{" "}
                    </div>
                    <div
                      className="accordion-info active"
                      style={{ display: "none" }}
                    >
                      {faq.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
