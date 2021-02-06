import React from "react";
import "../../../style/home/Projects/Projects.scss";
import Icon from "../../../assets/icons/IDIcon.svg";
import Arrow from "../../../assets/icons/arrow.svg";

export default function Project() {
  return (
    <section className="layer">
      <article id="Project">
        <h1 className="page_title">Nos derniers projets</h1>
        <div className="project_selector">
          <article className="project_item inner_container">
            <img src={Icon} alt="Demetis-Conseil" />
            <h1>Demetis Conseil</h1>
            <p>
              Demetis Conseil est un cabinet de conseil en gestion de
              patrimoine.
            </p>
          </article>
          <article className="project_item inner_container">
            <img src={Icon} alt="Demetis-Conseil" />
            <h1>Demetis Conseil</h1>
            <p>
              Demetis Conseil est un cabinet de conseil en gestion de
              patrimoine.
            </p>
          </article>
        </div>
      </article>
    </section>
  );
}
