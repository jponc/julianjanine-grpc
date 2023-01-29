import React from "react";

type Props = {
  active: string;
};

export const Sidebar: React.FC<Props> = ({ active }) => (
  <div>
    <a href="#" className="js-ckarla-nav-toggle ckarla-nav-toggle">
      <i></i>
    </a>
    <aside id="ckarla-aside">
      <div className="ckarla-logo">
        <a href="index.html">
          {/* <img src="images/logo.png" className="logo-img" alt="" /> */}
          <h2>
            Julian & Janine<span>May 20, 2023</span>
          </h2>
        </a>
      </div>
      <nav className="ckarla-main-menu">
        <ul>
          <li className={active === "Home" ? "active" : ""}>
            <a href="/">Home</a>
          </li>
          <li className={active === "Schedule" ? "active" : ""}>
            <a href="/schedule">Schedule</a>
          </li>
          <li className={active === "DressCode" ? "active" : ""}>
            <a href="/dress-code">Dress Code</a>
          </li>
          <li className={active === "FAQs" ? "active" : ""}>
            <a href="/faqs">FAQs</a>
          </li>
          <li className={active === "RSVP" ? "active" : ""}>
            <a href="/rsvp">RSVP</a>
          </li>
        </ul>
      </nav>
      <div className="ckarla-footer">
        <ul>
          <li>
            <a href="#">
              <i className="ti-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ti-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ti-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ti-pinterest"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
);
