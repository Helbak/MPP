import React, {Component} from 'react';
import '../style.less';

const StepFour = (props) => {
    const writeText = (action) => {
        const obj = {
            text: 'sendPersonToDB',
            action: 'sendPersonToDB'
        };
        props.reducerModel(obj);
        props.mainPages('menu')
    };
    return(
        <div className="indev-module__main__steps four" >
            <p className="indev-module__main__steps-success">Your information successfylly added on the database! Good
                luck!</p>
            <div className="indev-module__main__steps__footer">
                <div className="footer-block__btn-prev">
                    <button className="indev-module__main__button-prev" id="backButtonFromStep3"  onClick={() => writeText('sendPersonToDB')} >Done</button>
                </div>
            </div>
        </div>

    )
}
export default StepFour;