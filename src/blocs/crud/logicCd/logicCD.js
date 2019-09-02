class LogicCD {
    
    constructor() {
        this.tbody = document.getElementById('tbody');
        this.td = document.getElementsByTagName('td');
        this.tr = document.getElementsByTagName('tr');
        this.contentpage = document.getElementById('crudModule');
        this.loginpage = document.getElementById('loginModule');
        this.massageError = document.getElementById('massageError');
        this.loginUsernameError = document.getElementById('loginUsernameError');
        this.loginPasswordError = document.getElementById('loginPasswordError');
        this.arrayPerson = [];
    }

    newIdArray(array) {
        if(typeof(array) === 'number' || typeof(array) === 'string' || array === undefined || Array.isArray(array) === false){
           return false;
        }
        let newArray = [];
        for(let i = 0; i < array.length; i++){
            array[i].Id = i + 1;
            newArray.push(array[i]);
        }
        return newArray;
    };

    checkUsernameLength(username) {

        if  (typeof username === 'number' || typeof username === 'object' || typeof username === 'array' || username == undefined || username.length < 1 || username.length > 40) {
            return false;
        } else {
            return true;
        }

    };

    checkUsernameValidation(username) {

        if(typeof username === 'number' || typeof username === 'object' || typeof username === 'array' || username == undefined){
            return false;
        }
        if (/^[1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM/*+%&;$@]+$/.test(username)) {
            return true
        } else {
            return false;
        }

    };

    checkPasswordOnlyLength(password) {

        if  (typeof password === 'number' || typeof password === 'object' || typeof password === 'array' || password == undefined || password.length <= 5 || password.length >= 31) {return false;}

        if (password.length >= 6 || password.length <= 30) {
            return true;
        }

    };

    checkPasswordValidation(password) {

        if(typeof password === 'number' || typeof password === 'object' || typeof password === 'array' || password == undefined){
            return false;
        }
        if (/(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])^[^а-яА-Я]+$/.test(password)) {
            return true;
        } else {
            return false;
        }

    };

    checkEmailValidation(email) {
        if(typeof email === 'number' || typeof email === 'object' || typeof email === 'array' || email == undefined){
            return false;
        }
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return true;
        } else {
            return false;
        }
    };

    checkPhoneNumberValidation (phoneNumber) {

        if(typeof phoneNumber === 'number' || typeof phoneNumber === 'object' || typeof phoneNumber === 'array' || phoneNumber == undefined || phoneNumber.length <= 11 || phoneNumber.length > 13){
            return false;
        }

        if (/^\(?([+1]{2})\)?[-.() ]?[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})$/.test(phoneNumber)) {
            return true;
        } else if (/^\(?([+]{1}[-.() ]?[3]{1}[-.() ]?[8]{1}[-.() ]?[-.() ]?[0]{1})\)?[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})$/.test(phoneNumber)) {
            return true;
        } else if (/^\(?([+]{1}[-.() ]?[9]{1}[-.() ]?[7]{1}[-.() ]?[-.() ]?[2]{1})\)?[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})$/.test(phoneNumber)) {
            return true;
        } else {
            return false;
        }
    };

    checkNameValidation(name) {

        if(typeof name === 'number' || typeof name === 'object' || typeof name === 'array' || name == undefined || name.length < 2 || name.length > 40){
            return false;
        }

        if (/^[A-Z]{1}[a-zA-Z]+$/.test(name)) {
            return true;
        } else {
            return false;
        }

    };

    checkListGender(datalist) {

        if(typeof datalist === 'number' || typeof datalist === 'object' || typeof datalist === 'array' || datalist == undefined){
            return false;
        }
        if (datalist === 'male' || datalist === 'female' || datalist === '') {
            return true;
        } else if (datalist !== 'male' || datalist !== 'female' || datalist !== ''){
            return false;
        }

    };

    checkListRelation(relation) {

        if(typeof relation === 'number' || typeof relation === 'object' || typeof relation === 'array' || relation == undefined){
            return false;
        }
        if (relation === 'single' || relation === 'married' || relation === 'divorced' ||  relation === '') {
            return true;
        } else if (relation !== 'single' || relation !== 'married' || relation !== 'divorced' ||  relation !== ''){
            return false;
        }
    };

    checkListLanguages(language) {

        if(typeof language === 'number' || typeof language === 'object' || typeof language === 'array' || language == undefined){
            return false;
        }

        let arrayLanguageClient = language.split(', ');
        let num = 0;
        const languages = ['C', 'C++', 'C#', 'Java', 'JavaScript', 'Matlab', 'PHP', 'Ruby', 'Python', 'R'];
        for(let i = 0; i < arrayLanguageClient.length; i++){
            let str = arrayLanguageClient[i];
            for(let j = 0; j < languages.length; j++){
                if(str === languages[j]){
                    num++;
                }
            }
        }
        if(num === arrayLanguageClient.length){
            return true;
        } else {
            return false;
        }

    };

    checkListExperience(experience) {

        if(typeof experience === 'number' || typeof experience === 'object' || typeof experience === 'array' || experience == undefined){
            return false;
        }

        const experiences = ['0-1 years', '1-2 years', '2-3 years', '3-4 years', '4 and more years']
        for (let i = 0; i < experiences.length; i++) {
            if (experiences[i] === experience) {
                return true;
            }
        }
        return false;

    };

    checkSernameValidation(name) {

        if(name === ''){
            return true;
        }

        if(typeof name === 'number' || typeof name === 'object' || typeof name === 'array' || name == undefined || name.length < 2 || name.length > 40){
            return false;
        }

        if (/^[A-Z]{1}[a-zA-Z]+$/.test(name)) {
            return true;
        } else {
            return false;
        }

    };

    checkValidationJSON(obj){

        if(typeof obj === 'number' || typeof obj === 'string' || typeof obj === 'array' || obj == undefined){
            return false;
        }

        const username = obj.Username;
        const password = obj.Password;
        const email = obj.Email;
        const phone = obj.Phone;
        const name = obj.Name;
        const surname = obj.Surname;
        const gender = obj.Gender;
        const relationship = obj.Relantionship_status;
        const languages = obj.Programming_languages;
        const experience = obj.Work_experience;

        if(this.checkUsernameValidation(username) === true &&
            this.checkUsernameLength(username) === true &&
            this.checkPasswordOnlyLength(password) === true &&
            this.checkPasswordValidation(password) === true &&
            this.checkEmailValidation(email) === true &&
            this.checkPhoneNumberValidation(phone) === true &&
            this.checkNameValidation(name) === true &&
            this.checkListGender(gender) === true &&
            this.checkListRelation(relationship) === true &&
            this.checkListLanguages(languages) === true &&
            this.checkListExperience(experience) === true &&
            this.checkSernameValidation(surname) === true){
            return true;
        } else {
            return false;
        }
    };
    
    //---------------------------------------------------------------------------------------//

    create(str, obj) {

        try {
            if(str === undefined || str === "" || typeof(str) === 'number' || typeof(str) === 'object') {
                return obj;
            }
            const objJSON = JSON.parse(str);
            if(this.checkValidationJSON(objJSON) === false){
                obj.errorBlockCrudState = 1;
                return obj;
            } else {
                obj.errorBlockCrudState = 0;
                obj.arrayPerson.push(objJSON);
                obj.arrayPerson = this.newIdArray(obj.arrayPerson);
                return obj;
            }
        } 
        catch (e) {
            obj.errorBlockCrudState = 2;
            return obj;
        }

    };

    addStart(str, obj) {

        try {
            if(str === undefined || str === "" || typeof(str) === 'number' || typeof(str) === 'object') {
                return obj;
            }
            const objJSON = JSON.parse(str);

            if(this.checkValidationJSON(objJSON) === false){
                obj.errorBlockCrudState = 1;
                return obj;
            } else {
                obj.errorBlockCrudState = 0;
                obj.arrayPerson.unshift(objJSON);
                obj.arrayPerson = this.newIdArray(obj.arrayPerson);
                return obj;
            }
        } 
        catch (e) {
            obj.errorBlockCrudState = 2;
            return obj;
        }

    };

    addMiddle(str, obj) {

        try{
            if(str === undefined || str === "" || typeof(str) === 'number' || typeof(str) === 'object') {
                return obj;
            }

            const objJSON = JSON.parse(str);

            if(this.checkValidationJSON(objJSON) === false){
                obj.errorBlockCrudState = 1;
                return obj;
            } else {
                obj.errorBlockCrudState = 0;
                obj.arrayPerson.splice(Math.ceil(obj.arrayPerson.length/2), 0, objJSON);
                obj.arrayPerson = this.newIdArray(obj.arrayPerson);
                return obj;
            }
        } catch (e) {
            obj.errorBlockCrudState = 2;
            return obj;
        }

    };

    save(array) {
        new Promise(function(succeed, fail) {
                const request = new XMLHttpRequest();
                request.open("POST", 'http://18.188.19.161:3307/add', true);
                request.setRequestHeader('Content-Type', 'application/json');
                request.addEventListener("load", function() {
                    if (request.status < 400){
                        succeed(request.responseText);
                    } else {
                        fail(new Error("Request failed: " + request.statusText));
                    }
                });
                request.addEventListener("error", function() {
                    fail(new Error("Network error"));
                });
                request.send(JSON.stringify(array));
            });

    };
    
    saveDB(array) {
        new Promise(function(succeed, fail) {
                const request = new XMLHttpRequest();
                request.open("POST", 'http://18.188.19.161:3307/addNewStr', true);
                request.setRequestHeader('Content-Type', 'application/json');
                request.addEventListener("load", function() {
                    if (request.status < 400){
                        succeed(request.responseText);
                    } else {
                        fail(new Error("Request failed: " + request.statusText));
                    }
                });
                request.addEventListener("error", function() {
                    fail(new Error("Network error"));
                });
                request.send(JSON.stringify(array));
            });

    };

    read(string, obj) {
        
        if(string === "" || string === undefined || typeof(string) === 'object' || string <= 0) {
            obj.errorBlockCrudState = 1;
            return obj;
        }
        const str = JSON.stringify(obj.arrayPerson[+string - 1]);
        if(string === undefined || string === "" || string <= 0 || string > obj.arrayPerson.lenght){
            obj.errorBlockCrudState = 1;
            return obj;
        } else {
            obj.errorBlockCrudState = 0;
            obj.inputCrudValue = str;
            return obj;
        }

    };

    loginCrud(str1, str2, obj) {
        
        if(str1 !== 'admin'){
            obj.errorBlockLoginState1 = 1;
        } else {
            obj.errorBlockLoginState1 = 0;
        }

        if(str2 !== 'admin'){
            obj.errorBlockLoginState2 = 1;
        } else {
            obj.errorBlockLoginState2 = 0;
        }

        if(str1 === 'admin' && str2 === 'admin'){
            obj.blockLoginState = 0;
            obj.blockCrudState = 1;
        }
        
        return obj;
        
    };

    deleteStr(str, obj) {
        if(str === undefined || str === "" || typeof(str) === 'object' || str <= 0) {
            return obj;
        }
        
        const objJSON = JSON.parse(str);

        if(objJSON <= 0){
            obj.errorBlockCrudState = 1;
            return obj;
        } 

        if(+objJSON > obj.arrayPerson.length){
            obj.errorBlockCrudState = 1;
            return obj;
        } 
        else {
            obj.errorBlockCrudState = 0;
            obj.arrayPerson.splice(objJSON - 1, 1);
            obj.arrayPerson = this.newIdArray(obj.arrayPerson);
            obj.inputCrudValue = '';
            return obj;
        }
    };

    update(str, obj) {
        
        try{
            if(str === undefined || str === "" || typeof(str) === 'number' || typeof(str) === 'object') {
                return obj;
            }
        
            const objJSON = JSON.parse(str);
        
            if(this.checkValidationJSON(objJSON) === false || objJSON.Id === undefined){
                obj.errorBlockCrudState = 1;
                return obj;
            }
            if(+objJSON.Id > obj.arrayPerson.length || typeof objJSON !== 'object'){
                obj.errorBlockCrudState = 1;
                return obj;
            } 
            else {
                obj.errorBlockCrudState = 0;
                obj.arrayPerson.splice(objJSON.Id - 1, 1);
                obj.arrayPerson.splice(objJSON.Id - 1, 0, objJSON);
                obj.arrayPerson = this.newIdArray(obj.arrayPerson);
                obj.inputCrudValue = '';
                return obj;
            }

        } catch (e) {
            obj.errorBlockCrudState = 2;
            return obj;
        }
    };
    
}

module.exports = LogicCD;
