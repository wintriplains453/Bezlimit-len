import React, {useState} from 'react';

import './S_Phone.scss';

function Phone() {
  const phones = [
    {
      id: 1,
      number: 9859014444,
      tarif: 1250
    },
    {
      id: 2,
      number: 9532295555,
      tarif: 1250
    },
    {
      id: 3,
      number: 9532295555,
      tarif: 1250
    },
    {
      id: 4,
      number: 9672043333,
      tarif: 1250
    },
    {
      id: 5,
      number: 9842539999,
      tarif: 1250
    },
    {
      id: 6,
      number: 9531652222,
      tarif: 1250
    },
    {
      id: 7,
      number: 9676830000,
      tarif: 1500
    },
    {
      id: 8,
      number: 9893632222,
      tarif: 1500
    },
  ]

	const tarifs = [
		{id: 1, title: 590, minutes: 400, sms: 300, gb: 20},
		{id: 2, title: 790, minutes: 700, sms: 300, gb: 30},
		{id: 3, title: 1000, minutes: 700, sms: 300, gb: 30},
		{id: 4, title: 1250, minutes: 900, sms: 300, gb: 30},
		{id: 5, title: 1500, minutes: 900, sms: 300, gb: 40},
		{id: 6, title: 2000, minutes: 2000, sms: 1000, gb: 50},
		{id: 7, title: 2500, minutes: 5000, sms: 1000, gb: 60},
		{id: 8, title: 3000, minutes: "∞", sms: 1000, gb: 60},
		{id: 9, title: 4000, minutes: "∞", sms: 1000, gb: 60},
	]

  const [is_modalPhone, setIs_modalPhone] = useState(false);
  const [modal_data, setModal_data] = useState({});
  const [switchSCreen, setSwitchScreen] = useState(true)

  function toggleModalPhone(item) {
    setIs_modalPhone(!is_modalPhone)
    setModal_data(item)
  }

  function toggleScreen() {
    setSwitchScreen(!switchSCreen)
  }

  return (
    <div className='phone__wrapper'>
      <div className='phone__screen'>
        <div className='phone__bar_wrapper'>
          <div className='phone__bar'></div>
        </div>        
        <div className='phone__screen_menu'></div>
      </div>
      <div className='phone__area'>
        <div className='phone__area_wrapper'>
          <div className='phone__area_menu'>
            <p onClick={toggleScreen} className="phone__area_menu_number" style={{background: switchSCreen ? "#F1DCA3" : '#E7E7E7'}}>
              Номера
            </p>
            <p onClick={toggleScreen} className="phone__area_menu_tarif" style={{background: !switchSCreen ? "#F1DCA3" : '#E7E7E7'}}>
              Тарифы
            </p>
          </div>    
          {switchSCreen ?
            <div className='List_PhonesTarifs'>
              
              {phones.length > 0 ?
                <>  
                {phones.map(item => {
                  return (
                    <div key={item.id} className="item_phone">
                      <div className='item_phone_flex'>
                        <p className='item_phone_number'>{item.number}</p>
                        <p className='item_phone_tarif' onClick={() => toggleModalPhone(item)}><span style={{opacity: 0.4, color: '#000'}}>Тариф:</span> {item.tarif}</p>
                      </div>
                      <button className='custom_item_button'>Забронировать</button>
                    </div>
                  )
                })}
                </> : <p>Пусто</p>
              }
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

            </div>
            : 
            <div className='List_PhonesTarifs'>
              {tarifs.map((item, index) => {
                return (
                  <div key={item.id} className="item_tarif_wrapper ">
                    <div className={item.id % 2 === 0 ? "odd_tarif item_tarif" : "even_tarif item_tarif"} >
                      <div className='detail_item' style={{top: 55 * index + "px"}}>
                        <p className='detail_item_header'>{item.title} Р</p>
                        <p className='detail_month'>В месяц</p>
                        <div className='flex_wrapper_detail'>
                          <div className='colomn_info_detail'>
                            <p className='colomn_info_detail_header'>{item.gb}</p>
                            <p>ГБ</p>
                          </div>
                          <div className='colomn_info_detail'>
                            <p className='colomn_info_detail_header'>{item.minutes}</p>
                            <p>МИН</p>
                          </div>
                          <div className='colomn_info_detail'>
                            <p className='colomn_info_detail_header'>{item.sms}</p>
                            <p>СМС</p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>)
              })}
            </div>
          }

        </div>
      </div>
    </div>
  );
}

export default Phone;