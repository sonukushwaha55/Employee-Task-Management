import React from 'react'

  const Header = (props) => {
  const logOutUser = () =>{
  localStorage.setItem("loggedInUser", "")
  props.changeUser('')
  
  }

  return (
    <div className=' flex items-start justify-between'>
        <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold'>Username 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 px-4 py-2 font-medium text-lg rounded-md hover:bg-red-700'>Log Out</button>
    </div>
  )
}

export default Header