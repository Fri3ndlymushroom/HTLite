import React, { useState, useEffect } from 'react'
import './index.css'
import '../../App.css'
import { json } from 'stream/consumers';

class Test {
	words: any;
	log: any;
	constructor(newText: any) {
		this.words = newText.split(" ")
		this.log = []
	}
	getDisplayString = () => {
		return
	}
	getString = () => {
		return this.words.join(" ")
	}
	getWordArray = () => {
		return this.words
	}
	removeWord = () =>{
		this.words.shift()
	}
	addLog = (log:any)=>{
		this.log.push(log)
	}
	getCurrentWord = ()=>{
		return this.words[0]
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
				console.log(test)
			});
	}
	useEffect(() => {
		getNewTest()
	}, [])




	const cloneClass = (obj:any)=>{return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj)}

	const editTest =(operation:any) =>{
		let newTest = cloneClass(test)
		console.log(newTest)
		operation(newTest)
		//@ts-ignore
		setTest(newTest)

	}

	const onTextInput = (event:any)=>{
		setInputValue(event.target.value)
		if(event.nativeEvent.data === " "){

			editTest((newTest:any)=>{
				newTest.addLog({
					word: newTest.getCurrentWord(),
					correct: newTest.getCurrentWord() + " " === event.target.value,
					word_length: newTest.getCurrentWord().length
				})
				newTest.removeWord() 
			})
			setInputValue("")
		}
	}


	return (
		<div className="body">
			<div>Hello world</div>
			<div id="testinput__centerer">
				<div id="testinput__wrapper">
					<input value={inputValue} onChange={(event)=>onTextInput(event)}></input>
					<span>{test.getString()}</span>
					<button onClick={() => { getNewTest() }}>Get New</button>
				</div>
			</div>
		</div>
	)
}




