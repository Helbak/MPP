class ModelPt {
    constructor() {
        this.widthBrush = 2;
        this.color = 'black';
        this.action = null;
        this.downX = null;
        this.outX = null;
        this.downY = null;
        this.outY = null;
        this.formArray = [];
        this.dynamicX = null;
        this.dynamicY = null;
        this.onReDrawer = 0;
        this.stringPaintHTML = "  ";
    };

    addOnReDrawer () {
        this.onReDrawer++;
    };
    getOnReDrawer  () {
        return this.onReDrawer;
    }
    setWidthBrush  (widthBrush) {
        this.widthBrush = widthBrush;
    };
    setColor (color) {
        this.color = color;
    };
    getColor () {
        return this.color;
    };
    setAction (action) {
        this.action = action;
    };
    getAction  () {
        console.log('пришел запрос в ModelPt.getAction ')
        return this.action;
    };
    // clearAll  () {
    //     this.color = null;
    //     this.action = null;
    //     this.widthBrush = 2;
    //
    // };

    setDownX  (downX) {
        this.downX = downX;
    };
    getDownX  () {
        return this.downX;
    };
    setOutX (outX) {
        this.outX = outX;
    };
    getOutX () {
        return this.outX;
    };
    setDownY (downY) {
        this.downY = downY;
    };
    getDownY () {
        return this.downY;
    };
    setOutY(outY) {
        this.outY = outY;
    };
    getOutY () {
        return this.outY;
    };
    clearAllXY () {
        this.downX = null;
        this.downY = null;
        this.outX = null;
        this.outY = null;
        // this.color = null;
        // this.action = null;
    };
    addFormToArray (form) {
        this.formArray[this.formArray.length] = form;
    };
    getFormArray () {
        return this.formArray;
    };
}

module.exports = ModelPt;