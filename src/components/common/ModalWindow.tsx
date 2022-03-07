import React from 'react';
import s from './ModalWindow.module.css'
type propTypes = {
    message: string
    callBack: any
}

const ModalWindow: React.FC<propTypes> = (props) => {
    return (
        <div className={s.wrap}>
            <div className={s.modalContent}>
                <span className={s.text}>{props.message}</span>
                <div>
                    <button>YES</button>
                    <button>NO</button>
                </div>

            </div>

        </div>
    );
};

export default ModalWindow;