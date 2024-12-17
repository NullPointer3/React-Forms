import React from 'react'

const Form = () => {

  const onButtonClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = evt.target as HTMLButtonElement;
    console.log(`The user clicked ${name}, ${value}`)
  }
  return (
    <div>
      <h1>What do you think of react</h1>

      <button
        name='button-1'
        value='great'
        onClick={onButtonClick}
      >
        Great
      </button>

      <button
        name='button-2'
        value='amazing'
        onClick={onButtonClick}
      >
        Amazing
      </button>
    </div>
  )
}

export default Form