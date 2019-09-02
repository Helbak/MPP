import React, { Component } from 'react';
import Login from './Components/Login/Login.jsx';
import Crud from './Components/Crud/Crud.jsx';
import './styles.less';

const ModulCrud = (props)=> {
    const array = [];
    const foo = () => {
        if(props.stadeCrud.blockLoginState == 1) {
            array.push(<Login btnCrud={ props.btnCrud} stadeCrud={props.stadeCrud}/>)
        } else {
            array.push(<Crud btnCrud={ props.btnCrud } stadeCrud={props.stadeCrud}/>)
        }
    }
    foo();
    return (
        <div>
           { array }
        </div>
    )
};

export default ModulCrud;