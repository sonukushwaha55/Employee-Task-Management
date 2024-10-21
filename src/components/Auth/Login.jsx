import  {React, useState } from 'react'


const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
  



    const submitHandler = (e) =>{
      e.preventDefault()
      handleLogin(email, password)
      setEmail("")
      setPassword("")
    }

  return (
    <div className=' flex items-center justify-center w-screen h-screen bg-zinc-800 text-white '>
     <div className='border-2 border-emerald-600 p-16 rounded-lg' >
    <form 
    onSubmit={(e) =>{
        submitHandler(e)

    }}
    className='flex flex-col items-center justify-center'>
        <input 
        value={email}
        onChange={(e) =>{
           setEmail(e.target.value)
        }}
        required className='px-8 py-3 w-full bg-transparent rounded-full outline-none font-semibold text-xl border-2 border-emerald-800' type="email" placeholder='Enter your email' />
        <input 
        value={password}
        onChange={(e) =>{
            setPassword(e.target.value)
        }}
        required className='px-8 py-3 w-full bg-transparent rounded-full outline-none font-semibold text-xl border-2 border-emerald-800 mt-2' type="password" placeholder='Enter password' />
        <button className='px-8 py-3 w-full border-none outline-none bg-emerald-600 hover:bg-emerald-700 text-lg font-semibold rounded-full mt-10'>Login</button>
    </form>
     </div>
    </div>
  )
}

export default Login