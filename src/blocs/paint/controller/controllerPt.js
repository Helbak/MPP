const Form = require('../Form/Form');
const ModelPt = require('../modelPt/modelPt');

class ControllerPt {
    constructor() {
        this.modelPt = new ModelPt();
        this.form = new Form();
        // this.paletteOpen = document.getElementById('paletteOpen');
    }
    init() {
        // const paletteOpen = document.getElementById('paletteOpen');
        this.c1 = document.getElementById('rgb(0,0,0)');
        this.c2 = document.getElementById('rgb(127,127,127)');
        this.c3 = document.getElementById('rgb(136,0,22)');
        this.c4 = document.getElementById('rgb(237,28,34)');
        this.c5 = document.getElementById('rgb(255,127,38)');
        this.c6 = document.getElementById('rgb(254,242,0)');
        this.c7 = document.getElementById('rgb(35,177,77)');
        this.c8 = document.getElementById('rgb(0,163,232)');
        this.c9 = document.getElementById('rgb(63,71,204)');
        this.c10 = document.getElementById('rgb(163,73,163)');
        this.c11 = document.getElementById('rgb(255,255,255)');
        this.c12 = document.getElementById('rgb(195,195,195)');
        this.c13 = document.getElementById('rgb(185,122,87)');
        this.c14 = document.getElementById('rgb(254,174,201)');
        this.c15 = document.getElementById('rgb(255,201,13)');
        this.c16 = document.getElementById('rgb(239,227,175)');
        this.c17 = document.getElementById('rgb(181,229,29)');
        this.c18 = document.getElementById('rgb(154,217,234)');
        this.c19 = document.getElementById('rgb(112,146,191)');
        this.c20 = document.getElementById('rgb(199,191,230)');
        // this.arrayAllColor = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20];
        this.paintModulePalette= document.getElementById('paintModulePalette');
        this.horizontLine = document.getElementById('horizontLine');
        this.verticalLine = document.getElementById('verticalLine');
        this.justLine = document.getElementById('justLine');
        this.square = document.getElementById('square');
        this.flow = document.getElementById('flow');
        this.del = document.getElementById('delete');
        this.paletteOpen = document.getElementById('paletteOpen');

        this.c1.addEventListener('click', function () {
            this.modelPt.setColor('rgb(0,0,0)');

        }.bind(this), false);
        this.c2.addEventListener('click', function () {
            this.modelPt.setColor('rgb(127,127,127)');

        }.bind(this), false);
        this.c3.addEventListener('click', function () {
            this.modelPt.setColor('rgb(136,0,22)');

        }.bind(this), false);
        this.c4.addEventListener('click', function () {
            this.modelPt.setColor('rgb(237,28,34)');

        }.bind(this), false);
        this.c5.addEventListener('click', function () {
            this.modelPt.setColor('rgb(255,127,38)');

        }.bind(this), false);
        this.c6.addEventListener('click', function () {
            this.modelPt.setColor('rgb(254,242,0)');

        }.bind(this), false);
        this.c7.addEventListener('click', function () {
            this.modelPt.setColor('rgb(35,177,77)');

        }.bind(this), false);
        this.c8.addEventListener('click', function () {
            this.modelPt.setColor('rgb(0,163,232)');

        }.bind(this), false);
        this.c9.addEventListener('click', function () {
            this.modelPt.setColor('rgb(63,71,204)');

        }.bind(this), false);
        this.c10.addEventListener('click', function () {
            this.modelPt.setColor('rgb(163,73,163)');

        }.bind(this), false);
        this.c11.addEventListener('click', function () {
            this.modelPt.setColor('rgb(255,255,255)');

        }.bind(this), false);
        this.c12.addEventListener('click', function () {
            this.modelPt.setColor('rgb(195,195,195)');

        }.bind(this), false);
        this.c13.addEventListener('click', function () {
            this.modelPt.setColor('rgb(185,122,87)');

        }.bind(this), false);
        this.c14.addEventListener('click', function () {
            this.modelPt.setColor('rgb(254,174,201)');

        }.bind(this), false);
        this.c15.addEventListener('click', function () {
            this.modelPt.setColor('rgb(255,201,13)');

        }.bind(this), false);
        this.c16.addEventListener('click', function () {
            this.modelPt.setColor('rgb(239,227,175)');

        }.bind(this), false);
        this.c17.addEventListener('click', function () {
            this.modelPt.setColor('rgb(181,229,29)');

        }.bind(this), false);
        this.c18.addEventListener('click', function () {
            this.modelPt.setColor('rgb(154,217,234)');

        }.bind(this), false);
        this.c19.addEventListener('click', function () {
            this.modelPt.setColor('rgb(112,146,191)');

        }.bind(this), false);
        this.c20.addEventListener('click', function () {
            this.modelPt.setColor('rgb(199,191,230)');

        }.bind(this), false);

        this.horizontLine.addEventListener('click', function () {
            console.log('сработал horizontLine.addEventListener')
            this.modelPt.setAction('horizontLine');
        }.bind(this), false);
        this.verticalLine.addEventListener('click', function () {
            this.modelPt.setAction('verticalLine');
        }.bind(this), false);
        this.justLine.addEventListener('click', function () {
            this.modelPt.setAction('justLine');
        }.bind(this), false);
        this.square.addEventListener('click', function () {
            this.modelPt.setAction('square');
        }.bind(this), false);
        this.flow.addEventListener('click', function () {
            this.modelPt.setAction('flow');
        }.bind(this), false);
        this.del.addEventListener('click', function () {
            this.clearCanvas('delete');
        }.bind(this), false);
        this.paletteOpen.addEventListener('click', () => {
            console.log('сработал paletteOpen.addEventListener', this);
            this.openClosePalette();
        }, false);

        const canvas = document.getElementById('paintArea');
        this.ctx = canvas.getContext('2d');
        canvas.onmousedown = function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            this.takeAction(x, y);
        }.bind(this);
        canvas.onmouseup = function (event) {
            // console.log('position' + this.model.downX + '  Y' + this.model.downY);
            let x = event.offsetX;
            let y = event.offsetY;
            this.takeAction(x, y);
            this.reDrawFromArray();
        }.bind(this);
        canvas.onmousemove = function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            if (this.modelPt.action === 'square' && this.modelPt.downX !== null && this.modelPt.downY !== null) {
                this.drawWhiteSquare(this.modelPt.dynamicX, this.modelPt.dynamicY);
                this.reDrawFromArray();
                this.drawDynamicSquare(x, y);
                this.modelPt.dynamicX = x;
                this.modelPt.dynamicY = y;

            }
        }.bind(this);
    };

    //  hideBlock (block){
    //     block.style.display = 'none'
    //  };
    //
    // showBlock (block){
    //      block.style.display = 'flex';
    //  };
    openClosePalette(){
        const paintModulePalette = document.getElementById('paintModulePalette');
        paintModulePalette.style.visibility = paintModulePalette.style.visibility === 'hidden' ? "visible" : "hidden";
    };

    takeAction (x, y) {
        let action = this.modelPt.getAction();
        let color = this.modelPt.getColor();
        switch (action) {
            case 'flow':
                this.searcherForm(x, y);

                return;
            case 'horizontLine':
                this.drawHorizontLine(y, color);
                const newForm = this.createForm('horizontLine', null, y, null, null, color);
                this.modelPt.addFormToArray(newForm);
                this.modelPt.clearAllXY();
                return y;
            case 'verticalLine':
                this.drawVerticalLine(x, color);
                const newForm2 = this.createForm('verticalLine', x, null, null, null, color);
                this.modelPt.addFormToArray(newForm2);
                this.modelPt.clearAllXY();
                return x;
            case 'justLine':
                if (this.modelPt.getDownX() === null) {
                    this.modelPt.setDownX(x);
                    this.modelPt.setDownY(y);
                    console.log("функция action получила координаты getDown"+x+' '+y)
                    return;
                }
                if (this.modelPt.getDownX() !== null) {
                    this.modelPt.setOutX(x);
                    this.modelPt.setOutY(y);
                    console.log("функция action получила координаты setOut"+this.modelPt.getDownX()+' '+this.modelPt.getDownY())
                    this.drawJustLine(this.modelPt.getDownX(), this.modelPt.getDownY(), this.modelPt.getOutX(), this.modelPt.getOutY(), this.modelPt.getColor());
                    const newForm = this.createForm('justLine', this.modelPt.getDownX(), this.modelPt.getDownY(), this.modelPt.getOutX(), this.modelPt.getOutY(), this.modelPt.getColor());
                    this.modelPt.addFormToArray(newForm);
                    this.modelPt.clearAllXY();
                    return;
                }
                return;
            case 'square':
                if (this.modelPt.getDownX() === null) {
                    this.modelPt.setDownX(x);
                    this.modelPt.setDownY(y);
                    return;
                }
                if (this.modelPt.getDownX() !== null) {
                    this.modelPt.setOutX(x);
                    this.modelPt.setOutY(y);
                    this.drawSquare(this.modelPt.getDownX(), this.modelPt.getDownY(), this.modelPt.getOutX(), this.modelPt.getOutY(), this.modelPt.getColor());
                    const newForm = this.createForm('square', this.modelPt.getDownX(), this.modelPt.getDownY(), this.modelPt.getOutX(), this.modelPt.getOutY(), this.modelPt.getColor());
                    this.modelPt.addFormToArray(newForm);
                    this.modelPt.clearAllXY();
                    return;
                }
                return;

        }
        ;
    };

    reDrawFromArray () {
        const formArray = this.modelPt.getFormArray();
        for (let i = 0; i < formArray.length; i++) {
            let form = formArray[i];
            let action = form.action;
            let color = form.color;
            let downX = form.downX;
            let downY = form.downY;
            let outX = form.outX;
            let outY = form.outY;
            switch (action) {
                case 'flow':
                    this.searcherForm(downX, downY);
                    break;
                case 'horizontLine':
                    this.drawHorizontLine(downY, color);
                    // this.modelPt.clearAllXY();
                    break;
                case 'verticalLine':
                    this.drawVerticalLine(downX, color);
                    // this.modelPt.clearAllXY();
                    break;
                case 'justLine':
                    this.drawJustLine(downX, downY, outX, outY, color);
                    // this.modelPt.clearAllXY();
                    break;
                case 'square':
                    this.drawSquare(downX, downY, outX, outY, color);
                    // this.modelPt.clearAllXY();
                    break;
                case 'fullSquare':

                    this.drawSquareFullColor(form, false);
                    // this.modelPt.clearAllXY();
                    break;
            }

        }
        ;
        return;
    };
    drawHorizontLine (y, color) {

        this.ctx.beginPath();
        console.log(" color is" + color);
        this.ctx.lineWidth = this.modelPt.widthBrush;
        this.ctx.strokeStyle = color;
        // this.ctx.fillStyle = color;
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(825, y);
        this.ctx.stroke();
        this.ctx.closePath();
    };
    drawVerticalLine (x, color) {
        this.ctx.beginPath();
        this.ctx.lineWidth = this.modelPt.widthBrush;
        this.ctx.strokeStyle = color;
        // this.ctx.fillStyle = color;
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, 504);
        this.ctx.stroke();
        this.ctx.closePath();
    };
    clearCanvas () {
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, 825, 504);
        // this.model.clearAll();
        this.ctx.closePath();
        this.modelPt.formArray = [];
    };
    drawJustLine (downX, downY, outX, outY, color) {
        this.ctx.beginPath();
        this.ctx.beginPath();
        this.ctx.lineWidth = this.modelPt.widthBrush;
        this.ctx.strokeStyle = color;
        // this.ctx.fillStyle = color;
        this.ctx.moveTo(downX, downY);
        this.ctx.lineTo(outX, outY);
        this.ctx.stroke();
        this.ctx.closePath();
    };
    drawSquare (downX, downY, outX, outY, color) {
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = color;
        this.modelPt.dynamicX = null;
        this.modelPt.dynamicY = null;
        // console.log('added new form with position : point1 - ' + downX + ", " + downY + ", " + outX + ", " + outY + ", " + color);
        // здесь инструкции по созданию фигур
        this.ctx.moveTo(downX, downY);
        this.ctx.lineTo(outX, downY);

        this.ctx.moveTo(outX, downY);
        this.ctx.lineTo(outX, outY);

        this.ctx.moveTo(outX, outY);
        this.ctx.lineTo(downX, outY);

        this.ctx.moveTo(downX, downY);
        this.ctx.lineTo(downX, outY);
        this.ctx.stroke();
        this.ctx.closePath();

    };
    drawDynamicSquare (outX, outY) {
        let color = null;
        const downX = this.modelPt.downX;
        const downY = this.modelPt.downY;
        if (this.modelPt.color === null) {
            color = 'black'
        }
        ;
        if (this.modelPt.color !== null) {
            color = this.modelPt.color
        }
        ;
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = color;
        // const newForm = this.createForm(downX, downY, outX, outY, color);
        // this.model.addFormToArray(newForm);
        // console.log('added new form with position : point1 - ' + downX + ", " + downY + ", " + outX + ", " + outY + ", " + color);
        // здесь инструкции по созданию фигур
        this.ctx.moveTo(downX, downY);
        this.ctx.lineTo(outX, downY);

        this.ctx.moveTo(outX, downY);
        this.ctx.lineTo(outX, outY);

        this.ctx.moveTo(outX, outY);
        this.ctx.lineTo(downX, outY);

        this.ctx.moveTo(downX, downY);
        this.ctx.lineTo(downX, outY);
        this.ctx.stroke();
        this.ctx.closePath();
    };
    drawWhiteSquare (outX, outY) {
        if (this.modelPt.dynamicX !== null && this.modelPt.dynamicY !== null) {
            const downX = this.modelPt.downX;
            const downY = this.modelPt.downY;
            const color = 'white';
            this.ctx.beginPath();
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = color;
            // const newForm = this.createForm(downX, downY, outX, outY, color);
            // this.model.addFormToArray(newForm);
            // console.log('added new form with position : point1 - ' + downX + ", " + downY + ", " + outX + ", " + outY + ", " + color);
            // здесь инструкции по созданию фигур
            this.ctx.moveTo(downX, downY);
            this.ctx.lineTo(outX, downY);

            this.ctx.moveTo(outX, downY);
            this.ctx.lineTo(outX, outY);

            this.ctx.moveTo(outX, outY);
            this.ctx.lineTo(downX, outY);

            this.ctx.moveTo(downX, downY);
            this.ctx.lineTo(downX, outY);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    };
    drawSquareFullColor (form, changeColor) {
        let newColor = null;
        if (changeColor === true) {
            newColor = this.modelPt.getColor();
        }
        ;
        if (changeColor === false) {
            newColor = form.color;
        }
        ;
        let width = null;
        let height = null;
        if (form.downX > form.outX) {
            width = form.downX - form.outX;
        }
        if (form.downX < form.outX) {
            width = form.outX - form.downX;
        }
        if (form.downY > form.outY) {
            height = form.downY - form.outY;
        }
        if (form.downY < form.outY) {
            height = form.outY - form.downY;
        }
        this.ctx.beginPath();
        this.ctx.rect(form.downX - 2, form.downY - 2, width + 4, height + 4);
        this.ctx.fillStyle = newColor;
        this.ctx.fill();
        this.ctx.closePath();
        if (changeColor === true) {
            form.action = 'fullSquare';
            form.color = newColor;
            // this.model.addFormToArray(form);
        }
    };
    drawSquareFullColorFromLowToHigh (form, changeColor) {
        let newColor = null;
        if (changeColor === true) {
            newColor = this.modelPt.getColor();
        }

        if (changeColor === false) {
            newColor = form.color;
        }

        let width = null;
        let height = null;
        if (form.downX > form.outX) {
            width = form.downX - form.outX;
        }
        if (form.downX < form.outX) {
            width = form.outX - form.downX;
        }
        if (form.downY > form.outY) {
            height = form.downY - form.outY;
        }
        if (form.downY < form.outY) {
            height = form.outY - form.downY;
        }
        this.ctx.beginPath();
        this.ctx.rect(form.outX - 2, form.outY - 2, width + 4, height + 4);
        this.ctx.fillStyle = newColor;
        this.ctx.fill();
        this.ctx.closePath();
        if (changeColor === true) {
            form.color = newColor;
            // this.model.addFormToArray(form);
        }
    };
    createForm (action, downX, downY, outX, outY, colory) {
        let color = null;
        this.form = new Form();
        this.form.setAction(action);
        this.form.setdownX(downX);
        this.form.setdownY(downY);
        this.form.setoutX(outX);
        this.form.setoutY(outY);
        if (colory === null) {
            color = "black";
        }

        if (colory !== null) {
            color = colory;
        }

        this.form.setColor(color);
        return this.form;
    };
    searcherForm(x, y) {
        const arrayForm = this.modelPt.getFormArray();

        for (let i = arrayForm.length - 1; i >= 0; i--) {
            let form = arrayForm[i];
            if(form.action==='justLine'){
                console.log('form.action =  '+form.action)
                break;
            }
            console.log('searcherForm  i =   '+ i);
            if (form.downX < x && form.outX > x && form.downY < y && form.outY > y) {
                this.drawSquareFullColor(form, true);
                this.modelPt.clearAllXY();
                return;
            }
            if (form.downX > x && form.outX < x && form.downY > y && form.outY < y) {
                // this.drawSquareFullColor(form, true);
                this.drawSquareFullColorFromLowToHigh(form, true);
                this.modelPt.clearAllXY();
                return;
            }
            this.modelPt.clearAllXY();
        }
        ;
    };
// ControllerPt.prototype.openPalette = function () {
//     const colors = document.getElementById('colors')
//     // colors.style.visibility = 'visible';
// };
// ControllerPt.prototype.closePalette = function () {
//     const colors = document.getElementById('colors')
//     // colors.style.visibility = 'hidden';
// };
// ControllerPt.prototype.pointColor = function (point) {
//     point.style.border = '2px solid rgb(0,0,0)';
// };
// ControllerPt.prototype.unPointColor = function () {
//     for (let i = 0; i < this.arrayAllColor.length; i++) {
//         this.arrayAllColor[i].style.border = '';
//     }
// };
};

module.exports = ControllerPt;