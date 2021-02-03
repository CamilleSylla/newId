import React, { useEffect } from "react";
import "../../Styles/Home/Projects/Projects.scss";
import Circle from '../../../assets/img/CircleGrey.svg'
import IDSign from '../../../assets/Logos/IDSignNeon.svg'

export default function Projects() {
  useEffect(() => {});

  return (
    <section id="projects">
      <article id="project_slider">
        <div className="project_slide">
        <div className="round_button">
            <img className="circleGrey" src={Circle} alt="Iconic Circle"/>
            <img className="neonLogo" src={IDSign} alt="IconicDev"/>
        </div>
          <div className="project_slide_filter">
              <h1>Demetis Conseil</h1>
              <p>Site internet / Stategie Digitale</p>
          </div>
        </div>
      </article>
    </section>
  );
}
