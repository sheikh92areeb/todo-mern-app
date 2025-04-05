import React from 'react'

function Navbar() {
  return (
    <nav className='h-[50px] flex justify-between items-center bg-indigo-500 px-35 py-2 text-white shadow-md'>
        <div className="logo font-bold text-2xl">Task ToDo</div>
        <ul className="nav-list flex space-x-6">
            <li className="list-item"><a href="/" className="nav-link hover:text-indigo-200">Home</a></li>
            <li className="list-item"><a href="/" className="nav-link hover:text-indigo-200">My Tasks</a></li>
            <li className="list-item"><a href="/" className="nav-link hover:text-indigo-200">Setting</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
