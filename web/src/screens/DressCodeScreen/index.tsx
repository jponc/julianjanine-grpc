import React, { useEffect } from "react";
import { Container } from "../../components/Container";

export const DressCodeScreen = () => {
  useEffect(() => {
    require("../../script");
  }, []);

  return (
    <Container screen="DressCode">
      <div
        className="ready banner-padding bg-img"
        data-overlay-light="0"
        data-background="https://ik.imagekit.io/jponc/julianjanine/dress-code1.jpg?tr=w-2000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="cat text-center animate-box fadeInUp animated"
                data-animate-effect="fadeInUp"
              >
                {" "}
                <span>Dress Code</span>
                <hr className="line line-hr-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container dress-code-container">
          <div className="row">
            <div className="col-md-6 center">
              <h3>Gentleman</h3>
            </div>
            <div className="col-md-6">Hers</div>
          </div>
        </div>
      </div>
    </Container>
  );
};
