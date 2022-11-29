import React, { useEffect } from "react";
import { Container } from "../../components/Container";

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
                <div className="item">
                  <div className="title">
                    <h6>Can we meet you before we book?</h6>{" "}
                  </div>
                  <div
                    className="accordion-info active"
                    style={{ display: "none" }}
                  >
                    <p>
                      Mauris porttitor magna vel ante luctus convallis. Nunc at
                      tellus erat. Donec et magna lectus. Aliquam egestas vel
                      arcu id maximus. Orci varius natoque penatibus et magnis.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <h6>How will our wedding pictures be delivered?</h6>{" "}
                  </div>
                  <div className="accordion-info" style={{ display: "none" }}>
                    <p>
                      Mauris porttitor magna vel ante luctus convallis. Nunc at
                      tellus erat. Donec et magna lectus. Aliquam egestas vel
                      arcu id maximus. Orci varius natoque penatibus et magnis
                      dis parturient montes, nascetur ridiculus mus. Praesent
                      sollicitudin feugiat elementum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <h6>
                      Can we add on hours if our wedding runs a little long?
                    </h6>{" "}
                  </div>
                  <div className="accordion-info" style={{ display: "none" }}>
                    <p>
                      Mauris porttitor magna vel ante luctus convallis. Nunc at
                      tellus erat. Donec et magna lectus. Aliquam egestas vel
                      arcu id maximus. Orci varius natoque penatibus et magnis
                      dis parturient montes, nascetur ridiculus mus. Praesent
                      sollicitudin feugiat elementum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <h6>Do you help in the planning process?</h6>{" "}
                  </div>
                  <div className="accordion-info" style={{ display: "none" }}>
                    <p>
                      Mauris porttitor magna vel ante luctus convallis. Nunc at
                      tellus erat. Donec et magna lectus. Aliquam egestas vel
                      arcu id maximus. Orci varius natoque penatibus et magnis
                      dis parturient montes, nascetur ridiculus mus. Praesent
                      sollicitudin feugiat elementum.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="title">
                    <h6>What happens if you can’t make it to our wedding?</h6>{" "}
                  </div>
                  <div className="accordion-info" style={{ display: "none" }}>
                    <p>
                      Mauris porttitor magna vel ante luctus convallis. Nunc at
                      tellus erat. Donec et magna lectus. Aliquam egestas vel
                      arcu id maximus. Orci varius natoque penatibus et magnis
                      dis parturient montes, nascetur ridiculus mus. Praesent
                      sollicitudin feugiat elementum.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <h6>How many images do you deliver?</h6>{" "}
                  </div>
                  <div className="accordion-info" style={{ display: "none" }}>
                    <p>
                      Mauris porttitor magna vel ante luctus convallis. Nunc at
                      tellus erat. Donec et magna lectus. Aliquam egestas vel
                      arcu id maximus. Orci varius natoque penatibus et magnis
                      dis parturient montes, nascetur ridiculus mus. Praesent
                      sollicitudin feugiat elementum.
                    </p>
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
