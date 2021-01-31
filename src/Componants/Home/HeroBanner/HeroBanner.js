import React from "react";
import "../../Styles/Home/HeroBanner/HeroBanner.scss";
import Package from "../../../assets/icons/Package.svg";
import Logo from "../../../assets/Logos/IDcolum.svg";
export default function HeroBanner() {
  return (
    <header className="panel" id="herobanner">
      <section id="herobanner_section">
        <article>
          <div id="hero_title_wrapper">
            <div className="bar_low_title">
              <div></div>
              <h1>IconicDev</h1>
            </div>
            <h2 className="main_title">
              Marquez le web de votre<span> empreinte !</span>
            </h2>
            <div id="logo">
              <img src={Logo} alt="IconicDev" />
            </div>
          </div>
          <div id="bottom_actions">
            <div id="package">
              <img src={Package} alt="Package"></img>
              <p>
                #Conception #Creation <br /> #Developpement #IconicDev
              </p>
            </div>
            <div id="args">
              <div className="args_section">
                <div>
                  <p>01</p>
                </div>
                LOrem ipdsi rerjtutr reeure rer
              </div>
              <div className="args_section">
                <div>
                  <p>02</p>
                </div>
                LOrem ipdsi rerjtutr reeure rer
              </div>
            </div>
          </div>
        </article>
      </section>
    </header>
  );
}
