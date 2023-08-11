import React from 'react'
import MainTaskView from './Task';
// --------------------//


function TaskViewer({ ListOfTask, WhenClickOnTrash, OnToggleTask }) {
    return (
        <>
            {ListOfTask.map(
                (Task) => (
                    <MainTaskView OnToggleTask={OnToggleTask} OnDeleteTask={WhenClickOnTrash} key={Task.ID} ViewTask={Task} />
                )
            )}
        </>
    )
};
export default TaskViewer;