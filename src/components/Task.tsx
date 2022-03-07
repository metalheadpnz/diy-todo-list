import React from 'react';
import {task} from "../App";

type propTypes = {
    task: task
    changeStatus: (todoListID: string, taskID: string, isDone: boolean) => void
    todoListID: string
    deleteTask: (todoListID: string, taskID: string) => void
}
export const Task: React.FC<propTypes> = ({task, changeStatus, todoListID, deleteTask}) => {
    const {title, isDone, id} = task

    function onCheckBoxChange() {
        changeStatus(todoListID, id, isDone)
    }

    function deleteTaskButtonHandler() {
        deleteTask(todoListID, id)
    }

    return (
        <div>
            <input type="checkbox" checked={isDone} onChange={onCheckBoxChange}/>
            <span
                children={title}
            />
            <button
                children={'x'}
                onClick={deleteTaskButtonHandler}
            />
        </div>
    );
};
