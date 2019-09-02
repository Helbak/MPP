import React, { Component } from 'react';
import TableTr from './TableTr.jsx';
import './styles.less';

const Crud = (props)=> {
    
    const refPassword = React.createRef();
    const callBackValues = (type) => {
        const obj = {
            inputValue: refPassword.current.value,
            type: type,
        }
        props.btnCrud(obj);
    }
    const newArrayState = props.stadeCrud.arrayPerson.map( newObj => <TableTr Id = {newObj.Id} user={newObj.Username} pass={newObj.Password} email={newObj.Email} phone={newObj.Phone} name={newObj.Name} sur={newObj.Surname} gender={newObj.Gender} rel={newObj.Relantionship_status} prog={newObj.Programming_languages} work={newObj.Work_experience} /> );
    const arrayError = [];
    const foo = () => {
        if(props.stadeCrud.errorBlockCrudState === 1) {
            arrayError.push(<div className="element-input__login-inputError" id="massageError">Check out data entry field</div>)
        } else if(props.stadeCrud.errorBlockCrudState === 2) {
            arrayError.push(<div className="element-input__login-inputError" id="massageError">The JSON string is not written correctly</div>)
        } else {
            arrayError.push('');
        }
    }
    foo();                                                      
    return (
    
        <div className="crud-module" id="crudModule">
            <div className="crud-module__header element-header">
                <table className="element-header__header">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Gender</th>
                            <th>Relantionship status</th>
                            <th>Programming languages</th>
                            <th>Work experience</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="crud-module__table element-table">
                <table className="element-table__table" id="myTable">
                    <tbody id="tbody" className="element-table__table_body">
                        { newArrayState }
                    </tbody>
                </table>
            </div>
            <div className="crud-module__input element-input">
                <div key = {props.stadeCrud.inputCrudValue}>
                    <input className="element-input__input-crud" ref={ refPassword } defaultValue={ props.stadeCrud.inputCrudValue }/>
                </div>
                { arrayError }
            </div>
            <div className="crud-module__buttons element-buttons">
                <button className="element-buttons__btn-crud" id="btnCreate" onClick={ ()=>{callBackValues('create')} }>CREATE</button>
                <button className="element-buttons__btn-crud" id="btnRead" onClick={ ()=>{callBackValues('read')} }>READ</button>
                <button className="element-buttons__btn-crud" id="btnUpdate" onClick={ ()=>{callBackValues('update')} }>UPDATE</button>
                <button className="element-buttons__btn-crud" id="btnDelete" onClick={ ()=>{callBackValues('delete')} }>DELETE</button>
                <button className="element-buttons__btn-crud" id="btnClear" onClick={ ()=>{callBackValues('clear')} }>CLEAR</button>
                <button className="element-buttons__btn-crud" id="btnTop" onClick={ ()=>{callBackValues('top')} }>ADD TOP</button>
                <button className="element-buttons__btn-crud" id="btnMid" onClick={ ()=>{callBackValues('middle')} }>ADD MIDDLE</button>
                <button className="element-buttons__btn-crud" id="btnEnd" onClick={ ()=>{callBackValues('end')} }>ADD END</button>
                <button className="element-buttons__btn-crud" id="btnSaveDb" onClick={ ()=>{callBackValues('save')} }>SAVE DATABASE</button>
                <button className="element-buttons__btn-crud" id="btnRestoreDb" onClick={ ()=>{callBackValues('restore')} }>RESTORE DATABASE</button>
            </div>
        </div>
        
    )
}

export default Crud;