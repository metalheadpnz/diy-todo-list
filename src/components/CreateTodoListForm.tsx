import React from 'react';
import {AddItem} from "./AddItem";

type propTypes = {
    addNewTodoList: (newListTitle: string) => void
}

export const CreateTodoListForm: React.FC<propTypes> = (props) => {

    function addList (inputText: string) {
        props.addNewTodoList(inputText)
    }

    return (
        <div className={'CreateTodoListForm'}>
            <AddItem buttonText={'addList'}
            callBack={addList}/>
        </div>
    );
};
