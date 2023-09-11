import React, { useEffect, useState } from 'react';

const TaskDetail = ({ task }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Details</h1>
      <div className="bg-white p-4 rounded-lg shadow-md text-black">
        <p><strong>Task:</strong> {task.text}</p>
        <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Incomplete'}</p>
        <p><strong>Task ID:</strong> {task.id}</p>
      </div>
    </div>
  );
};

export default TaskDetail;


  

