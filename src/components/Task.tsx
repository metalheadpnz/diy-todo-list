import React from 'react';
import {task} from "../App";

type propTypes = {
    task: task
}
export const Task: React.FC<propTypes> = ({task}) => {
    const {title, isDone, id} = task

    return (
        <div>
            <input type="checkbox" checked={isDone} onChange={() => {
            }}/>
            <span
                children={title}
            />
            <button
                children={'x'}
            />
        </div>
    );
};
