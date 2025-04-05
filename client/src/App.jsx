import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/test`)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
  <>
    <Navbar/>
    <main className='h-[calc(100vh-80px)]'>
      <div className="w-full h-full px-35 py-6">
        <h1 className='text-3xl font-bold text-center text-gray-600 mb-2'>Welcome to Task ToDo</h1>
        <div className="list-container bg-gray-50 w-full max-h-[90%] rounded-lg p-4 shadow-md overflow-y-auto">
          <h2 className='font-bold text-xl text-gray-600 text-center'>Task ToDo The Ultimate Task Manager</h2>

          <div className="add-todo border-b border-gray-300 pb-4">
            <h3 className='font-bold text-lg mb-2'>Add Task</h3>
            <form className="flex justify-between items-center mb-2">
              <input type="text" placeholder="Add a new task" className="text-gray-600 border border-gray-300 outline-0 focus:border-indigo-800 rounded-lg px-6 py-1 w-full mr-2"/>
              <button type="submit" className="bg-indigo-500 text-white px-4 py-1 rounded-lg hover:bg-indigo-800 cursor-pointer">Add</button>
            </form>
            <input type="checkbox" name="" id="showTask" className='me-3' />
            <label htmlFor="showTask">Show Completed</label>
          </div>

          <div className="todos mt-2">
            <h3 className='font-bold text-lg mb-2'>My Task</h3>
            <div className="todo-list">
                <div className="todo h-full flex justify-between border-b border-gray-300 pb-1">
                  <div className="task-name w-[80%] flex gap-3">
                    <input type="checkbox" id='task1' />
                    <label htmlFor="task1" className='text-gray-600 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, dolores explicabo! Nihil deserunt adipisci placeat tenetur velit sint maiores, accusantium nobis explicabo debitis optio consectetur tempore, ea fuga hic non.</label>
                  </div>
                  <div className="actions">
                    <button className='text-sm text-green-500 border border-green-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-green-500 hover:text-white'>Edit</button>
                    <button className='text-sm text-red-500 border border-red-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-red-500 hover:text-white'>Delete</button>
                  </div>
                </div>
                <div className="todo h-full flex justify-between border-b border-gray-300 pb-1">
                  <div className="task-name w-[80%] flex gap-3">
                    <input type="checkbox" id='task1' />
                    <label htmlFor="task1" className='text-gray-600 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, dolores explicabo! Nihil deserunt adipisci placeat tenetur velit sint maiores, accusantium nobis explicabo debitis optio consectetur tempore, ea fuga hic non.</label>
                  </div>
                  <div className="actions">
                    <button className='text-sm text-green-500 border border-green-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-green-500 hover:text-white'>Edit</button>
                    <button className='text-sm text-red-500 border border-red-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-red-500 hover:text-white'>Delete</button>
                  </div>
                </div>
                <div className="todo h-full flex justify-between border-b border-gray-300 pb-1">
                  <div className="task-name w-[80%] flex gap-3">
                    <input type="checkbox" id='task1' />
                    <label htmlFor="task1" className='text-gray-600 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, dolores explicabo! Nihil deserunt adipisci placeat tenetur velit sint maiores, accusantium nobis explicabo debitis optio consectetur tempore, ea fuga hic non.</label>
                  </div>
                  <div className="actions">
                    <button className='text-sm text-green-500 border border-green-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-green-500 hover:text-white'>Edit</button>
                    <button className='text-sm text-red-500 border border-red-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-red-500 hover:text-white'>Delete</button>
                  </div>
                </div>
                <div className="todo h-full flex justify-between border-b border-gray-300 pb-1">
                  <div className="task-name w-[80%] flex gap-3">
                    <input type="checkbox" id='task1' />
                    <label htmlFor="task1" className='text-gray-600 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, dolores explicabo! Nihil deserunt adipisci placeat tenetur velit sint maiores, accusantium nobis explicabo debitis optio consectetur tempore, ea fuga hic non.</label>
                  </div>
                  <div className="actions">
                    <button className='text-sm text-green-500 border border-green-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-green-500 hover:text-white'>Edit</button>
                    <button className='text-sm text-red-500 border border-red-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-red-500 hover:text-white'>Delete</button>
                  </div>
                </div>
                <div className="todo h-full flex justify-between border-b border-gray-300 pb-1">
                  <div className="task-name w-[80%] flex gap-3">
                    <input type="checkbox" id='task1' />
                    <label htmlFor="task1" className='text-gray-600 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, dolores explicabo! Nihil deserunt adipisci placeat tenetur velit sint maiores, accusantium nobis explicabo debitis optio consectetur tempore, ea fuga hic non.</label>
                  </div>
                  <div className="actions">
                    <button className='text-sm text-green-500 border border-green-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-green-500 hover:text-white'>Edit</button>
                    <button className='text-sm text-red-500 border border-red-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-red-500 hover:text-white'>Delete</button>
                  </div>
                </div>
                <div className="todo h-full flex justify-between border-b border-gray-300 pb-1">
                  <div className="task-name w-[80%] flex gap-3">
                    <input type="checkbox" id='task1' />
                    <label htmlFor="task1" className='text-gray-600 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, dolores explicabo! Nihil deserunt adipisci placeat tenetur velit sint maiores, accusantium nobis explicabo debitis optio consectetur tempore, ea fuga hic non.</label>
                  </div>
                  <div className="actions">
                    <button className='text-sm text-green-500 border border-green-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-green-500 hover:text-white'>Edit</button>
                    <button className='text-sm text-red-500 border border-red-500 px-3 py-1 rounded-md cursor-pointer ms-3 hover:bg-red-500 hover:text-white'>Delete</button>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </main>
    <Footer/>

  </>);
}

export default App;
