import React, {Component} from 'react';
import './styles.less';
import Menu from '../menu/Menu.jsx'
import Header from '../header/Header.jsx';
import Crud from '../crud/BlockCrud.jsx';
import Indev from '../indev/Indev.jsx';
import Paint from '../paint/Paint.jsx';
import Footer from '../footer/footer.jsx';
import ControllerPt from'../../blocs/paint/controller/controllerPt.js'


export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: 'menu',
        };
        this.onClickHeaderBtns = this.onClickHeaderBtns.bind(this);
    };
    onClickHeaderBtns(type) {
        this.setState(() => ({
            body: type
        }));
    };
    getBody() {
        const { body } = this.state;
        switch (body) {
            case 'menu': return <Menu callback={this.onClickHeaderBtns}/>; break;
            case 'paint':

                return <Paint />;
            break;
            case 'indev':return <Indev
                controllerIndev={this.props.controllerIndev}
                reducerModel={ this.props.reducerModel}
                mainPages={this.onClickHeaderBtns}
            />; break;
            case 'crud': return <Crud  btnCrud={ this.props.btnCrud } stadeCrud = { this.props.stateCrud }/>; break;
            default: console.log('not supported type ' + body); break;
        }
    };
    componentDidMount() {}

    componentDidUpdate() {
        if (this.state.body === 'paint') {
            this.props.paintInit('paint')
        }
    }
    render() {
        return (
            <div className='mdt-container'>
                <div className='mdt-container__header'>
                    <Header callback={this.onClickHeaderBtns} />
                </div>
                <div className='mdt-container__body'>
                    { this.getBody() }
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    };
}