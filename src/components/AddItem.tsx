import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type propTypes = {
    buttonText?: any
    callBack: (inputText: string) => void
}

export const AddItem: React.FC<propTypes> = (props) => {
    const [inputValue, setInputValue] = useState('')

    function onInputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setInputValue(e.currentTarget.value)
        e.stopPropagation()
    }

    function onKeyEnterDownHandler(e: KeyboardEvent<HTMLInputElement>) {
        e.key === "Enter" && sendInputValueAndClearInput();
        e.stopPropagation()
    }

    function sendInputValueAndClearInput() {
        if (inputValue.trim()) {
            props.callBack(inputValue)
            setInputValue('')
        } else {
            console.log('fail')
        }
    }

    function onButtonClickHandler() {
        sendInputValueAndClearInput()
    }


    return (
        <div>
            <input type="text"
                   value={inputValue}
                   onChange={onInputChangeHandler}
                   onKeyDown={onKeyEnterDownHandler}/>
            <button children={props.buttonText || "+"}
                    onClick={onButtonClickHandler}/>
        </div>
    );
};