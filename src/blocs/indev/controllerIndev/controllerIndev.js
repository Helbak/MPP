import ModelIndev from "../modelIndev/modelIndev.js";
import LogicIndev from "../logicIndev/logicIndev.js";


class ControllerIndev {
    constructor() {
        this.logic = new LogicIndev();
        this.model = new ModelIndev();
        this.tooltip = document.getElementById('tooltip');
        this.username = document.getElementById("username");
        this.password = document.getElementById("password");
        this.confirm = document.getElementById("confirm");
        this.email = document.getElementById("email");
        this.phone = document.getElementById("phone");
        this.name = document.getElementById('name');
        this.surname = document.getElementById('surname');
        this.gender = document.getElementById('gender');
        this.relation = document.getElementById('relation');
        this.progrLangLeft = document.getElementById('progrLangLeft');
        this.progrLangRight = document.getElementById('progrLangRight');
        this.experience = document.getElementById('experience');
        this.checkboxRules = document.getElementById('checkboxRules');
        this.backButtonFromStep3 = document.getElementById('backButtonFromStep3');
        this.registerButton = document.getElementById('registerButton');
}

    reducerModel(obj) {
        this.logic = new LogicIndev();
        switch (obj.action) {
            case 'Username':
                this.usernameListener(obj.text);
                break;
            case 'Password':
                this.passwordListener(obj.text);
                break;
            case 'Confirm':
                this.confirmListener(obj.text);
                break;
            case 'Email':
                this.emailListener(obj.text);
                break;
            case 'Phone':
                this.phoneListener(obj.text);
                break;
            case 'Name':
                this.nameListener(obj.text);
                break;
            case 'Surname':
                this.surnameListener(obj.text);
                break;
            case 'Gender':
                this.genderListener(obj.text);
                break;
            case 'Relation':
                this.relationListener(obj.text);
                break;
            case 'ProgrLangRight':
                this.progrLangRightListener(obj.text);
                break;
            case 'Experience':
                this.experienceListener(obj.text);
                break;
            case 'RegisterButton':
                this.emailListener(obj.text);
                break;
            case 'checkbox':
                this.checkboxListener();
                break;
            case 'sendPersonToDB':
                this.sendPersonToDB();
                this.model.clearAllModel();
                this.model.state.step='StepOne';
                break;
            case 'hideTip':
                this.hideTip();
                break;
            case 'test':
                console.log(' success test from  reducerModel(obj) ');
                return 'test';
                break;
        }
    }

    usernameListener(text) {
        if (this.logic.checkUsernameLength(text) === true && this.logic.checkUsernameValidation(text) === true) {
            console.log(' usernameListener(text) = ' + text)
            this.redDrawer("username", 'blue');
            this.model.setUsername(text);
            this.hideTip();
        }
        if (this.logic.checkUsernameLength(text) === false || this.logic.checkUsernameValidation(text) === false) {
            this.redDrawer("username", 'red');
            this.model.setUsername('');
            this.showTip("username");
        }
        this.disableRegistr();
    };

    passwordListener(text) {
        if (this.logic.checkConfirm(text, confirm.value) === true) {
            this.redDrawer("confirm", 'blue');
        }
        if (this.logic.checkConfirm(text, confirm.value) === false) {
            this.redDrawer("confirm", 'red');
        }
        if (this.logic.checkPasswordLength(text) !== false && this.logic.checkPasswordValidation(text) === true) {
            this.redDrawer("password", 'blue');
            this.model.setPassword(text);
            this.hideTip();
        }
        if (this.logic.checkPasswordLength(text) === false || this.logic.checkPasswordValidation(text) === false) {
            this.redDrawer("password", 'red');
            this.model.setPassword('');
            this.showTip("password");
        }
        this.disableRegistr();
    }

    confirmListener(text) {
        const password = document.getElementById("password");
        console.log('confirmListener password= ' + this.model.password)
        if (this.logic.checkConfirm(this.model.password, text) === true) {
            this.redDrawer("confirm", 'blue');
            this.model.setConfirm(text);
            this.hideTip();
        }
        if (this.logic.checkConfirm(this.model.password, text) === false) {
            this.redDrawer("confirm", 'red');
            this.model.setConfirm('');
            this.showTip("confirm");
        }
        this.disableRegistr();
    }

