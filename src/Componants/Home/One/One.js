import React from "react";
import "../../../style/home/one/One.scss";

export default function One() {
  return (
    <section id="home_one">
      <div className="one_title">
        <h1 className="section_title">Design & développement</h1>
      </div>
      <article className="home_articles">
        <div className="articles_text_content">
          <h1>Design &<br/> Développement</h1>
          <p>
            Nous vous créeons un site internet qui vous correspond. Que vous
            soyez une PME, une association, une institution ou autres,
            IconicDevsaura faire ressortir les atouts que vous voulez mettre en
            avant.
          </p>
        </div>

        <p className="numbers">01</p>
      </article>
    </section>
  );
}
