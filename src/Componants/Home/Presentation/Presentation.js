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
                    start: "top top",
                    end: () => "+=" + section.offsetWidth,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1
                },
                default: {ease: "none"}
            })
            
            tl.fromTo(section.querySelector(".developpement"), { xPercent: 100, x: 0}, {xPercent: 0})
        })
        
        gsap.to('.partone', {
            yPercent: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '.creation',
                start: "100px top",
                end: "350px top",
                scrub: true,
                markers: true
            }
        })
        gsap.from('.parttwo', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.creation',
                start: "350px top",
                end: "600px top",
                scrub: true,
                markers: true
            }
        })
          
      })
    return (
        <section className="panel" id="presentation">
           <article id="spinning_circle_container">
               <img id="spinning_circle" src={Circle} alt="IconicDev Categrorie Circle"/>
           </article>
           <section id="domaines">
                    <article className="creation" ><h1 className="subtitle partone">Design &<br/> <span>Developpement</span></h1><p className="partone">Nous vous créeons <span>un site internet qui vous correspond</span>. Que vous soyez une PME, une association, une institution ou autres, <span>IconicDev</span> saura faire ressortir les <span>atouts que vous voulez mettre en avant</span>. </p></article>
                    <article className="developpement"><h1 className="subtitle parttwo">Une solution <br/> <span>pour tout projet</span></h1><p className="parttwo">Chaque projet est unique et nécessite des solutions adaptées à son empleure. Chez IconicDev, on vous conseillera et ensemble donneront naissance à votre projet web.</p></article>
           </section>
        </section>
    )
}