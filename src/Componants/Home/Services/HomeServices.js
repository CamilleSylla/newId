import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import "../../Styles/Home/Service/HomeService.scss";
import Loa from "../../../assets/icons/Loa.svg";
import Achat from "../../../assets/icons/Achat.svg";
import Lb from "../../../assets/icons/Lbleu.svg";
import Lg from "../../../assets/icons/Lgrey.svg";
import Lp from "../../../assets/icons/Lpurple.svg";
import IDIcon from "../../../assets/icons/IDIcon.svg";
import ID from "../../../assets/Logos/IDSign.svg"

export default function HomeService() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#homeService_left", {
      xPercent: -100,
      scrollTrigger: {
        trigger: "#homeService",
        start: "top top",
        end: "+=500",
        scrub: 0.8,
      },
    });
    gsap.from("#sideImg", {
      //   xPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#homeService",
        start: "top top",
        end: "+=750",
        scrub: 0.8,
      },
    });
    gsap.from("#gris", {
        yPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#homeService",
        start: "top+50 top",
      },
    });
    gsap.from("#violet", {
    yPercent: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: "#homeService",
        start: "top+100 top",
      },
    });
    gsap.from("#bleu", {
        yPercent: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#homeService",
        start: "top+150 top",
      },
    });
    gsap.from("#idIcon", {
        yPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#homeService",
        start: "top top",
        end: "+=1250",
        pin: true,
      },
    });
  });

  return (
    <section id="homeService">
      <article id="homeService_left" className="contain">
      <img className="logo" src={ID} alt="IconicDev"/>  
      <p style={{width: "70%", textAlign: "center"}} className="subtitle">Choisissez  la formule qui <span>vous correspond</span></p>
      <div style={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
      <div className="offres">
          <img src={Achat} alt="Decouvrer nos offres" />
          <article className="homeService_content">
            <h1 className="subtitle">Je veux acheter mon site internet</h1>
            <p>Lorem Ipsum</p>
          </article>
        </div>
        <div className="offres">
          <img src={Loa} alt="Decouvrer nos offres" />
          <article className="homeService_content">
            <h1 className="subtitle">Je veux louer mon site internet</h1>
            <p>Lorem Ipsum</p>
          </article>
        </div>
      </div>
        
      </article>
      <article id="homeService_right" className="contain">
        <img id="idIcon" src={IDIcon} alt="Decouvrer nos offres" />
        <img id="bleu" src={Lb} alt="Decouvrer nos offres" />
        <img id="violet" src={Lp} alt="Decouvrer nos offres" />
        <img id="gris" src={Lg} alt="Decouvrer nos offres" />
      </article>
    </section>
  );
}
