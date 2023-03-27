import {React, useState, createRef, useEffect} from "react";
import './S_Form.scss';

const FormReg = ({tarifs, TarifCard}) => {
	const[value, setValue] = useState("")
	const[focused, setFocesed] = useState(false)
	const[listTarif, setListTarif] = useState(tarifs[0])

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

	useEffect(() => {
		setListTarif(TarifCard)
	}, [TarifCard])
	//Return jsx
	return (
		<div>
			<div className='form_gold'></div>
			<div className='Index_form'>
				<div className='logo_form'></div>
				<div className='wrapper_content_form'>
					<p className='FS_title'>Найти номер по любимым цифрам легко!</p>
					{window.innerWidth > 768 ?
						<div className="wrap_number" onClick={handleClick}>
							<div  className="wrap_number_first">+7</div>
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
										: "special_symbolPhoneNone"}>{index === 2 ? "-" : '-'}</div>						
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
						:
						<div className="wrap_number">
							<input 
								ref={input}
								value={value}
								onChange={handleChange}
								onFocus={handleFocus}
								onKeyUp={handleKeyUp}
								onBlur={handleBlur}
								className="InputForm"
								placeholder="+7- _ _ _ - _ _ _ - _ _ - _ _"
							/>							
						</div>
					}
					
				</div>
				<div className="WrapperTarifs">
					{tarifs.length > 0 ?
						<>
							{tarifs.map((item, index) => {
								return (
									<button 
										key={item.id}
										className={index === listTarif.id - 1 ? 
											"btn custom_btn_tarifs WrapperTarifs_active" :
											"btn custom_btn_tarifs"
										} 
										onClick={() => setListTarif(item)}
									>

										{item.title}
									</button>
								)
							})}	
						</>	: null			
					}

				</div>
			</div>
		</div>
	)
};

export default FormReg;