    emailListener(text) {
        if (this.logic.checkEmailValidation(text) === true) {
            this.redDrawer("email", 'blue');
            this.model.setEmail(text);
            this.hideTip();
        }
        if (this.logic.checkEmailValidation(text) === false) {
            this.redDrawer("email", 'red');
            this.model.setEmail('');
            this.showTip("email");
        }
        this.disableRegistr();
    }

    phoneListener(text) {
        if (this.logic.checkPhoneNumberValidation(text) === true) {
            this.redDrawer("phone", 'blue');
            this.model.setPhone(text);
            this.hideTip();
        }
        if (this.logic.checkPhoneNumberValidation(text) === false) {
            this.redDrawer("phone", 'red');
            this.model.setPhone('');
            this.showPhoneTip();
        }
        this.disableRegistr();
    }

    nameListener(text) {
        if (this.logic.checkNameValidation(text) === true) {
            this.model.setName(text);
            this.model.name = text;
            this.redDrawer("name", "blue");
            this.hideTip();
        }
        if (this.logic.checkNameValidation(text) === false) {
            this.redDrawer("name", "red");
            this.model.name = '';
            this.showTip("name");
        }
        this.disableRegistr();
    }

    surnameListener(text) {
        if (this.logic.checkNameValidation(text) === true) {
            this.model.setSurname(text);
            this.model.surname = text;
            this.redDrawer("surname", "blue");
            this.hideTip();
        }
        if (this.logic.checkNameValidation(text) === false) {
            this.redDrawer("surname", "red");
            this.model.surname = '';
            this.showTip("surname");
        }
        this.disableRegistr();
    }

    genderListener(text) {
        this.model.setGender(text);
        this.disableRegistr();
    }

    relationListener(text) {
        this.model.setRelation(text);
        this.disableRegistr();
    }

    experienceListener(text) {
        this.model.setExperience(text);
        this.disableRegistr();
    }

    checkboxListener() {
        this.model.rulesBox = this.model.rulesBox == false ? true : false;
        this.disableRegistr();
    };

    progrLangRightListener(text) {
        const arrayLanguages = this.model.hisLanguages;
        if (this.logic.checkExistElement(arrayLanguages, text) === false) {
            return;
        }
        if (text === 'No one') {
            this.model.setHisLanguages(text);
        }
        if (text !== 'No one') {
            this.model.setHisLanguages(text);
            const stringLanguages = this.logic.arrayToString(arrayLanguages);
            this.model.stringLanguages = stringLanguages;
        }
        this.disableRegistr();
        this.model.rerenderEntireTree();
    };

    disableRegistr() {
        if (
            this.model.rulesBox === true
            &&
            this.logic.checkNameValidation(this.model.name) === true
            &&
            this.logic.checkUsernameValidation(this.model.username) === true
            &&
            this.logic.checkUsernameLength(this.model.username) === true
            &&
            this.logic.checkPasswordValidation(this.model.password) === true
            &&
            this.logic.checkPasswordOnlyLength(this.model.password) === true
            &&
            this.logic.checkConfirm(this.model.confirm, this.model.password) === true
            &&
            this.logic.checkEmailValidation(this.model.email) === true
            &&
            this.logic.checkPhoneNumberValidation(this.model.phone) === true
            &&
            this.logic.checkPhoneNumberValidation(this.model.phone) === true
            &&
            this.model.stringLanguages.length >= 1
            &&
            this.logic.checkStringIsEmpty(this.model.experience) === true
        ) {
            this.model.disableRegistr=false;
            console.log(' registerButton.disabled '+'=false')
            return;
        }
        this.model.disableRegistr=true;
        console.log(' registerButton.disabled '+'=true')
    }

