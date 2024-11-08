import {React, useState, useEffect} from "react";
import { PinInput } from 'react-input-pin-code'
import './S_Form.scss';

const FormReg = ({tarifs, TarifCard}) => {
	const [values, setValues] = useState(['', '', '', '', '', '', '', '', '', '']);
	const [listTarif, setListTarif] = useState({id: 101, title: -9, minutes: 0, sms: 0, gb: 0},)
	const [phonesResult] = useState([])
	const [message] = useState("not_found")

	useEffect(() => {
		let number = document.querySelector(".wrap_number").children[1]
		let arrNum = [2, 5, 7]
		for(let i = 0; i < arrNum.length; i++) {
			let div = document.createElement('div')
			div.className = "special_symbolPhone"
			div.textContent = "-"
			number.children[arrNum[i]].classList.add('SpecalRetreat')
		}
	}, [values])

	let stylesNumber = {
		"borderRadius": "6px",
		"border": "1px solid",
		"boxShadow": "0px 0px 10px 0px rgba(0,0,0,.10)",
		"margin": "0 5px",
		"padding": "2px",
		"width": "32px",
		"height": "58px",
		"fontSize": "32px",
		"boxSizing": "border-box",
		"color": "#fff",
		"backgroundColor": "transparent",
		"borderColor": "#EEE0AB"
	}
	let stylesNumberPhone = {
		"borderRadius": "6px",
		"border": "1px solid",
		"boxShadow": "0px 0px 10px 0px rgba(0,0,0,.10)",
		"margin": "0 3px",
		"padding": "2px",
		"width": "22px",
		"height": "40px",
		"fontSize": "22px",
		"boxSizing": "border-box",
		"color": "#fff",
		"backgroundColor": "transparent",
		"borderColor": "#EEE0AB"
	}

	useEffect(() => {
		setListTarif(TarifCard)
	}, [TarifCard])

	useEffect(() => {
		const newValues = values.slice()
		for (let i = 0; i < newValues.length; i++ ) {
			if (newValues[i] === "") {
				newValues[i] = "N"
			}
		}
	}, [values, listTarif])
	//Return jsx
	return (
		<div>
			<div className='form_gold'></div>
			<div className='Index_form'>
				<div className='logo_form'></div>
				<div className='wrapper_content_form'>
					<p className='FS_title'>Найти номер по любимым цифрам легко!</p>
					<div className="wrap_number">
						<div  className="wrap_number_first">+7</div>
						<PinInput
							placeholder=""
							values={values}
							onChange={(value, index, values) => setValues(values)}
							inputStyle={window.innerWidth < 768 ? stylesNumberPhone : stylesNumber}
						/>
						<div className="MaskPhone">
							<div></div>
							<div></div>
							<div></div>
							<div className="SpecalRetreat special_symbolPhone">-</div>
							<div></div>
							<div></div>
							<div className="SpecalRetreat special_symbolPhone">-</div>
							<div></div>
							<div className="SpecalRetreat special_symbolPhone">-</div>
							<div></div>
						</div>
					</div>
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
					<button className="btn custom_btn_tarifs" onClick={() => setListTarif({id: 101})}>Очистить</button>
				</div>
				<div className="phonesResults__wrapper">
					{message !== 'ok' ?
						<p>Список пуст</p> :
						<div className="phonesResults__wrapper_mini">
							{phonesResult.map(item => {
								return(
									<div key={item.id} className="phonesResults__item">
										<p className="phonesResultsHeader">{item.phone}</p>
										<p className="phonesResultsContent">Тариф: {item.tariff_price}</p>
									</div>
								)
							})
							}
						</div>
					}
				</div>
			</div>
		</div>
	)
};

export default FormReg;