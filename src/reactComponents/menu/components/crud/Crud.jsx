import React, {Component} from 'react';
import './styles.less';

const Crud = ({ callback }) => {
        return (
            <div className="main-module__crud main-modules-back">
                <img className="main-module__crud__img main-module-img" src="images/crudimg.png"></img>
                <div className="main-modules-back__text">
                    <p className="main-module__text" id="mainTextCrud">CRUD</p>
                </div>
                <div className="main-module__descriptipon">
                    <a className="descriptipon" id="mainDescriptionCrud">Copy, Read, Update, Delete user
                        information in database simply and fast.</a>
                </div>
                <div className="main-module__crud__button">
                    <button className="button-widget" id="btnCrud" onClick={() => callback('crud')}> Start ></button>
                </div>
            </div>
        )
    }
export default Crud;