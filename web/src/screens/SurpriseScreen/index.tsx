import { Grid } from "@mui/material";
import React from "react";

export const SurpriseScreen = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/vzerbXFwGCE?autoplay=1"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
          title="video"
          style={{ width: "50%", aspectRatio: "16 / 9" }}
        />
      </div>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <img
            src="https://ik.imagekit.io/jponc/julianjanine/stage.jpg?tr=w-1080"
            alt=""
          />
        </Grid>
      </Grid>
    </div>
  );
};
