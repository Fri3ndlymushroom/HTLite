import React, { useState, useEffect } from 'react'
import './index.css'
import '../../App.css'

export default function Typing({ db, functions }: any) {

	const [inputValue, setInputValue] = useState("")


	useEffect(() => {
		const generateTest = async () => {
			const addMessage = functions.httpsCallable(functions, 'generateTest')
				.then((result: any) => {
					console.log(result)
				});
		}
		generateTest()
	}, [])






	return (
		<div className="body">
			<div>Hello world</div>
			<div id="testinput__centerer">
				<div id="testinput__wrapper">
					<input onChange={(event) => { setInputValue(event.target.value) }}></input>
					<br />
					<span>{inputValue}</span>
				</div>
			</div>
		</div>
	)
}