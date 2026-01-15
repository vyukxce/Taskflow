import React from 'react'

const TaskStats = ({ total, pending, completed }) => {
  return (
     <div className="grid grid-cols-3 gap-3">
      {/* Total */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center shadow-sm">
        <p className="text-2xl font-semibold text-zinc-100">{total}</p>
        <p className="text-sm text-zinc-400 mt-1">Total</p>
      </div>

      {/* Completed */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center shadow-sm">
        <p className="text-2xl font-semibold text-emerald-400">{completed}</p>
        <p className="text-sm text-zinc-400 mt-1">Completed</p>
      </div>

      {/* Pending */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center shadow-sm">
        <p className="text-2xl font-semibold text-amber-400">{pending}</p>
        <p className="text-sm text-zinc-400 mt-1">Pending</p>
      </div>
    </div>
  );
};

export default TaskStats
