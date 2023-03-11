import React from 'react';
import { Link } from 'react-scroll';
import './S_Header.scss'; 

function Header({idQuastionAnswer}) { 
  return (
    <section data-scroll-section>
      <ul className='menu__wrapper'>
        <Link smooth spy to={idQuastionAnswer.idmain}>Главная</Link>
        <Link smooth spy to={idQuastionAnswer.idform}>Получить номер</Link>
        {/* <li>Часто задаваемые вопросы</li> */}
        <li></li>
        <Link smooth spy to={idQuastionAnswer.idQuastionAnswer}>Часто задаваемые вопросы</Link>
        <Link smooth spy to={idQuastionAnswer.idfooter}>Контакты</Link>
      </ul>
      <div className='logo'></div>
    </section>
  );
}

export default Header;