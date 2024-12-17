import React, { useState } from 'react'

interface InputField {
	name: string
	email: string
}

const Form = () => {
	const [inputFields, setInputFields] = useState<InputField>({
		name: '',
		email: ''
	});

	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;
		setInputFields((prev) => ({
		...prev,
			[name]: value
		}))
	}
  return (
    <div>
      <h1>Sign Up Sheet</h1>

			<form>

				<input 
					name='name' 
					placeholder='Name'
					value={inputFields.name}
					onChange={onInputChange}	
				/>

				<input  
					name="email"
					placeholder='Email'
					value={inputFields.email}
					onChange={onInputChange} 
				/>
				<input type="submit" value="submit" />
			</form>
    </div>
  )
}

export default Form