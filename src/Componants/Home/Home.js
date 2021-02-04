import React from "react";
import Cards from "./cards/Cards";
import Main from "./Main/main";
import One from "./One/One";
import Two from "./two/Two";

export default function Home() {
 
  return (
    <div id="home">
      <Main/>
      <One/>
      <Two/>
      <Cards/>
    </div>
  );
}
