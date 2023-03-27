import {React, useEffect, useRef, useState} from "react";

//Custom hooks
import useOnScreen from '../../../Hooks/useOnScreen'

//gsap
import {gsap, Power3} from 'gsap';

//Icons
import { HiArrowLongRight } from "react-icons/hi2";

//Scss
import './S_StartContent.scss';

function StartContent() {
  const [reveal, setReveal] = useState(false);

  const header = useRef();

  const onScreen = useOnScreen(header);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if(reveal) {
      gsap.from(header.current, {y: "100%", duration: 1.5, ease: Power3.easeInOut})
    }
  }, [reveal])

  return (
    <section className='StartContent__wrapper' data-scroll-section>
      <div className='LineDefault custom_line'></div> 
      <div className='lefttext__block'>Как мы работаем</div> 
      <div className="SC__wrapper_hidden">
        <div className='background_header_Y'></div>
        <h1 className='main_Header_Box_title' ref={header}>Как мы работаем</h1>
      </div>
      <div className='wrapper_cards'>
        <div>
          <article className='SC_item_wrapper_cards'> 
            <div className='SC_Image SC_Image_First' data-scroll/>
            <div className='SC_Header'>Знакомство и выбор номера</div>
            <div className='SC_Description'>На сайте предоставлены тарифные планы и варианты номеров, так же в общих чертах описаны возможности и скидки</div>
          </article>
        </div>
        <HiArrowLongRight className='arrows' />
        <div>
          <article className='SC_item_wrapper_cards'>
            <div className='SC_Image SC_Image_Second' data-scroll/>
            <div className='SC_Header'>Приобретение и активация</div>
            <div className='SC_Description'>Вы получаете сим карту или подключаете её дистанционно. Важно, что оплату можно произвести после получения и активации</div>
          </article>
        </div>
        <HiArrowLongRight className='arrows' />
        <div>
          <article className='SC_item_wrapper_cards'>
            <div className='SC_Image SC_Image_Third' data-scroll/>
            <div className='SC_Header'>Удовольствие от пользования и внимания</div>
            <div className='SC_Description'>Теперь у Вас есть красивый номер и выгодный тарифный план. Поздравлем</div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default StartContent;