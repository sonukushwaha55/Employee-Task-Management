import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='mt-10  flex flex-wrap gap-5  '>
        <div className='bg-blue-500 min-w-[280px] px-8 py-5 rounded-lg'>
            <h1 className='text-3xl font-bold'>{data.taskSummary.newTask}</h1>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='bg-yellow-500 min-w-[280px] px-8 py-5 rounded-lg'>
            <h1 className='text-3xl font-bold'>{data.taskSummary.completed}</h1>
            <h3 className='text-2xl font-semibold'>Completed Task</h3>
        </div>
        <div className='bg-green-500 min-w-[280px] px-8 py-5 rounded-lg'>
            <h1 className='text-3xl font-bold'>{data.taskSummary.active}</h1>
            <h3 className='text-2xl font-semibold'>Accepted Task</h3>
        </div>
        <div className='bg-red-500 min-w-[280px] px-8 py-5 rounded-lg'>
            <h1 className='text-3xl font-bold'>{data.taskSummary.failed}</h1>
            <h3 className='text-2xl font-semibold'>Failed Task</h3>
        </div>
       
        
        
        
    </div>
  )
}

export default TaskListNumber