import React from "react";
import "../../../style/home/Banner/Banner.scss";
import Icon from '../../../assets/icons/Directions.svg'
import Arrow from '../../../assets/icons/arrow.svg'

export default function Banner() {
  return (
    <section className="layer">
      <article className="container" id="Banner">
        <section id="Banner_title">
            <h1 className="page_title">Marquez internet de votre empreinte</h1>
            <div className="home_btn_container">
                <div className="btn_pink">
                    Rendez-vous
                </div>
                <div className="btn_purple">Les offres</div>
            </div>
        </section>
        <section id="Banner_cards_wrapper">
        <article className="Banner_cards">
            <img src={Icon} alt="Iconicdev"/>
            <h1>Sur Mesure</h1>
            <p>Vos valeurs sur un ecran</p>
        </article>
        <article className="Banner_cards">
            <img src={Icon} alt="Iconicdev"/>
            <h1>Sur Mesure</h1>
            <p>Vos valeurs sur un ecran</p>
        </article>
        <article className="Banner_cards">
            <img src={Icon} alt="Iconicdev"/>
            <h1>Sur-Mesure</h1>
            <p>Vos valeurs sur un ecran</p>
        </article>
        <article className="Banner_cards">
            <img src={Icon} alt="Iconicdev"/>
            <h1>Sur Mesure</h1>
            <p>Vos valeurs sur un ecran</p>
            <div className="link">
                <p>En savoir plus</p>
                <img src={Arrow} alt="fleche IconicDev"/>
            </div>
        </article>
      </section>
      </article>
      
    </section>
  );
}
