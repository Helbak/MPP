import React, {Component} from 'react';
import '../style.less';

const StepTwo = ( props) => {

    const refName = React.createRef();
    const refSurname = React.createRef();
    const refGender = React.createRef();
    const refRelation = React.createRef();


    const writeText = (action) => {
        const obj = {
            text: getText(action),
            action: action
        };
        props.reducerModel(obj);
    }

    const getText=(action)=>{
        switch (action) {
            case 'Name': return refName.current.value
            case 'Surname': return refSurname.current.value
            case 'Gender': return refGender.current.value
            case 'Relation': return refRelation.current.value
        }
    };

    return (
        <div className="indev-module__main__steps second">
            <div className="indev-module__main__steps-container">
                <input className="indev-module__main-steps__inputs" type="text" id="name"
                       defaultValue={props.controllerIndev.model.name} ref = { refName } onKeyUp={() => writeText('Name')} placeholder="Name"></input>
                <input className="indev-module__main-steps__inputs" type="text" id="surname"
                       defaultValue={props.controllerIndev.model.surname} ref = { refSurname } onKeyUp={() => writeText('Surname')} placeholder="Surname"></input>
                <div className="indev-module__main__steps-container">
                    <select className="indev-module__main__steps-container-select" type="text" id="gender"
                            defaultValue={props.controllerIndev.model.gender} ref = { refGender } onChange={() => writeText('Gender')}>
                        <option value="" selected disabled>Gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </div>
                <div className="indev-module__main__steps-container">
                    <select className="indev-module__main__steps-container-select" type="text" id="relation"
                            defaultValue={props.controllerIndev.model.relation} ref = { refRelation } onChange={() => writeText('Relation')}>
                        <option value="" selected disabled>Relationship status</option>
                        <option value="divorced">divorced</option>
                        <option value="married">married</option>
                        <option value="single">single</option>
                    </select>
                </div>
            </div>
            <div className="indev-module__main__steps__footer">
                <div className="footer-block__btn-prev">
                    <button className="indev-module__main__button-prev" id="backButtonFrom2" onClick={() => props.callback('StepOne')}>Back</button>
                </div>
                <div className="footer-block__text">
                    <p className="indev-module__main-steps__inputs__step">2/3</p>
                </div>
                <div className="footer-block__btn-next">
                    <button className="indev-module__main__button-next" id="nextButtonFrom2" onClick={() => props.callback('StepThree')}>Next step</button>
                </div>
            </div>
        </div>
    )
}
export default StepTwo;