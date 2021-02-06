import React from "react";
import "../../../style/home/Cards/Cards.scss";
import Icon from "../../../assets/icons/IDIcon.svg";
import Arrow from "../../../assets/icons/arrow.svg";

export default function Cards() {
  return (
    <section className="layer">
      <article className="container" id="Cards">
        <div className="moving_title container">
          <h1 className="moving_title_txt">Pourquoi le sur-mesure ?</h1>
        </div>
        <div className="cards_wrapper">
          <section className="cards_item container">
            <img src={Icon} alt="qqch" />
            <h1>Vous differencier de la concurence</h1>
            <p>
              Ne faites pas comme vos concurrents, optez pour un solution web
              qui vous correspond.
            </p>
            <div className="link">
              <p>En savoir plus</p>
              <img src={Arrow} alt="fleche IconicDev" />
            </div>
          </section>
          <section className="cards_item container">
            <img src={Icon} alt="qqch" />
            <h1>Vous differencier de la concurence</h1>
            <p>
              Ne faites pas comme vos concurrents, optez pour un solution web
              qui vous correspond.
            </p>
            <div className="link">
              <p>En savoir plus</p>
              <img src={Arrow} alt="fleche IconicDev" />
            </div>
          </section>
          <section className="cards_item container">
            <img src={Icon} alt="qqch" />
            <h1>Vous differencier de la concurence</h1>
            <p>
              Ne faites pas comme vos concurrents, optez pour un solution web
              qui vous correspond.
            </p>
            <div className="link">
              <p>En savoir plus</p>
              <img src={Arrow} alt="fleche IconicDev" />
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}
