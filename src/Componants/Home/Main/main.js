import React from "react";
import IdSign from "../../../assets/Logos/IDSignNeon.svg";
import "../../../style/home/main/main.scss";
import BigBtn from "../../Global/bigBtn";

export default function Main() {
  return (
    <section id="home_main">
      <img src={IdSign} alt="IconicDev" />
      <div className="title_wrapper">
        <h1 className="section_title">iconicdev</h1>
        <h2 className="section_subtitle">
          marquez internet de votre empreinte
        </h2>
      </div>
      <BigBtn label="Consultation"/>
    </section>
  );
}
