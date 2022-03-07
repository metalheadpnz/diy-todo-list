import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './Input.module.css'

type propTypes = {
    buttonText?: any
    callBack: (inputText: string) => void
    wrapClassName?: string
}

export const Input: React.FC<propTypes> = (props) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState(false)

    function onInputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setError(false)
        setInputValue(e.currentTarget.value)
        e.stopPropagation()
    }

    function onKeyEnterDownHandler(e: KeyboardEvent<HTMLInputElement>) {
        e.key === "Enter" && CheckInputSendValueAndClearInput();
        e.stopPropagation()
    }

    function CheckInputSendValueAndClearInput() {
        if (inputValue.trim()) {
            props.callBack(inputValue)
            setInputValue('')
        } else {
            setError(true)
        }
    }

    function onButtonClickHandler() {
        CheckInputSendValueAndClearInput()
    }

    function onSelectHandler() {
        setError(false)
    }

    const totalInputWrapClassName = error ? s.error : ''
    const placeholder = error ? 'Field is require' : ''


    return (
        <div className={props.wrapClassName}>
            <input placeholder={placeholder}
                   className={totalInputWrapClassName}
                   type="text"
                   value={inputValue}
                   onChange={onInputChangeHandler}
                   onKeyDown={onKeyEnterDownHandler}
                   onSelect={onSelectHandler}/>
            <button children={props.buttonText || "+"}
                    onClick={onButtonClickHandler}
                    disabled={error}/>

        </div>
    );
};