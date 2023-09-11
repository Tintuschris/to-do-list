import React from 'react';
import TaskDetails from '../../components/TaskDetails'; 

const TaskDetailsPage = ({ task }) => {
  return (
    <div>
      <TaskDetails task={task} />
    </div>
  );
};

export default TaskDetailsPage;


export async function getServerSideProps({ params }) {
    const taskId = params.id;
  
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const task = storedTasks.find((task) => task.id === taskId) || {};
  
      return {
        props: { task },
      };
    } catch (error) {
      console.error('Error fetching task:', error);
  
      return {
        props: { task: {} }, // Return an empty task or handle the error accordingly
      };
    }
  }