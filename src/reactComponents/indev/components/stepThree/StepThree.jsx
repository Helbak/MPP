import React, {Component} from 'react';
import '../style.less';

const StepThree = (props) => {
    const refProgrLangRight = React.createRef();
    const refProgrLangLeft = React.createRef();
    const refExperience = React.createRef();

    const writeText = (action) => {
        const obj = {
            text: getText(action),
            action: action
        };
        props.reducerModel(obj);
    }

    const getText=(action)=>{
        switch (action) {
            case 'ProgrLangRight': return refProgrLangRight.current.value;
            case 'Experience': return refExperience.current.value;
            case 'checkbox': return 'checkbox';
            case 'RegisterButton': return 'RegisterButton';
        }
    };

    return (
        <div className="indev-module__main__steps third">
            <div className="indev-module__main__steps-container">
                <div className="third-multilist">
                    <input type="text" className="third-multilist__input1" readOnly="true" type="text"
                           value = {props.controllerIndev.model.stringLanguages} id="progrLangLeft" ref = { refProgrLangLeft } onChange={() => writeText('ProgrLangLeft')}  placeholder="Programming languages"></input>
                    <select type="text" className="indev-module__main__steps-container-select1 multiright"
                            id="progrLangRight" ref = { refProgrLangRight } onChange={() => writeText('ProgrLangRight')}  >
                        <option selected disabled value=""></option>
                        <option value="No one">No one</option>
                        <option value="C">C</option>
                        <option value="C++">C++</option>
                        <option value="C#">C#</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Matlab">Matlab</option>
                        <option value="PHP">PHP</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Python">Python</option>
                        <option value="R">R</option>
                        No one
                    </select>

                    <select className="indev-module__main__steps-container-select input" type="text"
                            defaultValue={props.controllerIndev.model.experience} id="experience" ref = { refExperience } onChange={() => writeText('Experience')}>
                        <option selected disabled value="">Work experience</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="2-3 years">2-3 years</option>
                        <option value="3-4 years">3-4 years</option>
                        <option value="4 and more years">4 and more years</option>
                    </select>

                    <div className="third-multilist__checkbox">
                        <input type="checkbox" id="checkboxRules" onClick={() => writeText('checkbox')} defaultChecked={props.controllerIndev.model.rulesBox} ></input>
                        <label htmlFor="checkbox">Accept the <a href="#"
                                                                id="btnRules" onClick={() => props.callback('Rules')}>registration</a> rules</label>
                    </div>
                </div>

            </div>
            <div className="indev-module__main__steps__footer">
                <div className="footer-block__btn-prev">
                    <button className="indev-module__main__button-prev" id="backButtonFromStep3" onClick={() => props.callback('StepTwo')}>Back</button>
                </div>
                <div className="footer-block__text">
                    <p className="indev-module__main-steps__inputs__step">3/3</p>
                </div>
                <div className="footer-block__btn-next">
                    <button className="indev-module__main__button-next" id="registerButton" onClick={() => props.callback('StepFour')} >Registration</button>
                </div>
            </div>
        </div>
    )
}
export default StepThree;