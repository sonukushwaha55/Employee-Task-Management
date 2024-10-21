import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='w-full min-h-screen bg-zinc-800 p-10'>
    <Header changeUser={props.changeUser} />
   <CreateTask />
   <AllTask />
</div>


  )
}

export default AdminDashboard