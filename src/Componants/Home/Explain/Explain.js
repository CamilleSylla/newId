import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import "../../Styles/Home/Explain/Explain.scss";
import Directions from "../../../assets/icons/Directions.svg"
import UX from "../../../assets/icons/UX.svg"
import Management from "../../../assets/icons/Management.svg"
import { Power2 } from "gsap/all";

export default function Explain() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#background_circle", {
      scale: 85,
      rotate: 290,
      background: "linear-gradient(#a5167e, #272b53)",
      scrollTrigger: {
        trigger: "#explain",
        start: "top top",
        end: "bottom top",
      },
    });
    gsap.from("#explain_content .subtitle", {
      xPercent: 20,
      opacity: 0,
      scrollTrigger: {
        trigger: "#explain",
        start: "top top",
      },
    });
    gsap.from("#explain_content .columns", {
      yPercent: 50,
      opacity: 0,
      
      scrollTrigger: {
        ease: Power2.easeOut,
        trigger: "#explain",
        start: "top top",
        end: "+=1250 bottom",
        scrub: 0.5
      },
    });
    gsap.from("#explain", {
      scrollTrigger: {
        ease: Power2.easeOut,
        trigger: "#explain",
        start: "top top",
        end: "+=1500 bottom",
        pin: true,
        scrub: 0.5
      },
    });
    
    
  });

  return (
    <section id="explain">
      <div id="explain_container">
        <div id="background_circle"></div>
        <article id="explain_content">
          <h1 className="subtitle">
            <span>Pourquoi choisir</span>
            <br />un site web sur mesure ?
          </h1>
          <div className="columns">
          <section className="articles_container">
              <img src={Directions} alt="directions"/>
                <article className="articles">
                    <h1>Vous différencier de la concurence</h1>
                    <p>Chaque projet est unique et nécessite des solutions adaptées à son
            empleure. Chez IconicDev, on vous conseillera et ensemble donneront
            naissance à votre projet web.</p>
                </article>
          </section>
          <section className="articles_container">
          <img src={UX} alt="directions"/>
                <article className="articles">
                    <h1>Une meilleure expérience utilisateur</h1>
                    <p>Chaque projet est unique et nécessite des solutions adaptées à son
            empleure. Chez IconicDev, on vous conseillera et ensemble donneront
            naissance à votre projet web.</p>
                </article>
          </section>
          <section className="articles_container">
          <img src={Management} alt="directions"/>
                <article className="articles">
                    <h1>Management simplifier et adaptée à vous</h1>
                    <p>Chaque projet est unique et nécessite des solutions adaptées à son
            empleure. Chez IconicDev, on vous conseillera et ensemble donneront
            naissance à votre projet web.</p>
                </article>
          </section>
          </div>
          
        </article>
      </div>
    </section>
  );
}
