import React, { useEffect } from "react";
import { Container } from "../../components/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const GiftsScreen = () => {
  useEffect(() => {
    require("../../script");
  }, []);

  return (
    <Container screen="Gifts">
      <div
        className="ready banner-padding bg-img"
        data-overlay-light="0"
        data-background="https://ik.imagekit.io/jponc/julianjanine/gifts2.jpg?tr=w-2000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="cat text-center animate-box fadeInUp animated"
                data-animate-effect="fadeInUp"
              >
                {" "}
                <span>Gifts</span>
                <hr className="line line-hr-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container dress-code-container">
          <div className="row mb-60">
            <div className="col-md-6">
              <div className="karla-about-img">
                <div className="img mb-30">
                  {" "}
                  <img
                    src="https://ik.imagekit.io/jponc/julianjanine/DSC09247.jpg?tr=w-1080"
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <span>G'day!</span>
              <h2>Our Honeymoon Fund</h2>
              <hr className="line line-hr-left" />
              <p>
                With all that we have, we’ve been truly blessed. Your presence
                and prayers are all that we request. But if you desire to give
                nonetheless, a monetary gift is one we suggest.
              </p>
              <p className="signature">Julian & Janine</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 center mb-60">
              <img
                style={{ maxWidth: "100px", marginBottom: "15px" }}
                src="https://ik.imagekit.io/jponc/julianjanine/bpi.png?tr=w-300"
                alt=""
              />
              <img
                style={{ maxWidth: "200px" }}
                src="https://ik.imagekit.io/jponc/julianjanine/bpi-qr.png?tr=w-300"
                alt=""
              />
            </div>
            <div className="col-md-4 center mb-60">
              <img
                style={{
                  maxWidth: "100px",
                  marginTop: "15px",
                  marginBottom: "18px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BDO_Unibank_%28logo%29.svg/2560px-BDO_Unibank_%28logo%29.svg.png"
                alt=""
              />
              <img
                style={{ maxWidth: "200px" }}
                src="https://ik.imagekit.io/jponc/julianjanine/bdo-qr.png?tr=w-300"
                alt=""
              />
            </div>
            <div className="col-md-4 center mb-60">
              <img
                style={{ maxWidth: "200px" }}
                src="https://mb.com.ph/wp-content/uploads/2022/03/71023.png"
                alt=""
              />
              <img
                style={{ maxWidth: "200px" }}
                src="https://ik.imagekit.io/jponc/julianjanine/gcash-qr.png?tr=w-300"
                alt=""
              />
            </div>
            <div className="col-md-4 center mb-60">
              <img
                style={{
                  maxWidth: "150px",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                alt=""
              />
              <Link href="https://paypal.me/julianalfonsoponce" target="_blank">
                paypal.me/julianalfonsoponce
              </Link>{" "}
            </div>
            <div className="col-md-4 center mb-60">
              <img
                style={{ maxWidth: "150px", marginBottom: "-10px" }}
                src="https://logos-world.net/wp-content/uploads/2021/04/Westpac-Banking-Corporation-Logo-2003-present.png"
                alt=""
              />
              <Typography variant="body1">
                BSB: <b>732-010</b>
              </Typography>
              <Typography variant="body1">
                Account Number: <b>679436</b>
              </Typography>
              <Typography variant="body1">
                PayID: <b>0449006832</b>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
