import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {filterType, task} from "../App";
import {Task} from "./Task";
import {FilterButtons} from "./FilterButtons";
import {AddItem} from "./AddItem";

type propTypes = {
    tasks: task[]
    todoListTitle: string
    taskListID: string
    filter: filterType
    addTask: (todoListID: string, title: string) => void
    changeFilter: (todoListID: string, filter: filterType) => void
    deleteTodoList: (todoListID: string) => void
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

    function deleteTodoListHandler() {
        props.deleteTodoList(props.taskListID)
    }

    const filteredTasks = (() => {
            switch (props.filter) {
                case 'all':
                    return props.tasks;
                case 'completed':
                    return props.tasks.filter(el => el.isDone)
                case 'active':
                    return props.tasks.filter(el => !el.isDone)
            }
        }
    )()


    return (
        <div className='todoList'>
            <h3>{props.todoListTitle}
                <button onClick={deleteTodoListHandler}>x</button>
            </h3>
            <AddItem/>
            <input type="text"
                   value={inputText}
                   onChange={onInputChangeHandler}
                   onKeyDown={onInputEnterKeyPress}/>
            <button children={'+'}
                    onClick={addTaskHandler}/>
            <div>
                {filteredTasks.map(task =>
                    <Task
                        key={task.id}
                        task={task}
                    />)}
            </div>
            <FilterButtons
                changeFilter={props.changeFilter}
                taskListID={props.taskListID}
            />
        </div>
    );
};
