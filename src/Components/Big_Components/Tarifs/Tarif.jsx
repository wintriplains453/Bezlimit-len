import React, {useEffect, useRef, useState} from "react";

//gsap
import {gsap, Power3} from 'gsap';

//Custom hooks
import useOnScreen from '../../../Hooks/useOnScreen'

//Scss
import './S_Tarifs.scss'; 

function Tarifs({tarifs}) { 
	let app = useRef(null)
  let images_tarifs = useRef(null)
  let content = useRef(null)

  const tl = gsap.timeline({
    repeat: false,
    defaults: {duration: 1, ease: "easeInOut"}
  })

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(images_tarifs);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);
  
  useEffect(() => {
    // Images Vars
    const tarifs_children = images_tarifs.current; // or children[0]
    
    //content vars
    const headlineFirst = content.current.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.current.children[1];
    const contentButton = content.current.children[2];

    //Remove initial flash
    gsap.to(app.current, {css: {visibility: 'visible'}})

    //Images Animation
    if (reveal)  {
      tl.from(tarifs_children.children[0] ,{y: "1200px", duration: 2.2, ease: Power3.easeOut})
      .from(tarifs_children.children[0] ,{scale: 1.6, duration: 2, ease: Power3.easeOut}, "<")

      .from(tarifs_children.children[1], {y: 1280, duration: 1.4, ease: Power3.easeOut}, "<")
      .from(tarifs_children.children[1], {scale: 1.6, duration: 2, ease: Power3.easeOut}, "<")

      .from(tarifs_children.children[2], {y: 1280, duration: 1.4, ease: Power3.easeOut}, "<")
      .from(tarifs_children.children[2], {scale: 1.6, duration: 2, ease: Power3.easeOut}, "<")

      .from(tarifs_children.children[3], {y: 1280, duration: 1.4, ease: Power3.easeOut}, "<")
      .from(tarifs_children.children[3], {scale: 1.6, duration: 2, ease: Power3.easeOut}, "<")

      .from(tarifs_children.children[4], {y: 1280, duration: 1.4, ease: Power3.easeOut}, "<")
      .from(tarifs_children.children[4], {scale: 1.6, duration: 2, ease: Power3.easeOut}, "<")

      .from(tarifs_children.children[5], {y: 1280, duration: 1.4, ease: Power3.easeOut}, "<")
      .from(tarifs_children.children[5], {scale: 1.6, duration: 2, ease: Power3.easeOut}, "<")

      .from(tarifs_children.children[6], {y: 1280, duration: 1.4, ease: Power3.easeOut}, "<")
      .from(tarifs_children.children[6], {scale: 1.6, duration: 2, ease: Power3.easeOut}, "<")

      .from(tarifs_children.children[7], {delay: 0.5, y: 1280, duration: 1.4, ease: Power3.easeOut}, "<")
      .from(tarifs_children.children[7], {scale: 1.6, duration: 2, ease: Power3.easeOut}, "<")

      .from(tarifs_children.children[8], {y: 1280, duration: 1.4, ease: Power3.easeOut}, "<")
      .from(tarifs_children.children[8], {scale: 1.6, duration: 2, ease: Power3.easeOut}, "<")

      //Content Animation
      tl.from([headlineFirst.children, headlineSecond.children, headlineThird.children ], {
        y: 44,
        duration: 1,
        ease:Power3.easeOut,
      }, "<")
      .from(contentP, {y: 20, opacity: 0, duration: 1, ease: Power3.easeOut}, "-=1.4")
      .from(contentButton, {y: 20, opacity: 0, duration: 1, ease: Power3.easeOut}, "-=1.6")
    }
  }, [reveal])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className='Tarifs__wrapper'  data-scroll-section>
      <div className='LineDefault'></div> 
      <div className='black_screen_tarif'></div>
      <div className='lefttext__block custom'>Тарифы</div> 
      <div className="hero" ref={app}>
        <div className="container" >
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-content-inner" ref={content}>
                <h1>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">Relieving the burden</div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">of disease caused</div>  
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">by behaviors.</div>
                  </div>
                </h1>
                <p>
                  Better treats serious cardiometabolic diseases to transform
                  lives and reduce healthcare utilization through the use of
                  digital therapeutics.
                </p>
                <button className="btn customBtn">Explore</button>
              </div>
            </div>
            <div className="hero-images">
              <div ref={images_tarifs}  className="hero-images-inner">
                {tarifs.map(item => {
                  return (
                    <div className={`hero-image tarif${item.title}`} key={item.id}>
                      <div className="blackSCreen"></div>
                      <div className="wrapper_tarif_card_content">
                        <p className="title_tarif">{item.title} ₽</p>
                        <p className="tarif_month">В месяц</p>
                        <div className="tarif_content_card">
                          <div>
                            <p>{item.gb}</p>
                            <p>ГБ</p>
                          </div>
                          <div>
                            <p>{item.minutes}</p>
                            <p>Минуты</p>
                          </div>
                          <div>
                            <p>{item.sms}</p>
                            <p>СМС</p>
                          </div>
                        </div>
                      </div>
                    </div>                    
                )})}
              </div>
            </div>
          </div>
        </div>
      </div>
		
    </section>
  );
}

export default Tarifs;