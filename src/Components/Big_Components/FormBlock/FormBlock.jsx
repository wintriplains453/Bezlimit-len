import {React, useState} from 'react';

//Components
import FormSearchPhone from '../../Small_Components/Forms/FormSearchPhone';
import FormReg from '../../Small_Components/Forms/FormReg';

//SCSS
import './S_FormBlock.scss';

function FormBlock() {
  const [active, setActive] = useState(1);

  function switchTab(item) {
    switch(item) {
      case 1:
        setActive(1)
        break;
      case 2:
        setActive(2)
        break;
      default:
        setActive(1)
        break;
    }
  }
  return (
    <section className='FormBlock__wrapper' data-scroll-section>
      <div className='LineDefault custom_line'></div> 
      <div className='lefttext__block'>Формы</div> 
      <div className='black_screen'></div>
      <div className='formblock__index'>
          <ul className='menu_formblock'>
              <li onClick={() => switchTab(1)}>Отправить заявку</li>
              <li onClick={() => switchTab(2)}>Подобрать номер</li>
          </ul>
          <div className='wrapper__form'>
            {active === 1 ?
              <FormSearchPhone />
               :
              <FormReg />
            }
          </div>
      </div>
    </section>
  );
}

export default FormBlock;