import React, {ChangeEvent, useState} from 'react';
import {task} from "../App";
import {Task} from "./Task";

type propTypes = {
    tasks: task[]
    todoListTitle: string
    taskListID: string
    addTask: (todoListID: string, taskID: string, title: string) => void
}

export const TodoList: React.FC<propTypes> = (props) => {
    const addTask = (taskID: string, title: string) => {
        props.addTask(props.taskListID, taskID, title)
    }

    const [inputText, setInputText] = useState('')
    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
        e.stopPropagation()
    }

    const addTaskHandler = () => {

    }

    return (
        <div className='todoList'>
            <div>{props.todoListTitle}</div>
            <input type="text"
                   value={inputText}
                   onChange={onInputChangeHandler}/>
            <button children={'+'}
                    onClick={addTaskHandler}/>
            <div>
                {props.tasks.map(task =>
                    <Task
                        key={task.id}
                        task={task}
                    />)}
            </div>
        </div>
    );
};
