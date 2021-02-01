import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap/gsap-core';
import React, { useEffect } from 'react'
import '../../Styles/Home/Presentation/Presentation.scss'
import Circle from '../../../assets/img/SpinCircle.svg'

export default function Presentation () {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray("#presentation").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger:{
                    trigger: section,
                    markers: true,
                    start: "center center",
                    end: () => "+=" + section.offsetWidth,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1
                },
                default: {ease: "none"}
            })
            tl.fromTo(section.querySelector(".developpement"), { xPercent: 100, x: 0}, {xPercent: 0})
            tl.fromTo(section.querySelector(".third"), { xPercent: 100, x: 0}, {xPercent: 0})
        })
          
      })
    return (
        <section className="panel" id="presentation">
           <article id="spinning_circle_container">
               <img id="spinning_circle" src={Circle} alt="IconicDev Categrorie Circle"/>
           </article>
           <section id="domaines">
                    <article className="creation" style={{backgroundColor: 'pink'}}><p>A</p></article>
                    <article className="developpement" style={{backgroundColor: 'grey'}}><p>A</p></article>
                    <article className="third" style={{backgroundColor: 'green'}}><p>A</p></article>
           </section>
        </section>
    )
}