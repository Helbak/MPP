//import * as initReact from '../reactComponents/initReact.jsx';
//import ControllerCD from '../blocs/crud/ControllerCd/controllerCD.js';
import ControllerIndev from '../blocs/indev/controllerIndev/controllerIndev.js';
// import ControllerPt from '../blocs/paint/controller/controllerPt.js';
import MainContainer from '../reactComponents/mainContainer/MainContainer.jsx';
import React from 'react';
import ReactDOM from 'react-dom';


export default class Controller {

    constructor() {
    };

    init(btn, state, controllerIndev, reducerModel, paintInit) {
        const root = document.getElementById('root');
        ReactDOM.render( <MainContainer
            btnCrud={ btn }
            stateCrud={ state }
            controllerIndev={ controllerIndev }
            reducerModel={ reducerModel }
            paintInit = { paintInit }
        />, root );
    }

}
