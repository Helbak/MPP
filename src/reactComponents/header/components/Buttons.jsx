import React, { Component } from 'react';
import './styles.less';

const Buttons = ({ callback }) => {

    console.log('callback');

    return <div className="buttons">
        <div className="buttons__left buttons-left">
            <button className="buttons-left__menu" onClick={() => location.reload()}>Menu</button>
            <button className="buttons-left__forum" id="btnForum" onClick={() => callback('forum')}>Forum</button>
            <button className="buttons-left__contacts" id="btnContacts" onClick={() => callback('contacts')}>Contacts</button>
        </div>
        <div className="buttons__right buttons-right">
            <button className="buttons-right__sign-up" id="btnSignUp" onClick={e => callback(e)}>Sign Up</button>
            <button className="buttons-right__login" id="btnLogin" onClick={e => callback(e)}>Login</button>
            <select className="buttons-right__select" id="btnSelect" onClick={e => callback(e)}>
                {/*<option>Ua</option>*/}
                {/*<option>Ru</option>*/}
                <option>En</option>
            </select>
        </div>
    </div>
};

export default Buttons;