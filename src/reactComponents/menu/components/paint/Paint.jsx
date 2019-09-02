import React, {Component} from 'react';
import './styles.less';

// export default class Paint extends Component{
    const Paint = ({ callback }) => {

        return (
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
        )
    }
export default Paint;