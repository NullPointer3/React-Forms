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
  const [people, setPeople] = useState<InputField[]>([]);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setInputFields((prev) => ({
    ...prev,
      [name]: value
    }))
  }

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    const ppl = [...people, inputFields];
    setPeople(() => (
      ppl
    ));

    setInputFields({
      name: '',
      email: ''
    });

    evt.preventDefault();
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

        <input  
          name="email"
          placeholder='Email'
          value={inputFields.email}
          onChange={onInputChange} 
        />
        <input type="submit" value="submit" />
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