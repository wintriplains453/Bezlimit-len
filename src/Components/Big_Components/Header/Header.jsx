import React from 'react';
import './S_Header.scss'; 

function Header({callbackMenu}) { 
  
  return (
    <section data-scroll-section>
      <ul className='menu__wrapper'>
        <li onClick={() => callbackMenu(2)}>Почему именно мы</li>
        <li onClick={() => callbackMenu(2)}>Тарифы</li>
        <li onClick={() => callbackMenu(2)}>Получить номер</li>
        <li className='spaceLogo'></li>
        <li onClick={() => callbackMenu(1)}>Как мы работаем</li>
        <li onClick={() => callbackMenu(3)}>FAQ</li>
        <li onClick={() => callbackMenu(4)}>Контакты</li>
      </ul>
      <div className='logo'></div>
    </section>
  );
}

export default Header;