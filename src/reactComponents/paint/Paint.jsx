import React, {Component} from 'react';
import './style.less';


export default class Paint extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="paint-module" id="paintModule">
                <div className="paint-module__hide">
                    <div className="paint-module__palette" id="paintModulePalette">
                        <div className="paint-module__palette__buttons">
                            <div className="paint-module__palette__buttons__color #000000" id="rgb(0,0,0)"></div>
                            <div className="paint-module__palette__buttons__color #7F7F7F" id="rgb(127,127,127)"></div>
                            <div className="paint-module__palette__buttons__color #880016" id="rgb(136,0,22)"></div>
                            <div className="paint-module__palette__buttons__color #ED1C22" id="rgb(237,28,34)"></div>
                            <div className="paint-module__palette__buttons__color #FF7F26" id="rgb(255,127,38)"></div>
                            <div className="paint-module__palette__buttons__color #FEF200" id="rgb(254,242,0)"></div>
                            <div className="paint-module__palette__buttons__color #23B14D" id="rgb(35,177,77)"></div>
                            <div className="paint-module__palette__buttons__color #00A3E8" id="rgb(0,163,232)"></div>
                            <div className="paint-module__palette__buttons__color #3F47CC" id="rgb(63,71,204)"></div>
                            <div className="paint-module__palette__buttons__color #A349A3" id="rgb(163,73,163)"></div>
                            <div className="paint-module__palette__buttons__color #FFFFFF" id="rgb(255,255,255)"></div>
                            <div className="paint-module__palette__buttons__color #C3C3C3" id="rgb(195,195,195)"></div>
                            <div className="paint-module__palette__buttons__color #B97A57" id="rgb(185,122,87)"></div>
                            <div className="paint-module__palette__buttons__color #FEAEC9" id="rgb(254,174,201)"></div>
                            <div className="paint-module__palette__buttons__color #FFC90D" id="rgb(255,201,13)"></div>
                            <div className="paint-module__palette__buttons__color #EFE3AF" id="rgb(239,227,175)"></div>
                            <div className="paint-module__palette__buttons__color #B5E51D" id="rgb(181,229,29)"></div>
                            <div className="paint-module__palette__buttons__color #9AD9EA" id="rgb(154,217,234)"></div>
                            <div className="paint-module__palette__buttons__color #7092BF" id="rgb(112,146,191)"></div>
                            <div className="paint-module__palette__buttons__color #C7BFE6" id="rgb(199,191,230)"></div>
                        </div>
                    </div>
                </div>
                <div className="paint-module__buttons-tools">
                    <img className="paint-module__buttons-tools__button btn-palette" src='images/paintImages/normal/painter-palette copy.png' id="paletteOpen">
                    </img>
                    <img className="paint-module__buttons-tools__button btn-horizontal" src='images/paintImages/normal/vector-path-line-256x256 copy 2.png' id="horizontLine"></img>
                    <img className="paint-module__buttons-tools__button btn-vertical" src='images/paintImages/normal/vector-path-line-256x256 copy.png' id="verticalLine"></img>
                    <img className="paint-module__buttons-tools__button btn-line" src='images/paintImages/normal/vector-path-line-256x256 copy 3.png' id="justLine"></img>
                    <img className="paint-module__buttons-tools__button btn-square" src='images/paintImages/normal/vector-path-square-256x256 copy.png' id="square"></img>
                    <img className="paint-module__buttons-tools__button btn-flow" src='images/paintImages/normal/drop copy.png' id="flow"></img>
                    <img className="paint-module__buttons-tools__button btn-delete" src='images/paintImages/normal/eraser (1) copy.png' id="delete"></img>
                </div>
                <canvas width="825" height="504" className="paint-module__area" id="paintArea"></canvas>
            </div>
        )
    }
}