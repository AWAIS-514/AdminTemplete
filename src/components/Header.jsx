import React from 'react'

const Header = ({ category, title }) => {
  return (
    <div className=' ml-5 headingMain'>

      <p className='text-3xl font-extrabold tracking-tight text-slate-600 ml-2'>
        {title}
      </p>
    </div>
  )
}

export default Header