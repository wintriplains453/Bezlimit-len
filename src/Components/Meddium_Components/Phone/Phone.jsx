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
    {
      id: 9,
      number: 9681467777,
      tarif: 1500
    },
    {
      id: 10,
      number: 9809692222,
      tarif: 1500
    },
  ]


  const [is_modalPhone, setIs_modalPhone] = useState(false);
  const [modal_data, setModal_data] = useState({});

  function toggleModalPhone(item) {
    setIs_modalPhone(!is_modalPhone)
    setModal_data(item)
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
            <p>Номера</p>
            <p>Тарифы</p>
          </div>    
          <div className='List_PhonesTarifs'>
            {phones.length > 0 ?
              <>  
              {phones.map(item => {
                return (
                  <div key={item.id} className="item_phone">
                    <div>
                      <p className='item_phone_number'>{item.number}</p>
                      <p className='item_phone_tarif' onClick={() => toggleModalPhone(item)}><span style={{opacity: 0.5, color: '#000'}}>Тариф:</span> {item.tarif}</p>
                    </div>
                    <button className='btn custom_item_button'>Забронировать</button>
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
        </div>
      </div>
    </div>
  );
}

export default Phone;