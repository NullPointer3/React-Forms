import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

interface InputField {
	name: string
	email: string
}

interface FieldErrors {
	name?: string
	email?: string
}

const Form = () => {
	const [inputFields, setInputFields] = useState<InputField>({
		name: '',
		email: ''
	});
	const [people, setPeople] = useState<InputField[]>([]);
	const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = evt.target;
		setInputFields((prev) => ({
		...prev,
			[name]: value
		}))
	}

	const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		const ppl = [...people];
		const person = inputFields;
		const errors = validate(person);
		setFieldErrors( errors );
		evt.preventDefault();

		if(Object.keys(errors).length) return;


		setPeople(() => (
			ppl.concat(person)
		));

		setInputFields({
			name: '',
			email: ''
		});
	}

	const validate = (person: InputField) => {
		const errors: FieldErrors = {};
		if(!person.name) errors.name = "Name is required";
		if(!person.email) errors.email = "Email is required";
		if(person.email && !isEmail(person.email)) errors.email = "Invalid Email";
		return errors;
	}
  return (
    <main>
      <h1>Sign Up Sheet</h1>

			<form
				onSubmit={onFormSubmit}
			>
				<input 
					name='name' 
					placeholder='Name'
					value={inputFields.name}
					onChange={onInputChange}	
				/>
				<span className='text-red-600'>{fieldErrors.name}</span>

				<br />
				<input  
					name="email"
					placeholder='Email'
					value={inputFields.email}
					onChange={onInputChange} 
				/>
				<span className="text-red-600">{fieldErrors.email}</span>

				<br />
				<input type="submit" value="submit" className=' cursor-pointer'/>
			</form>

			<div>
				<h1>People</h1>
				<ul>
					{ people.map((person, i) => (
						<li key={i}>
							{person.name} ({person.email})
						</li>
					))}
				</ul>
			</div>
    </main>
  )
}

export default Form