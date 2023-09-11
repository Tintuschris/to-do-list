import React from 'react';
import Link from 'next/link';
const Task = ({ task, onDelete, onComplete }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 m-2 rounded-lg shadow-md text-black">
      <span className={task.completed ? 'line-through text-gray-400' : ''}>
        {task.text}
      </span>
      <div>
        <button
          className={`bg-green-500 text-white px-4 py-2 rounded-md ${
            task.completed ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => onComplete(task.id)}
          disabled={task.completed}
        >
          Complete
        </button>
        <button
          className="bg-red-500 text-white ml-2 px-4 py-2 rounded-md"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
        <Link href={`/task/${task.id}`}  className="bg-blue-600 text-white m-2 px-4 py-2 rounded-md">
            Task Details
          </Link>
      </div>
    </div>
  );
};

export default Task;
