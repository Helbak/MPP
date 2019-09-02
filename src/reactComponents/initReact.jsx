import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './mainContainer/MainContainer.jsx';


export const init = (callBack, btnCrud, State) => {
        const root = document.getElementById('root');
        ReactDOM.render( <MainContainer cb={ callBack } btnCrud={ btnCrud } stateCrud={ tState }/>, root );
};