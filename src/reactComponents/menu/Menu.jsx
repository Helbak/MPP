import React, {Component} from 'react';
import './styles.less';


const Menu = ({ callback }) => {
        return (
            <div className="main-module" id="mainModule">
                {/*<Paint callback = { this.onClickHeaderBtns } />*/}
                {/*<Indev callback = { this.onClickHeaderBtns } />*/}
                {/*<Crud callback = { this.onClickHeaderBtns } />*/}
                <div className="main-module__paint main-modules-back">
                    <img className="main-module__paint__img main-module-img" src="images/016-bucket@3x.png"></img>
                    <div className="main-modules-back__text">
                        <p className="main-module__text" id="mainTextPaint">PAINT</p>
                    </div>
                    <div className="main-module__descriptipon">
                        <a className="descriptipon" id="mainDescriptionPaint">Paint allows you to draw a picture
                            using tools: pick colors, lines, and clear.</a>
                    </div>
                    <div className="main-module__paint__button">
                        <button className="button-widget" id="btnPaint" onClick={() => callback('paint')}> Start ></button>
                    </div>
                </div>

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

            </div>
        )
    }
export default Menu;