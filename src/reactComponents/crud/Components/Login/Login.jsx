import React, { Component } from 'react';
import './styles.less';


const Login = (props)=> {
    
    const refLogin = React.createRef();
    const refPassword = React.createRef();
    const callBackValues = (types) => {
        const obj = {
            login: refLogin.current.value,
            password: refPassword.current.value,
            type: types,
        }
        props.btnCrud(obj);
    }
    const arrayError1 = [];
    const arrayError2 = [];
    const foo = () => {
        if(props.stadeCrud.errorBlockLoginState1 === 1) {
            arrayError1.push(<div className="element-inputs__input-error" id="loginUsernameError">Login is not correct</div>)
        } else {
            arrayError1.push('');
        }
        
        if(props.stadeCrud.errorBlockLoginState2 === 1) {
            arrayError2.push(<div className="element-inputs__input-error" id="loginPasswordError">Password is not correct</div>)
        } else {
            arrayError2.push('');
        }
    }
    foo();
    
    
    return (
    
        <div className="login" id="loginModule">
            <div className="login__title element-title">
                    <p className="element-title__login-title">Login</p>
                </div>
            <div className="login__inputs element-inputs">
                    <input className="element-inputs__input" id="loginUsername" placeholder="Username" type="text" ref = { refLogin }/>
                    { arrayError1 }
                    <input className="element-inputs__input" id="loginPassword" placeholder="Password" type="password" ref = { refPassword }/>
                    { arrayError2 }
                </div>
            <div className="login__button element-button">
                    <button className="element-button__btn btn" id="btnSignUpLogin" onClick={ ()=>{callBackValues('singUp')} }>Sign Up</button>
                </div>
        </div>

        
    )
};

export default Login;