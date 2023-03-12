import React from 'react';
import { Link } from 'react-scroll';
import './S_Header.scss'; 

function Header({callbackMenu}) { 
  
  return (
    <section data-scroll-section>
      <ul className='menu__wrapper'>
        <li onClick={() => callbackMenu(1)}>Как мы работаем</li>
        <li onClick={() => callbackMenu(2)}>Получить номер</li>
        <li></li>
        <li onClick={() => callbackMenu(3)}>Часто задаваемые вопросы</li>
        <li onClick={() => callbackMenu(4)}>Контакты</li>
      </ul>
      <div className='logo'></div>
    </section>
  );
}

export default Header;