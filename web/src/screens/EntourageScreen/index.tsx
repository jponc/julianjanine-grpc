import React, { useEffect } from "react";
import { Container } from "../../components/Container";
import Typography from "@mui/material/Typography";

export const EntourageScreen = () => {
  useEffect(() => {
    require("../../script");
  }, []);

  return (
    <Container screen="Entourage">
      <div
        className="ready banner-padding bg-img"
        data-overlay-light="0"
        data-background="https://ik.imagekit.io/jponc/julianjanine/entourage.jpg?tr=w-2000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="cat text-center animate-box fadeInUp animated"
                data-animate-effect="fadeInUp"
              >
                {" "}
                <span>Entourage</span>
                <hr className="line line-hr-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding" style={{ padding: "50px 0" }}>
        <div className="container entourage-container">
          <div className="row">
            <div className="col-md-6 mb-30">
              <Typography variant="h1" className="left title">
                parents of the groom
              </Typography>
              <Typography variant="h5" className="left">
                Mr. Danilo Ponce
              </Typography>
              <Typography variant="h5" className="left">
                Mrs. Nora Ponce
              </Typography>
            </div>
            <div className="col-md-6 mb-30">
              <Typography variant="h1" className="right title">
                parents of the bride
              </Typography>
              <Typography variant="h5" className="right">
                Mr. Roberto Bustamante
              </Typography>
              <Typography variant="h5" className="right">
                Mrs. Susan Bustamante
              </Typography>
            </div>
          </div>
          <div className="row mb-30 secondary-sponsor-row">
            <div className="col-md-12">
              <Typography variant="h1" className="center title">
                principal sponsors
              </Typography>
            </div>

            <div className="col-md-6 left">
              <Typography variant="h5" className="left">
                Mr. Estelito Cayas
              </Typography>
            </div>
            <div className="col-md-6 right">
              <Typography variant="h5" className="right">
                Mrs. Elizabeth Cayas
              </Typography>
            </div>

            <div className="col-md-6 left">
              <Typography variant="h5" className="left">
                Mr. Dennis Ortiz
              </Typography>
            </div>
            <div className="col-md-6 right">
              <Typography variant="h5" className="right">
                Mrs. Marites Dela Cruz
              </Typography>
            </div>

            <div className="col-md-6 left">
              <Typography variant="h5" className="left">
                Atty. Jorge Miravite
              </Typography>
            </div>
            <div className="col-md-6 right">
              <Typography variant="h5" className="right">
                Mrs. Rosario Miravite
              </Typography>
            </div>

            <div className="col-md-6 left">
              <Typography variant="h5" className="left">
                Mr. Arnel Tesorero
              </Typography>
            </div>
            <div className="col-md-6 right">
              <Typography variant="h5" className="right">
                Mrs. Marivie Nicolas
              </Typography>
            </div>

            <div className="col-md-6 left">
              <Typography variant="h5" className="left">
                Mr. Jumel Gracia
              </Typography>
            </div>
            <div className="col-md-6 right">
              <Typography variant="h5" className="right">
                Mrs. Angie Gracia
              </Typography>
            </div>

            <div className="col-md-6 left">
              <Typography variant="h5" className="left">
                Mr. Ricky Ezar
              </Typography>
            </div>
            <div className="col-md-6 right">
              <Typography variant="h5" className="right">
                Mrs. Gina Acuña
              </Typography>
            </div>

            <div className="col-md-6 left">
              <Typography variant="h5" className="left"></Typography>
            </div>
            <div className="col-md-6 right" style={{ marginBottom: 0 }}>
              <Typography variant="h5" className="right">
                Dr. Rowena Modina
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-30">
              <Typography variant="h1" className="left title">
                best man
              </Typography>
              <Typography variant="h5" className="left">
                Joseph Ponce
              </Typography>
            </div>
            <div className="col-md-6 mb-30">
              <Typography variant="h1" className="right title">
                man of honor
              </Typography>
              <Typography variant="h5" className="right">
                Charles Dominick Bustamante
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Typography variant="h1" className="center title">
                secondary sponsors
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-30">
              <Typography
                variant="h1"
                className="center title secondary-sponsor"
              >
                candle
              </Typography>
              <Typography variant="h5" className="center">
                Raymond Joseph Tejada
              </Typography>
              <Typography variant="h5" className="center">
                Faye Danica Ong
              </Typography>
            </div>
            <div className="col-md-4 mb-30">
              <Typography
                variant="h1"
                className="center title secondary-sponsor"
              >
                veil
              </Typography>
              <Typography variant="h5" className="center">
                Albert Ponce
              </Typography>
              <Typography variant="h5" className="center">
                Carmel Patricia Dela Cruz
              </Typography>
            </div>
            <div className="col-md-4 mb-30">
              <Typography
                variant="h1"
                className="center title secondary-sponsor"
              >
                cord
              </Typography>
              <Typography variant="h5" className="center">
                Apolinar Cecil Fojas
              </Typography>
              <Typography variant="h5" className="center">
                Klariza Jean Espino
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-30">
              <Typography variant="h1" className="left title">
                groomsmen
              </Typography>
              <Typography variant="h5" className="left">
                Irving Montano
              </Typography>
              <Typography variant="h5" className="left">
                Psalmuel Aguilar
              </Typography>
            </div>
            <div className="col-md-6 mb-30">
              <Typography variant="h1" className="right title">
                bridesmaids
              </Typography>
              <Typography variant="h5" className="right">
                Judy Anne Punsalan
              </Typography>
              <Typography variant="h5" className="right">
                Leslie Marie Cayas
              </Typography>
            </div>
          </div>
          <div className="row mb-30">
            <div className="col-md-6 mb-30">
              <Typography variant="h1" className="left title">
                bearer
              </Typography>
              <Typography variant="h5" className="left">
                Sean Pio Reyes
              </Typography>
            </div>
            <div className="col-md-6 mb-30">
              <Typography variant="h1" className="right title">
                flower girl
              </Typography>
              <Typography variant="h5" className="right">
                Lyielle Denise Dela Cruz
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
