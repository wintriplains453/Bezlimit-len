import {React, useEffect, useRef, useState} from 'react';

//gsap
import {gsap, Power3} from 'gsap';

//Custom hooks
import useOnScreen from '../../../Hooks/useOnScreen'

//Scss
import './S_WhyUs.scss'; 

function WhyUs() { 
  const [reveal, setReveal] = useState(false);
  const animation_text_one = useRef();
  const animation_text_two = useRef();
  const animation_text_three = useRef();
  const animation_text_four = useRef();

  const onScreen = useOnScreen(animation_text_one);

  const timeline = gsap.timeline({
    repeat: false,
    defaults: {duration: 1, ease: "easeInOut"}
  })

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);


  useEffect(() => {
    if(reveal) {
      timeline
      .from(animation_text_one.current, {y: "100%", duration: 1, ease: Power3.easeInOut})
      .from(animation_text_two.current, {y: "100%", duration: 1, ease: Power3.easeInOut}, "<")
      .from(animation_text_three.current, {y: "100%", delay: 0.2, duration: 1, ease: Power3.easeInOut}, "<")
      .from(animation_text_four.current, {y: "100%", duration: 1, ease: Power3.easeInOut}, "<")
    }
  }, [reveal])// eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <section className='WhyUs__wrapper' data-scroll-section >
        <div className='LineDefault custom_line'></div>
        <div className='lefttext__block'>почему именно мы?</div> 
        <div className='WhyUs__wrapper_hidden' >
          <div className='background_header_Y'></div>
          <p className='main_Header_Box_title' ref={animation_text_one}>Почему именно мы?</p>          
        </div>

        <div className='WhyUs__wrapper_hidden WhyUs_sub_title_margin'>
          <div className='background_header_Y'></div>
          
        </div>
        <div className='WhyUs_content'>
          <p>БЕЗЛИМИТ - Виртуальный оператор сотовой связи,</p>
          <p>работаем с 2012 года и сегодня располагаем базой более чем </p>
          <p>в 1 000 000 красивых номеров,</p>
          <p>является лидером на этом рынке в России.</p>
        </div>
        <div className='wrapper_content_whyUs'>
          <p className='WhyUs_sub_title' ref={animation_text_two}>Наши конкурентные преимущества:</p>
          <ul className='WhyUs_answer'>
            <li>Красивый номер бесплатно к тариф</li>
            <li>Возможность снижать тариф до 0</li>
            <li>Комиссия за подключение номеров вашим знакомым</li>
            <li>Подключение по всей России, бесплатная доставка и выгодные безлимитные тарифы на мобильную связь и интернет</li>
          </ul>          
        </div>

        <div className='WhyUs__wrapper_hidden'>
          <div className='background_header_Y'></div>
          <p className='WhyUs_content' ref={animation_text_four}>Как такое возможно? Всё очень просто. Мы вкладываемся в развитие и нуждаемся в новых абонентах. Всё очень просто.</p>
        </div>
    </section>
  );
}

export default WhyUs;