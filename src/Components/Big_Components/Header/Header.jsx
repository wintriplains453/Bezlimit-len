import './S_Header.scss';

function Header() {
  return (
    <div>
      <ul className='menu__wrapper'>
        <li>Главная</li>
        <li>Элемент меню</li>
        <li className='logo'></li>
        <li>Элемент меню</li>
        <li>Контакты</li>
      </ul>
    </div>
  );
}

export default Header;