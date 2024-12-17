import React from 'react'

export const Form = () => {

  const onGreatClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log("The user clicked button-1", evt);
  }

  const onAmazingClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log("The user clicked button-2", evt);
  }

  return (
    <div>
      <h1>What do you think of React</h1>

      <button
        name='button-1'
        value='great'
        onClick={onGreatClick}
      >
        Great
      </button>
      <button
        name='button-2'
        value='amazing'
        onClick={onAmazingClick}
      >
        Amazing
      </button>
    </div>
  )
}
