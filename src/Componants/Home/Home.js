import React from "react";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Concept from "./Concept/Concept";
import Project from "./Projects/Projects";

export default function Home() {
 
  return (
    <div id="home">
      <Banner/>
      <Concept/>
      <Cards/>
      <Project/>
    </div>
  );
}
