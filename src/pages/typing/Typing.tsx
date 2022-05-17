import React, { useState, useEffect } from 'react'
import './index.css'
import '../../App.css'

class Test {
	text: any;
	constructor(newText: any) {
		this.text = {text: newText, arr: newText.split("")}
	}
};

export default function Typing({ db, functions }: any) {

	const [inputValue, setInputValue] = useState("")
	const [testReady, setTestReady] = useState(false)
	const [test, setTest] = useState(new Test(""))

	const getNewTest = async () => {
		const caller = functions.httpsCallable('generateTest')

		caller()
			.then((newText: any) => {
				setTest(new Test(newText.data))
				setTestReady(true)
			});
	}


	useEffect(() => {
		getNewTest()
	}, [])






	return (
		<div className="body">
			<div>Hello world</div>
			<div id="testinput__centerer">
				<div id="testinput__wrapper">
					<input onChange={(event) => { setInputValue(event.target.value) }}></input>
					<span>{inputValue}</span>
					<span>{test.text}</span>
					<button onClick={() => { getNewTest() }}>getNew</button>
				</div>
			</div>
		</div>
	)
}




