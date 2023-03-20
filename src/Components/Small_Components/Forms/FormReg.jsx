import {React, useState, createRef} from "react";
import './S_Form.scss';

const FormReg = ({tarifs}) => {
	const[value, setValue] = useState("")
	const[focused, setFocesed] = useState(false)

	const CODE_LENGTH = new Array(10).fill(0);
	const values = value;
	let selectedIndex = values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;

	//REFS
	const input = createRef()

	//Function
	function handleClick() {
		input.current.focus();
	}
	function handleFocus() {
		setFocesed(true);
	};
	function handleBlur() {
		setFocesed(false);
	};
	function handleKeyUp(e) {
		console.log(e.key)
		if (e.key === "ArrowLeft") {
				return selectedIndex = selectedIndex / 32 - 5;
		}
	};
	function handleChange(e) {
		const valueItem = e.target.value;
		setValue(() => {
			if(valueItem.length >= CODE_LENGTH.length) return valueItem.slice(0, CODE_LENGTH.length);
			return valueItem
		});
	};
	//Return jsx
	return (
		<div>
			<div className='form_gold'></div>
			<div className='Index_form'>
				<div className='logo_form'></div>
				<div className='wrapper_content_form'>
					<p className='wrapper_content_form_header'>Выбор номера</p>
					<p>Обязательно прочтите!</p>    
					<p>Инструкция</p>   
					<div className="wrap_number" onClick={handleClick}>
						{/* <div>+7</div> */}
						{CODE_LENGTH.map((v, index) => {
							const selected = values.length === index;
							const filled = values.length === CODE_LENGTH.length && index === CODE_LENGTH.length - 1;
							return (
							<>
								<div 
									key={index}
									className="display_number"
								>
									{values[index]}
									{(selected || filled) && focused && <div className="shadows" />}
								</div>	
								<div className={
										index === 2 || 
										index === 5 ||
										index === 7 
										? "special_symbolPhone"
										: "special_symbolPhoneNone"}>-</div>						
							</>
							)
						})}
						<input 
							ref={input}
							value={value}
							onChange={handleChange}
							onFocus={handleFocus}
							onKeyUp={handleKeyUp}
							onBlur={handleBlur}
							className="input_number"
							style={{
							  width: "32px",
							  top: "0px",
							  bottom: "0px",
							  left: `${selectedIndex * 32 + 5}px`,
								opacity: 0,
							}}
						/>
					</div>
				</div>
				<div className="WrapperTarifs">
					{tarifs.map(item => {
						return (
							<button className="btn custom_btn_tarifs" key={item.id}>{item.title}</button>
						)
					})}
				</div>
			</div>
		</div>
	)
};

export default FormReg;