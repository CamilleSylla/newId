import React from "react";
import "../../../style/home/Concept/Concept.scss";
import Icon from "../../../assets/icons/IDIcon.svg";
import Arrow from "../../../assets/icons/arrow.svg";

export default function Concept() {
  return (
    <section className="layer">
      <article className="container Concept">
        <div className="Concept_content">
          <div className="Concept_img">
            <img src={Icon} alt="qqch" />
          </div>
          <h1 className="Medium_Title">Design & Developpement</h1>
          <p className="regular_txt">
            Nous vous créeons un site internet qui vous correspond. Que vous
            soyez une PME, une association, une institution ou autres,
            IconicDevsaura faire ressortir les atouts que vous voulez mettre en
            avant.
          </p>
          <div className="link">
            <p>En savoir plus</p>
            <img src={Arrow} alt="fleche IconicDev" />
          </div>
        </div>
      </article>
      <article className="container Concept">
        <div className="Concept_content">
          <div className="Concept_img">
            <img src={Icon} alt="qqch" />
          </div>
          <h1 className="Medium_Title">Design & Developpement</h1>
          <p className="regular_txt">
            Nous vous créeons un site internet qui vous correspond. Que vous
            soyez une PME, une association, une institution ou autres,
            IconicDevsaura faire ressortir les atouts que vous voulez mettre en
            avant.
          </p>
          <div className="link">
            <p>En savoir plus</p>
            <img src={Arrow} alt="fleche IconicDev" />
          </div>
        </div>
      </article>
    </section>
  );
}
