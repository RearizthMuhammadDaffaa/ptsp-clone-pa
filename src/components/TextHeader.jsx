import React from 'react'

const TextHeader = ({text1,text2}) => {
  return (
    <div className='text-center mt-5'>
      <h1 className='text-2xl font-semibold'>{text1}</h1>
      <h3>{text2}</h3>
    </div>
  )
}

export default TextHeader