import React, { useState } from 'react';
import './S_Header.scss'; 

import { HiBars3 } from "react-icons/hi2";

function Header({callbackMenu}) { 
  const [is_menu, setIsMenu] = useState(false)
  
  return (
    <section data-scroll-section>
      <ul className='menu__wrapper'>
        <div className='menu__wrapper_block'>
          <li onClick={() => callbackMenu(1)}>Почему именно мы</li>
          <li onClick={() => callbackMenu(2)}>Тарифы</li>
          <li onClick={() => callbackMenu(3)}>Как мы работаем</li>          
        </div>
        <div className='menu__wrapper_block'>
          <li onClick={() => callbackMenu(4)}>Получить номер</li>
          <li onClick={() => callbackMenu(5)}>FAQ</li>
          <li onClick={() => callbackMenu(6)}>Контакты</li>          
        </div>
        <HiBars3 className='mobile_menu' onClick={() => setIsMenu(!is_menu)}/>
      </ul>

      {is_menu ?
        <div className='MobileMenu'>
          <li onClick={() => {callbackMenu(1); setIsMenu(!is_menu)}}>Почему именно мы</li>
          <li onClick={() => {callbackMenu(2); setIsMenu(!is_menu)}}>Тарифы</li>
          <li onClick={() => {callbackMenu(3); setIsMenu(!is_menu)}}>Как мы работаем</li>   
          <li onClick={() => {callbackMenu(4); setIsMenu(!is_menu)}}>Получить номер</li>
          <li onClick={() => {callbackMenu(5); setIsMenu(!is_menu)}}>FAQ</li>
          <li onClick={() => {callbackMenu(6); setIsMenu(!is_menu)}}>Контакты</li>      
        </div> : null   
      }

      {is_menu ?
        <div className='blacSCreenMenu' onClick={() => setIsMenu(false)}></div> : null   
      } 

      <div className='logo'></div>
    </section>
  );
}

export default Header;