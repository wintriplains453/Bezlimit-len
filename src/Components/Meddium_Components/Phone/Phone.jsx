import React, {useState} from 'react';

import './S_Phone.scss';

function Phone({handlerBron, handlerModalPhone, handlerModalPhoneMore, phones}) {

  const delivery = [
    {id: 1, title: "eSIM", description: "Доставка прямо в телефон"},
    {id: 2, title: "Курьерская доставка", description: "По Москве и даже в самые отдаленные точки России"},
    {id: 3, title: "Самовывоз", description: "Из пункта выдачи заказов"},
    {id: 4, title: "Почта России", description: "Отправляем во все регионы страны"},
  ]

  function reload_number() {

  }
  
  const [switchSCreen, setSwitchScreen] = useState(true)

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
                          <p className='item_phone_number'>{item.phone}</p>
                          <p className='item_phone_tarif'><span style={{opacity: 0.4, color: '#000'}}>Тариф:</span>{item.tariff_price}</p>
                        </div>
                        <button className='custom_item_button' onClick={() => handlerBron(item)}>Забронировать</button>
                      </div>
                    )
                  })}
                  </> : 
                    <div className="loaderPhone">
                      <p>Загрузка...</p>
                    </div>
                }
              </div>
              : 
              <div className='List_PhonesTarifs'>
                {
                  delivery.map(item => {
                    return (
                    <div className='wrapper_delivery' key={item.id}>
                      <p className='delivery_header'>{item.title}</p>
                      <p className='delivery_content'>{item.description}</p>
                      <button className='btn customDelivery' onClick={() => handlerModalPhoneMore(item)}>Подробнее</button>
                    </div> 
                  )})
                }     
              </div>
            }
            {switchSCreen ?
              <div className='bottom_wrapper_phone'>
                <div className='btn customBTN' onClick={reload_number}>Обновить номера </div>
              </div>
                :
              <div className='bottom_wrapper_phone'>
                <div className='btn customBTN' onClick={() => handlerModalPhoneMore({id: 5})}>Пополнение баланса</div>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;