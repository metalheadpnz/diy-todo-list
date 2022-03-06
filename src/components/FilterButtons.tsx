import React from 'react';
import {filterType} from "../App";

type propTypes = {
    changeFilter: (taskListID: string, filter: filterType) => void
    taskListID: string
}

export const FilterButtons: React.FC<propTypes> = (props) => {
    const buttons: filterType[] = ['all', 'completed', 'active']

    const buttonHandler = (filter: filterType) => {
        props.changeFilter(props.taskListID, filter)
    }
    return (
        <div>
            {
                buttons.map((b, num) =>
                    <button
                        children={b.toUpperCase()}
                        key={num}
                        onClick={() => buttonHandler(b)}/>
                )
            }
        </div>
    );
};
