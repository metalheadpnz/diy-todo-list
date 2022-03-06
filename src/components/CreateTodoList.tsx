import React from 'react';
import {Input} from "./Input";

type propTypes = {
    addNewTodoList: (newListTitle: string) => void
}

export const CreateTodoList: React.FC<propTypes> = (props) => {

    function addList (inputText: string) {
        props.addNewTodoList(inputText)
    }

    return (
        <div className={'CreateTodoListForm'}>
            <Input buttonText={'addList'}
                   callBack={addList}/>
        </div>
    );
};
