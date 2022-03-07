import React, {useState} from 'react';
import {filterType, task} from "../App";
import {Task} from "./Task";
import {FilterButtons} from "./FilterButtons";
import {Input} from "./Input";
import ModalWindow from "./common/ModalWindow";

type propTypes = {
    tasks: task[]
    todoListTitle: string
    taskListID: string
    filter: filterType
    addTask: (todoListID: string, title: string) => void
    changeFilter: (todoListID: string, filter: filterType) => void
    deleteTodoList: (todoListID: string) => void
    changeStatus: (todoListID: string, taskID: string, isDone: boolean) => void
    deleteTask: (todoListID: string, taskID: string) => void
}

export const TodoList: React.FC<propTypes> = (props) => {
    const [modalWindow, setModalWindow] = useState(false)

    function deleteTodoListRequest() {
        console.log('request')
        setModalWindow(true)
        // props.deleteTodoList(props.taskListID)
    }

    function conformDelete(conform: boolean) {
        conform && props.deleteTodoList(props.taskListID)
        setModalWindow(false)
    }

    function addTask(inputText: string) {
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
            <h3 className={'h3'}>{props.todoListTitle}&nbsp;
                <button onClick={deleteTodoListRequest}>&#9762;</button>
            </h3>
            <Input buttonText={'add'}
                   callBack={addTask}
                   wrapClassName={'inputTask'}/>

            <div className={'taskListWrap'}>
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
                filter={props.filter}
            />
            {modalWindow && <ModalWindow
                message={`Delete ${props.todoListTitle}?`}
                callBack={conformDelete}/>}
        </div>
    );
};
