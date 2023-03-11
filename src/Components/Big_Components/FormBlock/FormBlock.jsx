import './S_FormBlock.scss';

function FormBlock() {
  return (
    <section className='FormBlock__wrapper' data-scroll-section>
      <div className='LineDefault custom_line'></div> 
      <div className='lefttext__block'>Формы</div> 
      <div className='black_screen'></div>
      <div className='formblock__index'>
          <ul className='menu_formblock'>
              <li>форм меню</li>
              <li>форм меню</li>
              <li>форм меню</li>
          </ul>
          <div className='wrapper__form'>
            <div className='form_gold'></div>
            <div className='Index_form'>
              <div className='logo_form'></div>
              <div className='wrapper_content_form'>
                <p className='wrapper_content_form_header'>Выбор номера</p>
                <p>Обязательно прочтите!</p>    
                <p>Инструкция</p>   
                <input type="text" className='InputForm' maxLength="12"/>              
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default FormBlock;