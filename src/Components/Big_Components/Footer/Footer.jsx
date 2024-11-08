import './S_Footer.scss';

function Footer() {
  return (
    <section className='Footer__wrapper' data-scroll-section>
        <div className='LineDefault custom_line'></div> 
        <div className='lefttext__block'>Контакты</div> 
        <h2>Компания ООО «Безлимит»</h2>
        <div className="wrapper__footer">
          <div className='wrapper__footer_item'>
            <p className='header_foter_text'>ОГРН 1197746244750</p>
            <p className='header_foter_text'>E-mail: info@bezlimit.ru</p>            
          </div>
          <div className='wrapper__footer_item wrapper__footer_item_second'>
            <p className='header_foter_text'>Адреса:</p>
            <p>123456, г. Москва, новая улица (филиал)</p>
            <p>433456, г. Ульяновск, новая улица вторая (филиал)</p>
            <p>424334, г. Казань, улица ещё одна , дом 26</p>                
          </div>
        
        </div>
        <ul className='number_list'>
          <li>Круглосуточный центр поддержки клиентов: +74123456789</li>
          <li>Для звонков с блокированного номера: 09999</li>
          <li>Напишите нам в WhatsApp, Viber, Telegram по номеру: +74123456789</li>
        </ul>
    </section>
  );
}

export default Footer;