import React, {ChangeEvent, useState} from 'react';

type propTypes = {
    addNewTodoList: (newListTitle: string) => void
}

export const CreateTodoListForm: React.FC<propTypes> = (props) => {
    const [inputText, setInputText] = useState('')

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }
    const addButtonHandler = () => {
        props.addNewTodoList(inputText)
    }

    return (
        <div className={'CreateTodoListForm'}>
            <input type="text"
                   value={inputText}
                   onChange={onInputChangeHandler}/>
            <button onClick={addButtonHandler}>add</button>
        </div>
    );
};
