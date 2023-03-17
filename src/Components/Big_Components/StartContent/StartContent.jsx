import './S_StartContent.scss';

//Icons
import { HiArrowLongRight } from "react-icons/hi2";

//Image
import first from '../../../Assets/Images/logo_header.png'
import second from '../../../Assets/Images/job_second.jpg'
import third from '../../../Assets/Images/job_third.jpg'

function StartContent() {
  return (
    <section className='StartContent__wrapper' data-scroll-section>
      <div className='LineDefault custom_line'></div> 
      <div className='lefttext__block'>Как мы работаем</div> 
      <h1 className='lefttext__block_header'>Как мы работаем</h1>
      <div className='wrapper_cards'>
        <div>
          <article>
            <img className='SC_Image' data-scroll src={first} alt="Первый шаг"/>
            <div className='SC_Header'>Знакомство и выбор номера</div>
            <div className='SC_Description'>На сайте предоставлены тарифные планы и варианты номеров, так же в общих чертах описаны возможности и скидки</div>
          </article>
        </div>
        <HiArrowLongRight className='arrows' />
        <div>
          <article>
            <img className='SC_Image' data-scroll src={second} alt="Второй шаг"/>
            <div className='SC_Header'>Приобретение и активация</div>
            <div className='SC_Description'>Вы получаете сим карту или подключаете её дистанционно. Важно, ч о оплату можно произвести после получения и активации</div>
          </article>
        </div>
        <HiArrowLongRight className='arrows' />
        <div>
          <article>
            <img className='SC_Image' data-scroll src={third} alt="Третий шаг"/>
            <div className='SC_Header'>Удовольствие от пользования и вимания</div>
            <div className='SC_Description'>Теперь у Вас есть красивый номер и выгодный тарифный план. Поздравлем</div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default StartContent;