    sendPersonToDB() {
        console.log('Goodbye Person')
        let arrayOnePersone = [{
            Username: this.model.username,
            Password: this.model.password,
            Email: this.model.email,
            Phone: this.model.phone,
            Name: this.model.name,
            Surname: this.model.surname,
            Gender: this.model.gender,
            Relantionship_status: this.model.relation,
            Programming_languages: this.model.stringLanguages,
            Work_experience: this.model.experience
        }];

        new Promise(function (succeed, fail) {
            const request = new XMLHttpRequest();
            request.open("POST", 'http://18.188.19.161:3307/addNewStr', true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.addEventListener("load", function () {
                if (request.status < 400) {
                    succeed(request.responseText);
                } else {
                    fail(new Error("Request failed: " + request.statusText));
                }
            });
            request.addEventListener("error", function () {
                fail(new Error("Network error"));
            });
            request.send(JSON.stringify(arrayOnePersone));
        });
    }

    redDrawer(id, color) {

        let area = document.getElementById(id);
        if (color === 'black') {
            area.style = "border-bottom-color: rgba(9, 1, 1, 0.95);";
        }
        if (color === 'red') {
            // area.style = "color: rgba(254, 27, 46, 0.95)";
            area.style = "border-bottom-color: rgb(228, 17, 17)";

        }
        if (color === 'blue') {
            area.style = "border-bottom-color:  rgba(55, 68, 206)";
        }
    };

    showTip(id) {
        const tooltip = document.getElementById('tooltip');
        switch (id) {
            case ('username'):
                tooltip.style.display = 'block';
                tooltip.innerHTML = this.model.usernameTipString;
                tooltip.style.marginTop = '-68px';
//                this.tooltip.style.left = '460px';
                break;
            case ('password'):
                tooltip.style.display = 'block';
                tooltip.innerHTML = this.model.passwordTipString;
                tooltip.style.marginTop = '0px';
//                tooltip.style.left = '460px';
                break;
            case('confirm'):
                tooltip.style.display = 'block';
                tooltip.innerHTML = this.model.confirmTipString;
                tooltip.style.marginTop = '65px';
//                this.tooltip.style.left = '460px';
                break;
            case('email'):
                tooltip.style.display = 'block';
                tooltip.innerHTML = this.model.emailTipString;
                tooltip.style.marginTop = '132px';
//                this.tooltip.style.left = '460px';
                break;
            case('name'):
                tooltip.style.display = 'block';
                tooltip.innerHTML = this.model.nameTipString;
                tooltip.style.marginTop = '-67px';
//                this.tooltip.style.left = '460px';
                break;
            case('surname'):
                tooltip.style.display = 'block';
                tooltip.innerHTML = this.model.surnameTipString;
                tooltip.style.marginTop = '-2px';
//                this.tooltip.style.left = '460px';
                break;
            case('checkboxRules'):
                tooltip.style.display = 'block';
                tooltip.innerHTML = this.model.checkBoxTipString;
                tooltip.style.marginTop = '130px';
//                this.tooltip.style.left = '528px';
                break;
            default :
                break;
        }
    };

    showPhoneTip() {
        if (phone.value[0] !== '+') {
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.phoneTipString1;
            this.tooltip.style.marginTop = '200px';
//            this.tooltip.style.left = '460px';
            //подсказка про коды ниже
        } else if (phone.value[0] === '+' && phone.value !== '+1' && phone.value !== '+380' && phone.value !== '+972' && phone.value.length < 5) {
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.phoneTipString2;
            this.tooltip.style.marginTop = '200px';
//            this.tooltip.style.left = '460px';
            ;
            //подсказка про длину цифр ниже
        } else if (phone.value.substring(0, 4) === '+380' || phone.value.substring(0, 4) === '+972') {
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.phoneTipString3;
            this.tooltip.style.marginTop = '200px';
//            this.tooltip.style.left = '460px';
            //подсказка про только цифры ниже 
        } else if (phone.value.substring(0, 2) === '+1') {
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.phoneTipString5;
            this.tooltip.style.marginTop = '200px';
//            this.tooltip.style.left = '460px';
            //подсказка про только цифры ниже
        }
        if (phone.value[0] === '+' && /[А-Яа-яA-Za-z  ]+$/.test(phone.value)) {
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.phoneTipString4;
            this.tooltip.style.marginTop = '200px';
//            this.tooltip.style.left = '460px';
        }
    };

    hideTip() {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    };
}

export default ControllerIndev;