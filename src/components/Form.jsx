import React, { useState } from "react";

const Form = (props) => {
	const [name, setName] = useState("")

	const handleChange = (event) => {
		console.log(event.target.value);
		setName(event.target.value)
	}

	const handleClick = () => {
		setName("")
		props.handleName(name)
	}

	return (
		<div>
			<label htmlFor="name">Drop your name</label>

			<input
				type="text" placeholder="Your name here"
				value={name} onChange={handleChange} />

			<button onClick={handleClick}>Hello!</button>
		</div>
	)
}
export default Form