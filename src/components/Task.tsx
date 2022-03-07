import React, {useState} from 'react';
import {task} from "../App";
import ModalWindow from "./common/ModalWindow";

type propTypes = {
    task: task
    changeStatus: (todoListID: string, taskID: string, isDone: boolean) => void
    todoListID: string
    deleteTask: (todoListID: string, taskID: string) => void
}
export const Task: React.FC<propTypes> = ({task, changeStatus, todoListID, deleteTask}) => {
    const {title, isDone, id} = task
    const [modalWindow, setModalWindow] = useState(false)

    function onCheckBoxChange() {
        changeStatus(todoListID, id, isDone)
    }

    function conformDelete(conform: boolean) {
        conform && deleteTask(todoListID, id)
        setModalWindow(false)
    }

    function deleteTaskRequest() {
        setModalWindow(true)
    }

    return (
        <div className={'task'}>
            <span>
                <input type="checkbox" checked={isDone} onChange={onCheckBoxChange}/>
                <span
                    children={title}
                    style={isDone ? {textDecoration: "line-through"} : {}}/>
            </span>
            <button
                children={<>&#10060;</>}
                onClick={deleteTaskRequest}
            />
            {modalWindow && <ModalWindow message={`Delete ${title} ?`}
                                         callBack={conformDelete}/>}
        </div>
    );
};
