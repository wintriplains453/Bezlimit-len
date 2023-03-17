import { useEffect, useRef, useState} from 'react';

//locomotive-scroll
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/src/locomotive-scroll.scss"

//gsap
import {gsap, Power1} from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

//Big_Components
import Header from './Components/Big_Components/Header/Header';
import StartContent from './Components/Big_Components/StartContent/StartContent';
import Footer from './Components/Big_Components/Footer/Footer';
import FormBlock from './Components/Big_Components/FormBlock/FormBlock';
import QuastionAnswer from './Components/Big_Components/QuastionAnswer/QuastionAnswer';

//Meddium_Components
import Phone from './Components/Meddium_Components/Phone/Phone';

//Video && image
import VideoSRC from './Assets/videos/bezlimit_video2.mp4'
import Logo from './Assets/Images/logo_header.png'

//Icons
// import { HiCheck } from "react-icons/hi2";

import './App.scss';

function App() {
  gsap.registerPlugin(CSSPlugin)
  const [preloader, setPreloader] = useState(true);
  const [NlocoScroll, setNlocoScroll] = useState(null);

  useEffect(() => {
    if(preloader) return;

    const scrollEl = document.querySelector("#main-container");

    let locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: "is-reveal"
    })
    setNlocoScroll(locoScroll)
  }, [preloader])

  function callbackMenu(item) {
    switch(item) {
      case 1:
        NlocoScroll.scrollTo("#job");
        break;
      case 2: 
        NlocoScroll.scrollTo("#form");
        break;
      case 3:
        NlocoScroll.scrollTo("#QuastionAnswer");
        break;
      case 4:
        NlocoScroll.scrollTo("#footer");
        break;
      default:
        NlocoScroll.scrollTo("#main")
        break;
    }
  }

  function callForm() {
    NlocoScroll.scrollTo("#form");
  }

  const [timerState, setTimer] = useState(2);

  const id = useRef(null)
  const preloader_ref = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(0)
    }, 1000)
  }, [])

  useEffect(() => {
    if(timerState === 0) {
      clear();
    }
  }, [timerState])

  //gsap
  const timeline = gsap.timeline({
    repeat: false,
    defaults: {duration: 1, ease: "easeInOut"}
  })

  //datas gsap
  let word1 = useRef();
  let word2 = useRef();
  let word3 = useRef();
  let wrapper1 = useRef();
  let wrapper2 = useRef();
  let wrapper3 = useRef();
  
  const header_words = [
    {id: 1, text: "Самая большая база", ref: word1, reft: wrapper1},
    {id: 2, text: "красивых номеров в", ref: word2, reft: wrapper2},
    {id: 3, text: "России", ref: word3, reft: wrapper3},
  ]

  //Ref gsap
  let animation_bezlimit = useRef();
  let animation_bezdesc = useRef();
  let animation_header_preloader = useRef();
  let animation_header_preloader_text = useRef();
  let wrapper_phone = useRef();

  //render gsap
  useEffect(() => {
    if(!preloader) {
      timeline.to(animation_header_preloader.current, 
        {x: "0%", duration: 0.5, ease: Power1.easeInOut} 
      ).to([animation_header_preloader.current, animation_header_preloader_text.current], 
        {x: "100%", duration: 0.5, delay: 0.2, ease: Power1.easeInOut} 
      ).to(preloader_ref.current, 
        {duration: 0.7, opacity: 0, display: 'none', ease: Power1.easeIn}, "-=0.4"
      ).to(animation_bezlimit.current, 
        {duration: 1, x: 0, opacity: 1, stagger: 0.1, ease: Power1.easeOut}, "-=0.9"
      )
      .to(word1.current, {duration: .4, delay: 0.4, x: 100 + "%", opacity: 1, ease: Power1.easeOut}, '<')
      .to(wrapper1.current, {duration: .4, delay: 0.1, opacity: 1, ease: Power1.easeOut}, '<')

      .to(word2.current, {duration: .4, x: 100 + "%", opacity: 1, ease: Power1.easeOut}, '<')
      .to(wrapper2.current, {duration: .4, opacity: 1, ease: Power1.easeOut}, '<')

      .to(word3.current, {duration: .4, delay: 0.1, x: 100 + "%", opacity: 1, ease: Power1.easeOut}, '<')
      .to(wrapper3.current, {duration: .4, delay: 0.1, opacity: 1, ease: Power1.easeOut}, '<')
      gsap.to(wrapper_phone.current, {duration: .5, delay: 1.2, opacity: 1, ease: Power1.easeOut})
      gsap.to(animation_bezdesc.current, {
        duration: 1,
        opacity: 1,
        stagger: 0.1,
        ease: Power1.easeOut
      })         
    }
  }, [preloader])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {preloader ? 
      (
        <div className='Loader__wrapper' >
          <img src={Logo} alt="логотип"></img>
          <h1>Безлимит</h1>
        </div>
      ): (
          <div className='main-container'  id='main-container' data-scroll-container>
            <div ref={preloader_ref} className="Loader__wrapper">
              <img src={Logo} alt="логотип"></img>
              <div className='wrapper__header_bezlimit'>
                <div className='background_header' ref={animation_header_preloader}></div>
                <h1 ref={animation_header_preloader_text}>Безлимит</h1>                
              </div>

            </div>
            <div className='backgrond__video'>
              <div className='black__screen'></div>
              <video autoPlay loop muted >
                <source src={VideoSRC} type="video/mp4" />
              </video>          
            </div>

            <section className="myindex__content" data-scroll-section>
              <div id="main">
                <Header callbackMenu={callbackMenu}/>
              </div>
              <div className='header__content'>
                <div className='absolute__header__content_righttext'>
                  <div className='linesParent'>
                    <p className='righttext__vertical_text' ref={animation_bezlimit}>БЕЗЛИМИТ</p>
                  </div>
                  <div className='righttext__mainblock'>
                    <div className='righttext__mainblock_header' ref={animation_bezdesc}>
                      {header_words.map(item => (
                        <div key={item.id} className="word__header_black">
                          <div ref={item.ref}></div>
                          <p ref={item.reft}>{item.text}</p>
                        </div>
                      ))

                      }
                    </div>
                    <div className='righttext__mainblock_content'>
                      <p>• Всегда в наличии более миллиона красивых номеров.</p>
                      <p>• Поможем подобрать любимые цифры под дату рождения, номер машины, код региона.</p>
                      <p>• Зеркальные номера, одинаковые номера с разными кодами или цифрой для всей семьи и множество других вариантов.</p>
                    </div>
                  </div>
                </div>
                <div className='wrapper__item_phone' ref={wrapper_phone}>
                  <Phone />
                </div>
                <div className='LineDefault'></div>  
                <div className='absolute__header__content_lefttext'>
                <div className='lefttext__mainblock'>
                  <div className='lefttext__mainblock_header'>
                    <p>Возьми красивый номер и сохрани свой. Это легко</p>
                  </div>
                  <div className='lefttext__mainblock_content'>
                    <button className='btn btnBaner' onClick={callForm}>взять</button>
                  </div>
                </div>
              </div>     
              <div className='absolute__header__content_lefttext_copy'></div>          
              </div>  
              {/* <div className='absolute__header_topText'>
                <div className='ltopText__mainblock'>
                  <div className='topText__mainblock_header'>
                    <p>У нас есть несколько вариантов доставки:</p>
                    <ul>
                      <li><HiCheck /><p>курьером</p></li>
                      <li><HiCheck /><p>через CDEK</p></li>
                      <li><HiCheck /><p>почтой России</p></li>
                    </ul>
                    <p className='attention'>ВНИМАНИЕ! ДОСТАВКА БЕСПЛАТНАЯ!</p>
                  </div>
                </div>
              </div>               */}

            </section>    
            <div id="job">
              <StartContent />
            </div>         
            <div id="form">
              <FormBlock />
            </div>
            <div id="QuastionAnswer">
              <QuastionAnswer />
            </div>
            <div id="footer">
              <Footer />
            </div>
          </div>              
        )
      }

    </>
  );
}

export default App;
