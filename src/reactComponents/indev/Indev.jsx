import React, {Component} from 'react';
import './components/style.less';

import StepOne from "./components/stepOne/StepOne.jsx";
import StepTwo from "./components/stepTwo/StepTwo.jsx";
import StepThree from "./components/stepThree/StepThree.jsx";
import StepFour from "./components/stepFour/StepFour.jsx";
import Rules from "./components/rules/Rules.jsx";

export default class Indev extends Component {

    constructor(props) {
        super(props)
        this.onClickIndevBtns = this.onClickIndevBtns.bind(this);
    }
    onClickIndevBtns(type) {
        this.props.controllerIndev.model.state.step = type;
        this.props.controllerIndev.hideTip();
        this.props.controllerIndev.model.rerenderEntireTree();
    };
    getBody() {
        let bodyIndev = this.props.controllerIndev.model.state.step;
        switch (bodyIndev) {
            case 'StepOne':
                console.log('getBody() - model.state.step =  '+ this.props.controllerIndev.model.state.step );
                return <StepOne
                    callback={this.onClickIndevBtns}
                    reducerModel = {this.props.reducerModel}
                    controllerIndev={this.props.controllerIndev}
                />;
            case 'StepTwo':
                return <StepTwo callback={this.onClickIndevBtns}
                                reducerModel = {this.props.reducerModel}
                                controllerIndev={this.props.controllerIndev}
                />;
            case 'StepThree':
                return <StepThree callback={this.onClickIndevBtns}
                                  reducerModel = {this.props.reducerModel}
                                  controllerIndev={this.props.controllerIndev}
                />;
            case 'StepFour':
                if(this.props.controllerIndev.model.disableRegistr===false) {
                    return <StepFour callback={this.onClickIndevBtns}
                                     reducerModel={this.props.reducerModel}
                                     controllerIndev={this.props.controllerIndev}
                                     mainPages={this.props.mainPages}
                    />;
                }
                return <StepThree callback={this.onClickIndevBtns}
                                  reducerModel = {this.props.reducerModel}
                                  controllerIndev={this.props.controllerIndev}
                />;

                break;
            case 'Rules':
                return <Rules callback={this.onClickIndevBtns}
                              reducerModel = {this.props.reducerModel}
                              controllerIndev={this.props.controllerIndev}
                />;
            default:
                console.log('not supported type ' + bodyIndev);
        }

    }

    render() {
        return (
            <div className="indev-module" id="indevModule">
                <div className="in-dev__tooltip" id="tooltip" title=""></div>
                <div className="indev-module__main" id="indev">
                    <div className="indev-module__main__title">
                        <p className="indev-module__main__title-text">CREATE AN ACCOUNT</p>
                    </div>
                    {/*<StepOne/>*/}
                    { this.getBody() }
                </div>
            </div>
        )
    }
}