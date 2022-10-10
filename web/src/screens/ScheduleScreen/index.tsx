import React, { useEffect } from "react";
import { Container } from "../../components/Container";

export const ScheduleScreen = () => {
  useEffect(() => {
    require("../../script");
  }, []);

  return (
    <Container screen="Schedule">
      <div className="karla-homepage-slider">
        <div className="row">
          <div className="col-md-12">
            <div className="karla-slider">
              <div className="karla-slider-item">
                {" "}
                <img
                  className="karla-slider-img"
                  src="images/1920x1330.jpg"
                  alt=""
                />
                <div className="karla-slider-caption">
                  <div className="karla-slider-title">ScheduleScreen</div>
                  <div className="karla-slider-subtitle">
                    Wedding in Austria
                  </div>
                </div>
              </div>
              <div className="karla-slider-item">
                {" "}
                <img
                  className="karla-slider-img"
                  src="images/1920x1330.jpg"
                  alt=""
                />
                <div className="karla-slider-caption">
                  <div className="karla-slider-title">
                    Wedding at Chateau de Lacoste
                  </div>
                  <div className="karla-slider-subtitle">Wedding in France</div>
                </div>
              </div>
              <div className="karla-slider-item">
                {" "}
                <img
                  className="karla-slider-img"
                  src="images/1920x1330.jpg"
                  alt=""
                />
                <div className="karla-slider-caption">
                  <div className="karla-slider-title">
                    Pre-wedding in Vienna
                  </div>
                  <div className="karla-slider-subtitle">Helen & Eddy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
