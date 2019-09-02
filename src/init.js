import Controller from './controller/controller.jsx';
import ControllerCD from './blocs/crud/ControllerCd/controllerCD.js';
import ControllerIndev from './blocs/indev/controllerIndev/controllerIndev.js'
import ControllerPt from './blocs/paint/controller/controllerPt.js'

function init() {
    const controllerCD = new ControllerCD();
    const controllerIndev = new ControllerIndev();
    const controller = new Controller();

    const callbackPaint = (state)=>{
        if (state ==='paint'){
            new ControllerPt().init();
        }
    }

    controller.init(controllerCD.callBackBtnCrud.bind(controllerCD), controllerCD.model.States,
        controllerIndev,
        controllerIndev.reducerModel.bind(controllerIndev)
         ,
    callbackPaint

    );
    const rerender = () => {
        controller.init(controllerCD.callBackBtnCrud.bind(controllerCD),
            controllerCD.model.States,
            controllerIndev,
            controllerIndev.reducerModel.bind(controllerIndev))
            ,
            callbackPaint
    }
    controllerCD.model.subscribe(rerender);
    controllerIndev.model.subscribe(rerender);
};

window.onload = () => {
    init();
};