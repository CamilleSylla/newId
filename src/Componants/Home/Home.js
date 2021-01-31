import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import "../Styles/Home/Home.scss";
import HeroBanner from "./HeroBanner/HeroBanner";
import Presentation from "./Presentation/Presentation";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: 1 / 4, // snap whole page to the closest section!
    });
  });
  return (
    <div id="home">
      <HeroBanner />
      <Presentation />
    </div>
  );
}
