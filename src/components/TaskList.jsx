import React from 'react'

const TaskList = ({tasks , addTask , toggleTask }) => {

    const submitHandler = (e)=>{
       e.preventDefault();
        const newTask ={
        id : Date.now(),
        title : e.target.name.value,
        done : false,
     }
    const value = e.target.name.value.trim();
    if(!value) return;
    addTask(value);
    e.target.reset();
    }
  return (
    <div className="space-y-6 text-zinc-100">
      {/* Add Task */}
      <form
        onSubmit={submitHandler}
        className="flex gap-2 bg-zinc-900 p-3 rounded-xl shadow-md"
      >
        <input
          name="name"
          placeholder="Add a new task..."
          className="flex-1 bg-transparent border border-zinc-700 rounded-lg px-3 py-2 outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg font-medium"
        >
          Add
        </button>
      </form>

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition ${
              task.done ? "opacity-60" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="accent-indigo-500 w-4 h-4"
            />

            <span
              className={`flex-1 ${
                task.done ? "line-through text-zinc-400" : ""
              }`}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
