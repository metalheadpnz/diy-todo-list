import React from 'react';
import {filterType, task} from "../App";
import {Task} from "./Task";
import {FilterButtons} from "./FilterButtons";
import {Input} from "./Input";

type propTypes = {
    tasks: task[]
    todoListTitle: string
    taskListID: string
    filter: filterType
    addTask: (todoListID: string, title: string) => void
    changeFilter: (todoListID: string, filter: filterType) => void
    deleteTodoList: (todoListID: string) => void
    changeStatus: (todoListID:string, taskID:string, isDone:boolean)=> void
    deleteTask: (todoListID:string, taskID:string) => void
}

export const TodoList: React.FC<propTypes> = (props) => {

    function deleteTodoListHandler() {
        props.deleteTodoList(props.taskListID)
    }

    function addTask (inputText: string) {
        props.addTask(props.taskListID, inputText)
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
            <Input buttonText={'add'}
                   callBack={addTask}/>

            <div>
                {filteredTasks.map(task =>
                    <Task
                        key={task.id}
                        task={task}
                        changeStatus={props.changeStatus}
                        todoListID={props.taskListID}
                        deleteTask={props.deleteTask}
                    />)}
            </div>
            <FilterButtons
                changeFilter={props.changeFilter}
                taskListID={props.taskListID}
            />
        </div>
    );
};
