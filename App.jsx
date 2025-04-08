import { useState } from 'react'
import './App.css'
import TodoItem from '\assets\TodoItem.jsx'

function App() {
  const [tasks, setTask] = useState([])
  const [input, setInput] = useState('')


  const handlenewtask = (e) => {setInput(e.target.value); setInput('');};

  const myTask = () => { if(input.trim()) { 
    setTask([...tasks, { Id: Date.now(), text: input }]);}
    setInput('');
  };

  const deletetasks = (id) => {
    setTask(tasks.filter(task => task.id !== id));
  };


  return (
    <>
    <h1>To DO LIST</h1>
    <div>
      <input value={input} onChange= { handlenewtask } placeholder='Enter your task' />
      <button onClick = { myTask } > Add </button>
    </div>
    <div>
      {tasks.map(task => ( <TodoItem key={task.id} task={task} onDelete={deletetasks} />
     ))}
    </div>


    </>
  );
}



export default App
