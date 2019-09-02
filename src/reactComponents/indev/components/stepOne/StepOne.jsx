import React, {Component} from 'react';
import '../style.less';

const StepOne = (props) => {
    const refUsername = React.createRef();
    const refPassword = React.createRef();
    const refConfirm = React.createRef();
    const refEmail = React.createRef();
    const refTel = React.createRef();

    const writeText = (action) => {
        const obj = {
            text: getText(action),
            action: action
        };
        props.reducerModel(obj);
    };

    const getText = (action) => {
        switch (action) {
            case 'Username':
                return refUsername.current.value
            case 'Password':
                return refPassword.current.value
            case 'Confirm':
                return refConfirm.current.value
            case 'Email':
                return refEmail.current.value
            case 'Phone':
                return refTel.current.value
            case 'hideTip':
                return 'hideTip'
        }
    };

    return (
        <div className="indev-module__main__steps first">
            <div className="indev-module__main__steps-container">
                <input className="indev-module__main-steps__inputs" id="username" type="text" ref={refUsername}
                       defaultValue={props.controllerIndev.model.username} onKeyUp={() => writeText('Username')} placeholder="Username"></input>
                <input className="indev-module__main-steps__inputs" id="password" type="password" ref={refPassword}
                       defaultValue={props.controllerIndev.model.password} onKeyUp={() => writeText('Password')} placeholder="Password"></input>
                <input className="indev-module__main-steps__inputs" id="confirm" type="password" ref={refConfirm}
                       defaultValue={props.controllerIndev.model.confirm} onKeyUp={() => writeText('Confirm')} placeholder="Repeat password"></input>
                <input className="indev-module__main-steps__inputs" id="email" type="text" ref={refEmail}
                       defaultValue={props.controllerIndev.model.email} onKeyUp={() => writeText('Email')} placeholder="E-mail"></input>
                <input className="indev-module__main-steps__inputs" id="phone" type="tel" ref={refTel}
                       defaultValue={props.controllerIndev.model.phone} onKeyUp={() => writeText('Phone')} placeholder="Phone number"></input>
            </div>
            <div className="indev-module__main__steps__footer footer-block">
                <div className="footer-block__btn-prev"></div>
                <div className="footer-block__text">
                    <p className="indev-module__main-steps__inputs__step">1/3</p>
                </div>
                <div className="footer-block__btn-next">
                    <button className="indev-module__main__button-next" id="nextButton"
                            onClick={() => props.callback('StepTwo')}
                    >Next step
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StepOne;