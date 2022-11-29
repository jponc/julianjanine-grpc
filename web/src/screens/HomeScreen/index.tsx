import React, { useEffect } from "react";
import { Container } from "../../components/Container";

export const HomeScreen = () => {
  useEffect(() => {
    require("../../script");
  }, []);

  return (
    <Container screen="Home">
      <aside className="hero-section" id="home">
        <div className="container hero-inner h-100">
          <div className="v-middle">
            <div className="row h-100">
              <div className="col-md-12 text-center">
                <div className="text-inner">
                  <div className="hero-title">Julian & Janine</div>
                  <p className="hero-subtitle">May 20, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {" "}
              <span>Hello there!</span>
              <h2>We're Julian & Janine</h2>
              <hr className="line line-hr-left" />
              <p>
                A wedding, pre-wedding and fashion photographer based in central
                Europe.
              </p>
              <p>
                Mauris porttitor magna vel ante luctus convallis. Nunc at tellus
                erat. Donec et magni lectus. Aliquam egestas vel arcu id
                maximus. Orci varius natoque penatibus et mate dis parturient
                montes, nascetur ridiculus miss.
              </p>
              <p>
                Quisque efficitur nisi nec tellus fringilla posuere. Sed ut
                scelerisque tortor. Mauris maximus sollicitudin purus, sed
                fringilla lorem auctor eget. Interdum et malesuada duruthemes
                the miss a comp dresire ifames.
              </p>
              <p className="signature">Julian & Janine</p>
            </div>
            <div className="col-md-6">
              <div className="karla-about-img">
                <div className="img mb-30">
                  {" "}
                  <img
                    src="https://ik.imagekit.io/jponc/julianjanine/DSC09369.jpg?tr=w-1080"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding recent-weddings bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="item">
                <div className="recent-weddings-img">
                  {" "}
                  <img
                    src="https://ik.imagekit.io/jponc/julianjanine/DSC09450.jpg?tr=w-1080"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="recent-weddings-img">
                  {" "}
                  <img
                    src="https://ik.imagekit.io/jponc/julianjanine/DSC09454.jpg?tr=w-1080"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="recent-weddings-img">
                  {" "}
                  <img
                    src="https://ik.imagekit.io/jponc/julianjanine/DSC09417-2.jpg?tr=w-1080"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
