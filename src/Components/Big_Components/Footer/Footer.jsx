import './S_Footer.scss';

function Footer() {
  return (
    <section className='Footer__wrapper' data-scroll-section>
        <div className='LineDefault custom_line'></div> 
        <div className='lefttext__block custom_footer_lefttext__block'>Контакты</div> 
        <h2>Компания ООО «Безлимит»</h2>
        <div className="wrapper__footer">
          <div className='wrapper__footer_item'>
            <p className='header_foter_text'>ОГРН 1197746244750</p>
            <p className='header_foter_text'>E-mail: info@bezlimit.ru</p>            
          </div>
          <div className='wrapper__footer_item wrapper__footer_item_second'>
            <p className='header_foter_text'>Адреса:</p>
            <p>123290, г. Москва, 1-ый Магистральный тупик, дом 5А, офис 301 В Ульяновск (филиал)</p>
            <p>432035, г. Ульяновск, проспект Гая, дом 100, 1-й подъезд, 3-й этаж Казань (филиал)</p>
            <p>420012, г. Казань, улица Щапова, дом 26, 2-й этаж</p>                
          </div>
        
        </div>
        <ul className='number_list'>
          <li>Круглосуточный центр поддержки клиентов: +74959669999</li>
          <li>Для звонков с блокированного номера: 09966</li>
          <li>Напишите нам в WhatsApp, Viber, Telegram по номеру: +79629669999</li>
        </ul>
    </section>
  );
}

export default Footer;