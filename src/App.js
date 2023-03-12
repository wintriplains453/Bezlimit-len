import { useEffect, useRef, useState} from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/src/locomotive-scroll.scss"
// import gsap from 'gsap'

//Big_Components
import Header from './Components/Big_Components/Header/Header';
import StartContent from './Components/Big_Components/StartContent/StartContent';
import Footer from './Components/Big_Components/Footer/Footer';
import FormBlock from './Components/Big_Components/FormBlock/FormBlock';
import QuastionAnswer from './Components/Big_Components/QuastionAnswer/QuastionAnswer';

//Meddium_Components
import Phone from './Components/Meddium_Components/Phone/Phone';

//Video
import VideoSRC from './Assets/videos/bezlimit_video2.mp4'

import './App.scss';

function App() {
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

  const [timer, setTimer] = useState(2);

  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if(timer === 0) {
      clear();
    }
  }, [timer])

  return (
    <>
      {preloader ? 
      (
        <div className='Loader__wrapper'>
          <h1>Header</h1>
          <h2>content</h2>
        </div>
      ): (
          <div className='main-container' id='main-container' data-scroll-container>
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
                  <p className='righttext__vertical_text'>БЕЗЛИМИТ</p>
                  <div className='righttext__mainblock'>
                    <div className='righttext__mainblock_header'>
                      <p>Самая большая база </p>
                      <p>красивых номеров в</p>
                      <p>России</p>
                    </div>
                    <div className='righttext__mainblock_content'>
                      <p>• Всегда в наличии более миллиона красивых номеров.</p>
                      <p>• Поможем подобрать любимые цифры под дату рождения, номер машины, код региона.</p>
                      <p>• Зеркальные номера, одинаковые номера с разными кодами или цифрой для всей семьи и множество других вариантов.</p>
                    </div>
                  </div>
                </div>
                <div className='wrapper__item_phone'>
                  <Phone />
                </div>
                <div className='LineDefault'></div>         
              </div>             
              <div className='absolute__header__content_lefttext'>
                <div className='lefttext__mainblock'>
                  <div className='lefttext__mainblock_header'>
                    <p>Возьми красивый номер и сохрани свой. Это легко</p>
                  </div>
                  <div className='lefttext__mainblock_content'>
                    <button className='btn btnBaner'>взять</button>
                  </div>
                </div>
              </div>     
              <div className='absolute__header__content_lefttext_copy'></div>   
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
