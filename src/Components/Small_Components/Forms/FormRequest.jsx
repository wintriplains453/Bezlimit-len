import './S_Form.scss';

const FormRequest = ({phoneData}) => {
	return (
		<div>
			<div className='form_gold'></div>
			<div className='Index_form'>
				<div className='logo_form'></div>
				<div className='wrapper_content_form'>
					<div className='PD_wrapper_title'>
						<p className='you_phone_title'>Оставить заявку</p>
						<p className='you_phone_title'>на оформление номера</p>
						<p>{phoneData.number}</p>						
					</div>

					<div className='PD_border'>
						<p>Подробности</p>
						<div className='PD_wrapper'>
							<div className='PD__wrapper_item'>
								<p className='PDI_title'>Тариф</p>
								<p className='PDI_title_tarif'>На связи {phoneData.tarif}</p>
							</div>		
							<div className='PD__wrapper_item'>
								<p className='PDI_title'>Абонентская плата</p>
								<p className='PDI_title_tarif'>3000 ₽</p>
							</div>		
							<div className='PD__wrapper_item'>
								<p className='PDI_title'>Минуты</p>
								<p className='PDI_title_tarif'>Безлимит</p>
							</div>		
							<div className='PD__wrapper_item'>
								<p className='PDI_title'>Регион</p>
								<p className='PDI_title_tarif'>Москва и облость</p>
							</div>		
							<div className='PD__wrapper_item'>
								<p className='PDI_title'>Стоимость подключения</p>
								<p className='PDI_title_tarif'>3000 ₽</p>
							</div>		
							<div className='PD__wrapper_item'>
								<p className='PDI_title'>Интернет</p>
								<p className='PDI_title_tarif'>60 ГБ</p>
							</div>							
						</div>
					</div>
					<div className='PD_area_inputs'>
						<div className='PD_wrapper_inputs'>
							<input type="text" className='InputForm' placeholder="Фио получаетля" required/>    
							<input type="text" className='InputForm' placeholder="Контактный номер" required/>    
						</div>
						<div className='PD_wrapper_inputs'> 
							<input type="text" className='InputForm' placeholder="Адрес (индекс, город, улица, дом, квартира)" required/>   
						</div>
						<div className='PD_wrapper_inputs'>
							<input type="date" className='InputForm date_input' max="2999-12-31" placeholder="Дата поставки" required/>    
							<input type="text" className='InputForm' placeholder="Время" required/>    
						</div>  						
					</div>
  
					<button className="btn btn_send">Отправить заявку</button>      
				</div>
			</div>
		</div>
	)
};

export default FormRequest;