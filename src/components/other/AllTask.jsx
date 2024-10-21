import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {
    const AuthData = useContext(AuthContext)
    
  return (
    <div className='w-full h-screen bg-zinc-800 p-5 rounded mt-5 w-full'>
        <div className='px-5 py-2 bg-red-500 flex align-center justify-between rounded mt-2'>
            <h2 className='w-1/5 text-lg font-medium text-center  '>Employee Name</h2>
            <h3 className='w-1/5 text-lg font-medium text-center '>New Task</h3>
            <h4 className='w-1/5 text-lg font-medium text-center '>Active Task</h4>
            <h4 className='w-1/5 text-lg font-medium text-center '>Completed</h4>
            <h4 className='w-1/5 text-lg font-medium text-center '>Failed Task</h4>
        </div>
        <div >
        {AuthData.employees.map(function(elem, idx){
            return   <div key={idx} className='px-5 py-2 border-2 border-emerald-500 flex items-center justify-between rounded mt-2 '>
            <h2 className='w-1/5 text-white text-lg font-medium text-center '>{elem.firstName}</h2>
            <h3 className='w-1/5 text-blue-500 text-lg font-medium text-center'>{elem.taskSummary.newTask}</h3>
            <h4 className='w-1/5 text-yellow-500 text-lg font-medium text-center'>{elem.taskSummary.active}</h4>
            <h4 className='w-1/5 text-green-500 text-lg font-medium text-center'>{elem.taskSummary.completed}</h4>
            <h4 className='w-1/5 text-red-500 text-lg font-medium text-center'>{elem.taskSummary.failed}</h4>

        </div>
        })}
        </div>
     
    </div>
  )
}

export default AllTask