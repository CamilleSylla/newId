import React from 'react'
import '../../../style/home/cards/Cards.scss'
import Cadre from '../../../assets/img/Cadre.svg'
import Direction from '../../../assets/icons/Directions.svg'


export default function Cards () {
    return (
        <section id="home_cards">
            <div className="cards_title">
        <h1 className="section_title">Pourquoi choisir un site web sur mesure ?</h1>
      </div>
        <div className="card_wrapper">
            <article className="card">
                <img className="icon" src={Direction} alt="direction"/>
                <h1>Vous différencier de la concurence</h1>
                <p>Chaque projet est unique et nécessite des solutions adaptées à son empleure. Chez IconicDev, on vous conseillera et ensemble donneront naissance à votre projet web.</p>
            </article>
            <article className="card">
                <img className="icon" src={Direction} alt="direction"/>
                <h1>Vous différencier de la concurence</h1>
                <p>Chaque projet est unique et nécessite des solutions adaptées à son empleure. Chez IconicDev, on vous conseillera et ensemble donneront naissance à votre projet web.</p>
            </article>
            <article className="card">
                <img className="icon" src={Direction} alt="direction"/>
                <h1>Vous différencier de la concurence</h1>
                <p>Chaque projet est unique et nécessite des solutions adaptées à son empleure. Chez IconicDev, on vous conseillera et ensemble donneront naissance à votre projet web.</p>
            </article>
        </div>
        </section>
    )
}