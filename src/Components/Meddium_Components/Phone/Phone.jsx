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
      <div className='phone__area'>
        <div className='phone__area_screen'>
          <div className='phone__bar_wrapper'>
            <div className='phone__bar'></div>
          </div>
          <div className='phone__area_menu'>
            <p onClick={toggleScreen} className="phone__area_menu_number" style={{background: switchSCreen ? "#F1DCA3" : '#845DBA'}}>
              Номера
            </p>
            <p onClick={toggleScreen} className="phone__area_menu_tarif" style={{background: !switchSCreen ? "#F1DCA3" : '#845DBA'}}>
              Доставка
            </p>
          </div>  
          <div className='phone__area_wrapper'>
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
                <div className='wrapper_delivery'>
                  <p className='delivery_header'>Курьерская доставка</p>
                  <p className='delivery_content'>По Москве и даже в самые отдаленные точки России</p>
                  <button className='btn customDelivery'>Подробнее</button>
                </div>
                <div className='wrapper_delivery'>
                  <p className='delivery_header'>Самовывоз</p>
                  <p className='delivery_content'>Из пункта выдачи заказов</p>
                  <button className='btn customDelivery'>Подробнее</button>
                </div>
                <div className='wrapper_delivery'>
                  <p className='delivery_header'>Почта России</p>
                  <p className='delivery_content'>Отправляем во все регионы страны</p>
                  <button className='btn customDelivery'>Подробнее</button>
                </div>
                <div className='wrapper_delivery'>
                  <p className='delivery_header'>eSIM</p>
                  <p className='delivery_content'>Доставка прямо в телефон</p>
                  <button className='btn customDelivery'>Подробнее</button>
                </div>
              </div>
            }
            <div className='bottom_wrapper_phone'>
              <div className='btn customBTN'>Кнопка</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;