import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {task} from "../App";
import {Task} from "./Task";

type propTypes = {
    tasks: task[]
    todoListTitle: string
    taskListID: string
    addTask: (todoListID: string, title: string) => void
}

export const TodoList: React.FC<propTypes> = (props) => {

    const [inputText, setInputText] = useState('')
    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
        e.stopPropagation()
    }

    const addTaskHandler = () => {
        props.addTask(props.taskListID, inputText)
        setInputText('')
    }

    const onInputEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && addTaskHandler()


    }

    return (
        <div className='todoList'>
            <div>{props.todoListTitle}</div>
            <input type="text"
                   value={inputText}
                   onChange={onInputChangeHandler}
                   onKeyDown={onInputEnterKeyPress}/>
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
