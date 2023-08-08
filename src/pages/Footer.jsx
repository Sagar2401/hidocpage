import React from "react";
import { useApp } from "../hooks/useApp";

export const Footer = () => {
  const { otherData } = useApp();
  return (
    <footer>
      <div className="ft-wrap">
        <div className="first-ftr">
          <img
            className="logo"
            src="https://hidoc.co/assets/img/logo/logo3.png"
            alt="no img"
          />
          <p>Fastest Growing Medical Platform for Doctors</p>

          <ul>
            <li className="li">
              <i className="fa fa-facebook"></i>
            </li>
            <li className="li">
              <i className="fa fa-instagram"></i>
            </li>
            <li className="li">
              <i className="fa fa-youtube-play"></i>
            </li>
            <li className="li">
              <i className="fa fa-linkedin"></i>
            </li>
          </ul>
        </div>
        <div className="second-ftr">
          <h4>REACH US</h4>
          <p>Please contact below details for any other information.</p>

          <p className="detalis">
            <span>Email: </span>info@hidoc.com
          </p>
          <p className="detalis">
            <span>Address: </span>
            Hidoc Dr.Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808,
            United States
          </p>
        </div>
        <div className="third-ftr">
          <h4>HIDOC DR. FEATURES</h4>
          <div className="other-content">
            {otherData.map((data) => {
              return (
                <div
                  className="other-box"
                  style={{ background: `${data.background}` }}
                >
                  {/* {data.icon} */}
                  <span
                    style={{
                      background: `${data.color}`,
                    }}
                    className="svg-wrap"
                  >
                    <img src={data.icon} height={"20px"} alt="trophy" />
                  </span>
                  <p
                    style={{
                      fontSize: "14px",
                      color: `${data.color}`,
                    }}
                  >
                    {data.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="last-ft">
        <p className="copyright">
          © Copyright <strong>2022 Infedis Infotech LLP.</strong>
        </p>
        <p className="copyright">Terms & Condition | Privecy Policy</p>
      </div>
    </footer>
  );
};
