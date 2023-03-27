import { useEffect, useRef, useState} from 'react';

//locomotive-scroll
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/src/locomotive-scroll.scss"

//gsap
import {gsap, Power1, Power3} from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

//Big_Components
import Header from './Components/Big_Components/Header/Header';
import StartContent from './Components/Big_Components/StartContent/StartContent';
import Footer from './Components/Big_Components/Footer/Footer';
import FormBlock from './Components/Big_Components/FormBlock/FormBlock';
import QuastionAnswer from './Components/Big_Components/QuastionAnswer/QuastionAnswer';
import Tarifs from './Components/Big_Components/Tarifs/Tarif';

//Meddium_Components
import Phone from './Components/Meddium_Components/Phone/Phone';

//Video && image
import VideoSRC from './Assets/videos/bezlimit_video2.mp4'

//Icons
// import { HiCheck } from "react-icons/hi2";

import './App.scss';
import WhyUs from './Components/Big_Components/WhyUs/WhyUs';

function App() {
  gsap.registerPlugin(CSSPlugin)
  const [preloader, setPreloader] = useState(true);
  const [NlocoScroll, setNlocoScroll] = useState(null);
  const [TarifCard, setTarifCard] = useState(0)
  const [is_paymentModal, setPaymentModal] = useState(false)
  const [phoneData, setPhoneData] = useState(null)

  const [modal_data, setModal_data] = useState({});
  const [modal_render, setModalRender] = useState(0);

  const [is_modalPhone, setIs_modalPhone] = useState(false);
  const [is_modalPhoneMore, setIs_modalPhoneMore] = useState(false);


  const tarifs = [
		{id: 1, title: 590, minutes: 400, sms: 300, gb: 20},
		{id: 2, title: 790, minutes: 700, sms: 300, gb: 30},
		{id: 3, title: 1000, minutes: 700, sms: 300, gb: 30},
		{id: 4, title: 1250, minutes: 900, sms: 300, gb: 30},
		{id: 5, title: 1500, minutes: 900, sms: 300, gb: 40},
		{id: 6, title: 2000, minutes: 2000, sms: 1000, gb: 50},
		{id: 7, title: 2500, minutes: 5000, sms: 1000, gb: 60},
		{id: 8, title: 3000, minutes: "Ꝏ", sms: 1000, gb: 60},
		{id: 9, title: 4000, minutes: "Ꝏ", sms: 1000, gb: 60},
	]

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
        NlocoScroll.scrollTo("#whyus");
        break;
      case 2: 
        NlocoScroll.scrollTo("#tarifs");
        break;
      case 3: 
        NlocoScroll.scrollTo("#job");
        break;
      case 4:
        NlocoScroll.scrollTo("#form");
        break;
      case 5:
        NlocoScroll.scrollTo("#QuastionAnswer");
        break;
      case 6: 
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

  function handlerTarifCard(item) {
    if(item != null) {
      setTarifCard(item)
    }
    NlocoScroll.scrollTo("#tarifs")
  }

  function handlerBron(item) {
    setPhoneData(item)
    NlocoScroll.scrollTo("#form");
  }
  function handlerAfterTarif() {
    setPaymentModal(false)
    NlocoScroll.scrollTo("#tarifs")
  }

  function handlerModalPhone(item) {
    setIs_modalPhone(!is_modalPhone)
    setModal_data(item)
  }
  function handlerModalPhoneMore(item) {
    setIs_modalPhoneMore(!is_modalPhoneMore)
    setModal_data(item)
    setModalRender(item.id)
  }

  function handlerModalPayment() {
    setPaymentModal(!is_paymentModal)
  }

  const [timerState, setTimer] = useState(0);

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
  
  const header_words = [
    {id: 1, text: "Самая большая база", ref: word1},
    {id: 2, text: "красивых номеров в", ref: word2},
    {id: 3, text: "России", ref: word3},
  ]

  //Ref gsap
  let animation_bezlimit = useRef();
  let animation_header_preloader = useRef();
  let animation_header_preloader_text = useRef();
  let wrapper_phone = useRef();

  //render gsap
  useEffect(() => {
    if(!preloader) {
      timeline.to(animation_header_preloader.current, 
        {x: "0%", duration: 0.5, delay: 0.5, ease: Power1.easeInOut} 
      ).to([animation_header_preloader.current, animation_header_preloader_text.current], 
        {x: "100%", duration: 0.5, delay: 0.2, ease: Power1.easeInOut} 
      ).to(preloader_ref.current, 
        {duration: 0.7, opacity: 0, display: 'none', ease: Power1.easeIn}, "-=0.4"
      ).to(animation_bezlimit.current, 
        {duration: 1, x: 0, opacity: 1, stagger: 0.1, ease: Power1.easeOut}, "-=0.9"
      )

      //Start animation phone
      .to(wrapper_phone.current, {y: 0, duration: 1, opacity: 1, ease: Power3.easeOut}, '<')
      .from(wrapper_phone.current ,{scale: 1.6, duration: 1.5, ease: Power3.easeOut}, "<")
      //End animation phone

      .from(word1.current, {y: "100%", delay: 0.3, duration: 1, ease: Power3.easeInOut}, "<")
      .from(word2.current, {y: "100%", delay: 0.1, duration: 1, ease: Power3.easeInOut}, "<")
      .from(word3.current, {y: "100%", delay: 0.1, duration: 1, ease: Power3.easeInOut}, "<")
    }
  }, [preloader])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {preloader ? 
      (
        <div className='Loader__wrapper' >
          <h1>Безлимит</h1>
        </div>
      ): (
          <div className='main-container'  id='main-container' data-scroll-container>
            <div ref={preloader_ref} className="Loader__wrapper">
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
              <div className='background_mobile_screen'></div>    
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
                    <div className='righttext__mainblock_header'>
                      {header_words.map(item => (
                        <div key={item.id} className="word__header_black">
                          <div className="background_header_Y"></div>
                          <p ref={item.ref}>{item.text}</p>
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
                  <Phone handlerBron={handlerBron} handlerModalPhone={handlerModalPhone} handlerModalPhoneMore={handlerModalPhoneMore}/>
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
            </section>    
            <div id="whyus">
              <WhyUs />
            </div>
            <div id="tarifs">
              <Tarifs tarifs={tarifs} handlerTarifCard={handlerTarifCard} handlerModalPayment={handlerModalPayment}/>
            </div>
            <div id="job">
              <StartContent />
            </div>         
            <div id="form">
              <FormBlock tarifs={tarifs} TarifCard={TarifCard} phoneData={phoneData}/>
            </div>
            <div id="QuastionAnswer">
              <QuastionAnswer />
            </div>
            <div id="footer">
              <Footer />
            </div>

            {is_modalPhone ?
                <>
                  <div className='Modal_phone'>
                    <h2>{modal_data.number}</h2>
                    <p>{modal_data.tarif}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequuntur.</p>
                  </div>
                  <div className='Custom_black_screen_wrapper' onClick={() => setIs_modalPhone(!is_modalPhone)}></div>  
                </> : null
              }

              {is_modalPhoneMore ?
                <>
                  <div className='Modal_phoneMore'>
                    {modal_render === 1 ? 
                      <div className='Modal_phoneMore_content'>
                        <h2>Виртуальная</h2>
                        <h2>сим-карта eSIM</h2>
                        <p className='Modal_phoneMore_content_header'>eSIM оформляется быстро и удаленно. При оформлении заказа после согласования со специалистом eSim подключится моментально. Для подключения потребуется предоставить паспортные данные и пополнить баланс.</p>
                      </div> :
                      modal_render === 2 ?  
                      <div className='Modal_phoneMore_content delivery_modal'>
                        <h2>Курьерская</h2>
                        <h2>доставка</h2>
                        <p className='Modal_phoneMore_content_header header_bold'>По Москве и области</p>
                        <ul>
                          <li>Доставка по Москве производится день в день</li>
                          <li>Доставка по Московской области осуществляется на следующий день после оформления заказа курьерской службой Logsis</li>
                          <li>Вы можете выбрать удобный временной интервал для доставки со специалистом при подтверждении заказа</li>
                        </ul>
                        <p className='Modal_phoneMore_content_header header_bold'>По России</p>
                        <ul>
                          <li>Оперативную доставку «до двери» мы производим собственной курьерской службой, а также курьерскими службами Logsis и СДЭК</li>
                          <li>Доставка заказов в большинство регионов длится от 1 до 5 дней (в зависимости от зоны доставки) с момента подтверждения заказа</li>
                        </ul>
                      </div> :
                      modal_render === 3 ?
                      <div className='pickup'>
                        <h2>Самовывоз</h2>
                        <p>Выберите удобный пункт самовывоза при оформлении заказа. Вы можете получить заказ в день оформления в точках самовывоза Wildberries, СДЭК и офисах Билайн</p>
                        <p className='Modal_phoneMore_content_header header_bold'>Из офиса Билайн</p>
                        <p>После согласования заказа со специалистом вам направят его номер. Забрать заказ можно в офисе «Билайн» в тот же день.</p>
                        <p className='Modal_phoneMore_content_header header_bold'>В пунктах выдачи Wildberries</p>
                        <p>Сразу после оформления заказа со специалистом и выбора удобного для Вас пункта выдачи Wildberries вам отправят смс с кодом на получение сим-карты. Доставка в пункт выдачи составляет 3 дня. Заказы доставляются в сроки, соответствующие нормативам доставки Wildberries.</p>
                        <p className='Modal_phoneMore_content_header header_bold'>В пунктах выдачи СДЭК</p>
                        <p>При оформлении заказа необходимо сформировать накладную для получения сим-карты. Для формирования накладкой потребуются ФИО получателя. Получение заказа в пункте выдачи с паспортом. При согласовании со специалистом выберите любой удобный для вас пункт выдачи СДЭК. Отследить статус заказа по номеру накладной можно на сайте СДЭК.</p>
                      </div> :
                      modal_render === 4 ?
                      <div className='Modal_phoneMore_content'>
                        <h2>Почта России</h2>
                        <p className='Modal_phoneMore_content_header'>Услуга предоставляется совместно с ФГУП Почта России. Сим-карты доставляются даже в самые отдаленные точки России, где представлены филиалы ФГУП Почта России. Заказы доставляются в сроки, соответствующие нормативам доставки Почты России. С момента подтверждения заказа срок его доставки занимает от 1 до 5 дней (в зависимости от региона).</p>
                      </div> :
                      <div className='wrapper_payment'>
                        <h2>Cпособы пополнения баланса: </h2>
                        <ul>
                          <li>1. Используя Сбербанк онлайн, выбрав оператора «Безлимит» в разделе «Мобильная связь». </li>
                          <li>2. Через терминалы QIWI и Элекснет, выбирая оператора «Безлимит». </li>
                          <li>3. Банковской картой через банкоматы МКБ и Сбербанк выбирая оператора «Безлимит». </li>
                          <li>4.Любой банковской картой, выбирая оператора  «Билайн».</li>
                          <li>5. Наличными через курьера.</li>
                        </ul>
                      </div>
                    }
                  </div>
                  <div className='Custom_black_screen_wrapper' onClick={() => setIs_modalPhoneMore(!is_modalPhoneMore)}></div>  
                </> : null
              }

              {is_paymentModal ?
                <>
                  <div className="blackScreen_PaymentModal" onClick={() => setPaymentModal(!is_paymentModal)}></div>
                  <div className="wrapper__aymentModal">
                    <h2>Не плати за связь с Безлимит! </h2>
                    <p>Вы бы хотели не платить за связь? </p>
                    <p>С Безлимит это возможно! </p>
                    <p>Просто приводите близких, друзей и знакомых в Безлимит и получайте скидку на абонентскую плату до 100%!</p>
                    <div className="MP_margin">
                      <p>Как участвовать в акции? </p>
                    </div>
                    <p>В приложении Безлимит Вы найдете ссылку-приглашение. Скопируйте и отправьте ее другу. Он переходит по ссылке, подключает номер, а Вы получаете скидку на связь. </p>
                    <div className="MP_margin">
                      <p>Где взять ссылку? </p>
                    </div>
                    <div>
                      <p>Приложение Безлимит → Главная → баннер «Не плати за связь» → Поделиться </p>
                    </div>
                    <div className="MP_margin">
                      <p>Что Вы получите? </p>
                    </div>
                    <p>За месяц вы получите 20% от абонентской платы друга. Начисление коинов производится ежедневно в равных долях. Накопленными коинами можно оплачивать свою связь. Приведите несколько друзей и получайте коины с каждого. Таким образом, связь для вас станет бесплатной!</p>
                    <div className="MP_margin">
                      <p>Какие условия?</p>
                    </div>
                    <p>Акция действует, если номер друга был подключен по ссылке-приглашению. Коины начисляются каждый день, пока подключенный по ссылке-приглашению номер активен (не заблокирован). Количество человек, приведенных по акции, не ограничено. Максимальная скидка на связь — 100%. </p>
                    <p>Безлимиткоин (коин) — расчетная единица, зачисляемая на бонусный счет пользователя за подключенный по ссылке-приглашению и активный номер. Сумма начисленных бонусов может быть использована пользователем для оплаты мобильной связи и услуг и не подлежит обмену на денежные средства. </p>
                    <div className="MP_margin">
                      <p>Срок действия</p>
                      <p>Акция бессрочная.</p>
                      <p>Давайте на примере </p>
                    </div>
                    <p>Представим, что Ваш тарифный план «На связи 790». Вы отправляете ссылку-приглашение другу, он подключает красивый номер на тариф «На связи 1000». </p>
                    <p>Ежедневно вы будете получать безлимиткоины, если номер друга будет активен. Общая сумма начислений за месяц — 20% от стоимости тарифного плана друга. В нашем случае это 200 коинов, то есть примерно 6, 67 рублей в день.  </p>
                    <p>Если таких друзей у вас будет четверо, то накопленные за месяц бонусы полностью покроют расходы на Вашу связь за месяц. Друзьям — красивый номер и первоклассное обслуживание, Вам — бесплатная связь!  </p>
                    <p>Став пользователем Безлимит, Ваш друг тоже сможет участвовать в акции.</p>
                    <button className="btn customBtn modalBTNTarif" onClick={handlerAfterTarif}>Подобрать номер по тарифу</button>
                  </div>
                </> : null
              }
          </div>              
        )
      }

    </>
  );
}

export default App;
