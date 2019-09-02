import React, {Component} from 'react';
import '../style.less';

const Rules = ({ callback }) => {
    return(
        <div className="indev-module__main__steps four" >
            <p className="indev-module__main__steps-success">This is the rule of people who conquer the mountains, remember it - never eat yellow snow!</p>
            <div className="indev-module__main__steps__footer">
                <div className="footer-block__btn-prev">
                    <button className="indev-module__main__button-prev" id="backButtonFromStep3" onClick={() => callback('StepThree')}>Never!</button>
                </div>
            </div>
        </div>

    )
}
export default Rules;