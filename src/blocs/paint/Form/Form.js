class Form {
    constructor() {
        this.action = null;
        this.downX = null;
        this.downY = null;
        this.outX = null;
        this.outY = null;
        this.color = null;
        this.recreate = true;
    };
    setAction (action) {
        this.action = action;
    };
    setdownX (downX) {
        this.downX = downX;
    };
    setdownY (downY) {
        this.downY = downY;
    };
    setoutX (outX) {
        this.outX = outX;
    };
    setoutY (outY) {
        this.outY = outY;
    };
    setColor (color) {
        this.color = color;
    };
}

module.exports = Form;