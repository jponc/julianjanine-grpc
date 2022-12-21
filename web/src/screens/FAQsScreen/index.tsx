import React, { useEffect } from "react";
import { Container } from "../../components/Container";

type FAQ = {
  title: string;
  description: string;
};

const faqs: FAQ[] = [
  {
    title: "What should I wear? Is there a dress code?",
    description:
      "The dress code for our wedding is formal attire. You may refer to our official dress code page.",
  },
  {
    title: "What will the weather be like this time of year?",
    description:
      "Weather during May is very unpredictable, so we would suggest to prepare for a potential showers.",
  },
  {
    title: "Where are the ceremony and the reception taking place?",
    description:
      "Ceremony will take place at Manila Cathedral, while the reception is taking place in La Castellana (1 minute walk away from Manila Cathedral).",
  },
  {
    title: "Will the ceremony and reception be indoors or outdoors?",
    description: "Ceremony and reception are both indoors.",
  },
  {
    title: "What happens after the ceremony?",
    description:
      "After the ceremony, the bridal party will be taking pictures nearby for around an hour.  Guests can head straight to the reception hall where we will be serving finger foods and beverages.",
  },
  {
    title: "Does your wedding have a theme?",
    description: "XXXXX",
  },
  {
    title: "What should I do if I can’t make it?",
    description:
      'You will be missed! If you can not make it to the wedding, please let us know as soon as possible and RSVP "Not Attending" so we can plan accordingly.',
  },
  {
    title: "What time should I arrive?",
    description:
      "We recommend that you arrive an hour before the start of the ceremony, to make sure everyone is on time and we can get the party started as scheduled!",
  },
  {
    title: "Where should guests park? Is parking free?",
    description:
      "There are pay-parking spaces available near the venue. You might need to arrive early to secure a parking slot as the demand is quite high in the area.",
  },
  {
    title: "Can I bring my kids or a date to your wedding?",
    description:
      "Our wedding is strictly RSVP only. We will only able to accommodate those listed on your invitation.",
  },
  {
    title:
      "When is the RSVP deadline? Do I need to mail back my RSVP or can I do it online?",
    description:
      "Our RSVP is done online. Just make sure to use your invite code and RSVP by XXX.",
  },
  {
    title: "Are the ceremony and reception location wheelchair accessible?",
    description: "Both ceremony and reception vnues are wheelchair accessible.",
  },
  {
    title:
      "Will there be any vegan/vegetarian/gluten free/allergies/special diet options?",
    description:
      "We will try and consider all dietary options. Please let us know ahead of time if you have any dietary requirements you want us to consider.",
  },
  {
    title: "Can I take photos and videos during the ceremony?",
    description:
      "Our ceremony is unplugged and we aim to keep it solemn. Please keep your phones during the processional and ceremony. After we are announced as husband and wife, you're free to take a shot and post it with a hashtag #JulianJanineSayIDo :) Plus, we have an amazing team of photographers and videographers to capture the moments. We promise to share it to you after the wedding!",
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
              <div className="accordion">
                {faqs.map((faq) => (
                  <div className="item" key={faq.title}>
                    <div className="title">
                      <h6>{faq.title}</h6>{" "}
                    </div>
                    <div
                      className="accordion-info active"
                      style={{ display: "none" }}
                    >
                      <p>{faq.description}</p>
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
