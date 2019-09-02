import React, {Component} from 'react';
import './styles.less';

const Indev = ({ callback }) => {
        return (
            <div className="main-module__registration main-modules-back">
                <img className="main-module__registration__img main-module-img" src="images/user@3x.png"></img>
                <div className="main-modules-back__text">
                    <p className="main-module__text" id="mainTextRegistration">REGISTRATION</p>
                </div>
                <div className="main-module__descriptipon">
                    <a className="descriptipon" id="mainDescriptionRegistration">Sign up in social network, to be in touch with people who create software.</a>
                </div>
                <div className="main-module__registration__button">
                    <button className="button-widget" id="btnRegistration" onClick={() => callback('indev')}> Start ></button>
                </div>
            </div>
                )
            };
export default Indev;