import React, {Component} from 'react';
import './styles.less';
import Buttons from './components/Buttons.jsx';

export default class Header extends Component {
    constructor(props) {
        console.log(props);
        super(props);

        this.onClick = this.onClick.bind(this);
    }
    onClick(type) {
        console.log('this write component Header', type, '  props - ', this.props);

    };


    render() {
        return (
            <div className='header'>
                <img className='header__logo' src="images/logo.png" onClick={() => this.onClick('img')}></img>
                <div className='header__buttons'>
                    <Buttons callback = {this.onClick} />
                </div>
            </div>
        )
    }
}