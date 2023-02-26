import React, { useEffect } from "react";
import { Container } from "../../components/Container";
import Typography from "@mui/material/Typography";

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
      <div className="section-padding" style={{ padding: "50px 0" }}>
        <div className="container dress-code-container">
          <div className="row">
            <div className="col-md-12 center">
              <h2>Formal Attire</h2>
            </div>
          </div>
          <div className="row mb-30">
            <div className="col-md-4 center">
              <div className="img mb-30">
                {" "}
                <img
                  style={{ maxWidth: "150px" }}
                  src="https://ik.imagekit.io/jponc/julianjanine/dress-code-attire.png"
                  alt=""
                />{" "}
              </div>
            </div>
            <div className="col-md-4 center">
              <Typography variant="h6">Ladies</Typography>
              <Typography>Cocktail or full-length dress</Typography>
              <Typography>High-heeled shoes</Typography>
              <Typography>Accessories</Typography>
              <div className="mb-30" />
              <Typography variant="h6">Gentleman</Typography>
              <Typography>Suit & Tie</Typography>
              <Typography>Long-sleeves</Typography>
              <Typography>Dress shoes</Typography>
              <div className="mb-30" />
            </div>

            <div className="col-md-4 center">
              <Typography variant="h6">Don'ts</Typography>
              <Typography>White dress</Typography>
              <Typography>T-shirt</Typography>
              <Typography>Jeans</Typography>
              <Typography>Rubber shoes / Flip flops</Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 center mb-30">
              <Typography variant="h6">Colour Palette</Typography>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 center"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 30,
                padding: 0,
              }}
            >
              <div
                className="swatch-circle"
                style={{
                  backgroundColor: "#becbcf",
                }}
              />
              <div
                className="swatch-circle"
                style={{
                  backgroundColor: "#6e7d75",
                }}
              />
              <div
                className="swatch-circle"
                style={{
                  backgroundColor: "#826a5f",
                }}
              />
            </div>
            <div
              className="col-md-6 center"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 30,
                padding: 0,
              }}
            >
              <div
                className="swatch-circle"
                style={{
                  backgroundColor: "#ce7870",
                }}
              />
              <div
                className="swatch-circle"
                style={{
                  backgroundColor: "#ecbcb0",
                }}
              />
              <div
                className="swatch-circle"
                style={{
                  backgroundColor: "#eba966",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
