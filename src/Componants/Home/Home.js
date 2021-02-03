import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";
import "../Styles/Home/Home.scss";
import Explain from "./Explain/Explain";
import HeroBanner from "./HeroBanner/HeroBanner";
import Presentation from "./Presentation/Presentation";
import Projects from "./Projects/Projects";
import HomeService from "./Services/HomeServices";


export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    
    // ScrollTrigger.scrollerProxy("body", {
    //   scrollTop(value) {
    //     if(arguments.length) {
    //       bodyScrollbar.scrollTop = value
    //     }
    //     return bodyScrollbar.scrollTop
    //   }
    // })
    // gsap.utils.toArray(".panel").forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: false,
    //   });
    // });

    // ScrollTrigger.create({
    //   snap: 1 / 1, // snap whole page to the closest section!
    // });
  });
  return (
    <div id="home">
      <HeroBanner />
      <Presentation />
      <Explain/>
      <HomeService/>
      <Projects/>
      <div className="pane" style={{width: "100vw", height: "100vh", backgroundColor: "red"}}>

      </div>
    </div>
  );
}
