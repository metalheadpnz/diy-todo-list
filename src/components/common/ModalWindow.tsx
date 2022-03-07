import React from 'react';
import s from './ModalWindow.module.css'

type propTypes = {
    message: string
    callBack: (conform: boolean) => void
}

const ModalWindow: React.FC<propTypes> = (props) => {
    return (
        <div className={s.wrap}>
            <div className={s.modalContent}>
                <span className={s.text}>{props.message}</span>
                <div>
                    <button className={s.yes}
                            onClick={() => props.callBack(true)}>YES
                    </button>
                    <button className={s.no}
                            onClick={() => props.callBack(false)}>NO
                    </button>
                </div>

            </div>

        </div>
    );
};

export default ModalWindow;