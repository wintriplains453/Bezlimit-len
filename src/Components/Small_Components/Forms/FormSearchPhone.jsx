import './S_Form.scss';

const FormSearchPhone = () => {

	return (
		<div>
			<div className='form_gold'></div>
			<div className='Index_form'>
				<div className='logo_form'></div>
				<div className='wrapper_content_form'>
					<p className="FS_title">Для получения доступа к номерам оставьте ваше имя и телефон.</p>      
					<div className='FS_wrapper'>
						<input type="text" className='InputForm' placeholder="Ваше имя" required/>       
						<input type="text" className='InputForm' maxLength={11} placeholder="Ваше номер" required/>   						
					</div>
					<p className="Attention_eight">Внимание! Номер вводится без «8»</p>
					<button className="btn btn_send">Отправить заявку</button>      
				</div>
			</div>
		</div>
	)
};

export default FormSearchPhone;