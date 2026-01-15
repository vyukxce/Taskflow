import { useState} from "react";
import TaskList from "./components/TaskList.jsx"
import TaskStats from "./components/TaskStats.jsx"
import React from 'react'

const App = () => {
  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (name)=>
  {
     const newTask ={
      id : Date.now(),
      title : name,
      done : false,
     }

     setTask(prev=>[...prev, newTask]); //It will create a new array;
  }
  const toggleTask = (id)=>
    {
     setTask(prev=>prev.map(task=>task.id === id ? {...task,done:!task.done} : task))
    }
  const filterTasks = tasks.filter(task=>{
    if(filter === "completed") return task.done;
    if(filter === "pending") return !task.done;
    return true;
  })

  const total = tasks.length;
  const completed = tasks.filter(t => t.done).length;
  const pending = total - completed;


  return (
  <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-xl">

      {/* Header */}
      <h1 className="text-2xl font-semibold text-zinc-100 text-center">
        Task Manager
      </h1>

      {/* Stats */}
      <TaskStats
        total={total}
        pending={pending}
        completed={completed}
      />

      {/* Filters */}
      <div className="flex justify-between gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition
            ${filter === "all"
              ? "bg-indigo-600 text-white"
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}
          `}
        >
          All
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition
            ${filter === "completed"
              ? "bg-indigo-600 text-white"
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}
          `}
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("pending")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition
            ${filter === "pending"
              ? "bg-indigo-600 text-white"
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}
          `}
        >
          Pending
        </button>
      </div>

      {/* Task List */}
      <TaskList
        tasks={filterTasks}
        addTask={addTask}
        toggleTask={toggleTask}
      />

    </div>
  </div>
);

}

export default App
