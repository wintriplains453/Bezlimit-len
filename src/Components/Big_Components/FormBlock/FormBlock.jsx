import {React, useEffect, useState} from 'react';

//Components
import FormSearchPhone from '../../Small_Components/Forms/FormSearchPhone';
import FormReg from '../../Small_Components/Forms/FormReg';

//SCSS
import './S_FormBlock.scss';
import FormRequest from '../../Small_Components/Forms/FormRequest';

function FormBlock({tarifs, TarifCard, phoneData}) {
  const [active, setActive] = useState(3);

  function switchTab(item) {
    switch(item) {
      case 1:
        setActive(1)
        break;
      case 2:
        setActive(2)
        break;
      case 3:
        setActive(3)
        break;
      default:
        setActive(3)
        break;
    }
  }

  useEffect(() => {
    if(phoneData !== null) {
      setActive(2)
    } else {
      setActive(3)
    }
  }, [phoneData])
  return (
    <section className='FormBlock__wrapper' data-scroll-section>
      <div className='LineDefault'></div> 
      <div className='lefttext__block custom'>Формы</div> 
      <div className='black_screen'></div>
      <div className='formblock__index'>
          <ul className='menu_formblock'>
              <li onClick={() => switchTab(1)}>Отправить заявку</li>
              {phoneData !== null ?
                <li onClick={() => switchTab(2)}>заявка</li> : null
              }
              <li onClick={() => switchTab(3)}>Подобрать номер</li>
          </ul>
          <div className='wrapper__form'>
            {active === 1 ?
              <FormSearchPhone />
              : active === 2 ? 
                <>
                  {phoneData !== null ?
                    <FormRequest phoneData={phoneData}/> : null
                  } 
                </>
              : <FormReg tarifs={tarifs} TarifCard={TarifCard}/>
            }
          </div>
      </div>
    </section>
  );
}

export default FormBlock;