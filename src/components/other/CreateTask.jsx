import React, { useState } from 'react';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [asignTO, setAsignTO] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the new task object directly
    const newTask = {
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      completed: true,
      failed: false,
    };

    // Fetch the existing data from localStorage
    const data = JSON.parse(localStorage.getItem('employees')) || [];

    // Update the relevant employee with the new task
    data.forEach((elem) => {
      if (asignTO === elem.firstName) {
        if (!elem.tasks) {
          elem.tasks = []; // Initialize the tasks array if it doesn't exist
        }
        elem.tasks.push(newTask);
        // console.log(elem);
      }
    });

    // Save the updated data back to localStorage
    localStorage.setItem('employees', JSON.stringify(data));

    // Clear input fields after submission
    setTitle('');
    setDate('');
    setDescription('');
    setAsignTO('');
    setCategory('');
  };

  return (
    <div className='flex items-start justify-center w-full mt-5'>
      <form
        onSubmit={submitHandler}
        className='flex items-start justify-between p-8 w-full gap-32 rounded-lg'
      >
        <div className='w-1/2'>
          <h3 className='text-lg text-white'>Task Title</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='bg-transparent border-2 border-emerald-900 outline-none rounded-md px-5 py-2 mb-4 w-full text-white'
            type='text'
            placeholder='Make a UI design'
          />
          <h3 className='text-lg text-white'>Date</h3>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='bg-transparent border-2 border-emerald-900 outline-none rounded-md px-5 py-2 mb-4 w-full text-white'
            type='date'
            style={{
              colorScheme: 'dark',
            }}
          />
          <h3 className='text-lg text-white'>Assign To</h3>
          <input
            value={asignTO}
            onChange={(e) => setAsignTO(e.target.value)}
            className='bg-transparent border-2 border-emerald-900 outline-none rounded-md px-5 py-2 mb-4 w-full text-white'
            type='text'
            placeholder='Name of person'
          />
          <h3 className='text-lg text-white'>Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='bg-transparent border-2 border-emerald-900 outline-none rounded-md px-5 py-2 mb-4 w-full text-white'
            type='text'
            placeholder='Design, Development etc...'
          />
        </div>
        <div className='w-1/2'>
          <h3 className='text-lg text-white'>Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='bg-transparent border-2 border-emerald-900 outline-none rounded-md px-5 py-2 mb-4 w-full h-40 text-white resize-none'
            placeholder='Detail descriptions of task (Max 500 words)'
          ></textarea>
          <button className='bg-emerald-700 text-white px-4 py-2 rounded-md w-full hover:bg-emerald-800'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
