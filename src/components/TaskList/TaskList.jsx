import React from 'react'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  
  return (
    <div id='tasklist' className='relative h-[300px] overflow-x-auto  flex items-center justify-start flex-nowrap  gap-5 mt-10 '>
  {data.tasks.map((elem, idx) =>{
if(elem.active){
  return <AcceptTask key={idx} data = {elem}/>
}
if(elem.newTask){
  return <NewTask key={idx}  data = {elem}/>
}
if(elem.completed){
  return <CompleteTask key={idx}  data = {elem}/>
}
if(elem.failed){
  return <FailedTask key={idx}  data = {elem}/>
}

  })}
    </div>
  )
}

export default TaskList