import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-lg p-5'>
    <div className='flex items-center justify-between '>
      <h3 className='text-sm  px-3 py-1 bg-red-600 rounded-lg '>{data.category}</h3>
      <h4 className='text-sm'>{data.date}</h4>
    </div> 
  <h2 className='mt-5 text-2xl font-semibold tracking-tighter'>{data.title}</h2>
  <p className='mt-2 text-sm'>
  {data.description}
  </p>
        <div className='mt-5'>
            <button className='px-2 py-1 bg-blue-500 text-sm rounded'>Accept Task</button>
        </div>
  </div>
  )
}

export default CompleteTask