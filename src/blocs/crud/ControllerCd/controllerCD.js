const ModelCD = require('../modelCd/modelCD');
const  LogicCD = require('../logicCd/logicCD');

class ControllerCD {

    constructor() {
        this.logic = new LogicCD();
        this.model = new ModelCD();
        this.restroreClear = 0;
    }
    
    callBackBtnCrud(obj) {
        switch(obj.type){
            case 'create': this.btnCreate(obj.inputValue); break;
            case 'read': this.btnRead(obj.inputValue); break;
            case 'update': this.btnUpdate(obj.inputValue); break;
            case 'delete': this.btnDelete(obj.inputValue); break;
            case 'clear':this.btnClear(obj.inputValue); break;
            case 'top': this.btnAddStart(obj.inputValue); break;
            case 'middle': this.btnAddMiddle(obj.inputValue); break;
            case 'end': this.btnAddEnd(obj.inputValue); break;
            case 'save': this.btnSave(); break;
            case 'restore': this.btnRestore(); break;
            case 'singUp': this.btnLog(obj.login, obj.password); break; //Done
        }
    }
    
    btnLog(login, password) {
        const State = this.getObjState();
        this.setObjState( this.logic.loginCrud(login, password, State) );
    };
    
    btnCreate(str) {
        const State = this.getObjState();
        this.setObjState( this.logic.create(str, State) );
    }
    
    btnAddEnd(str) {
        const State = this.getObjState();
        this.setObjState( this.logic.create(str, State) );
    }
    
    btnAddStart(str) {
        const State = this.getObjState();
        this.setObjState( this.logic.addStart(str, State) );
    }
    
    btnAddMiddle(str) {
        const State = this.getObjState();
        this.setObjState( this.logic.addMiddle(str, State) );
    }
    
    btnSave() {
        if(this.restroreClear === 1){
            this.logic.save(this.model.States.arrayPerson);
        } else if(this.restroreClear === 0){
            this.logic.saveDB(this.model.States.arrayPerson);
        } else {
            return;
        }
    }
    
    btnRestore() {
        
        if(this.restroreClear === 0){
            this.restroreClear = 1;   
        } else {
            return;
        }
        const State = this.getObjState();
        
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://18.188.19.161:3307/all', false);
        xhr.send();
        if (xhr.status != 200) {
            alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
        } else {
            const array = JSON.parse(xhr.response);
            for(let i = 0;  i < array.length; i++){
                State.arrayPerson.push(array[i]);
            }
            this.setObjState(State);
        }

    }
    
    btnRead(str) {
        const State = this.getObjState();
        this.setObjState( this.logic.read(str, State) );
    }
    
    btnDelete(str) {
        const State = this.getObjState();
        this.setObjState( this.logic.deleteStr(str, State) );
    }
    
    btnUpdate(str) {
        const State = this.getObjState();
        this.setObjState( this.logic.update(str, State) );
    }
    
    btnClear() {
        const State = this.getObjState();
        const obj = {
            arrayPerson: [],
            blockLoginState: 0,
            blockCrudState: 1,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        }
        this.setObjState( obj );
        this.restroreClear = 0;
    }
    
    getObjState() {
        return this.model.States;
    }
    
    setObjState(state) {
        this.model.States = state;
        this.model.rerenderEntireTree();
    }

}

module.exports = ControllerCD;