import React from "react";
import { Footer } from "../Footer";
import { Preloader } from "../Preloader";
import { Sidebar } from "../Sidebar";
import { Totop } from "../Totop";

type Props = {
  screen: string;
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ screen, children }) => {
  return (
    <div>
      <Preloader />
      <Sidebar active={screen} />
      <div id="ckarla-main">
        {children}
        <Footer />
        <Totop />
      </div>
    </div>
  );
};
