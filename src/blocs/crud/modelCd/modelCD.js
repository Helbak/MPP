class ModelCD {
    
    constructor() {
        this.States = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        }
        
        this._state = { 
            MAIN_PAGE: {},
            PAINT_PAGE: {},
            REGISTRATION_PAGE: {},
            CRUD_PAGE: {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '',
            },
        }
        
    }
    
    getState() {
        return this._state;
    }
    
    rerenderEntireTree() {
        console.log('state changed');
    }
    
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }
    
    reducers(state, action) {
        switch(action.type) {
            case MAIN_PAGE: return state;
            case PAINT_PAGE: return state;
            case REGISTRATION_PAGE: return state;
            case CRUD_PAGE: 
                if(state === this.getState().CRUD_PAGE){
                    return this.getState;
                } else { return state; }
        }
    }

};

module.exports = ModelCD;

