import React from 'react';
import Task from './Task';



const TaskList = ({ tasks, onDelete, onComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} >
              <Task task={task} onDelete={onDelete} onComplete={onComplete} />

         
        </div>
      ))}
    </div>
  );
};

export default TaskList;
