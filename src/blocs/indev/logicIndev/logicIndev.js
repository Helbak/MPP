


class LogicIndev{
    constructor(){};

    checkUsernameLength (username) {
        if (username.length < 1 || username.length > 40) {
            return false;
        } else {
            return true;
        }
    };

   checkUsernameValidation(username) {
        if (/^[1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM/*+%&;$@]+$/.test(username)) {
            return true
        } else {
            return false;
        }
    };

    checkPasswordLength (password) {
        if (password.length < 6 || password.length > 30) {
            return false;
        } else if (password.length >= 6 && password.length <= 8) {
            return "Password is easy"
        } else if (password.length >= 9 && password.length <= 10) {
            return "Password is middle"
        } else if (password.length >= 11 && password.length <= 30) {
            return "Password is hard"
        }
    };
    checkPasswordOnlyLength (password) {
        if (password.length >= 6 || password.length <= 30) {
            return true;
        }
        return false;
    };

    checkPasswordValidation (password) {
        if (/(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])^[^а-яА-Я]+$/.test(password)) {
            return true;
        } else {
            return false;
        }
    };

    checkConfirm (stringA, stringB) {
        // console.log(' checkConfirm (stringA, stringB)= '+stringA + '  '+stringB)
        if (stringA === stringB) {
            return true;
        } else {
            return false;
        }
    };

    checkEmailValidation (email) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return true;
        } else {
            return false;
        }
    };

    checkPhoneNumberValidation (phoneNumber) {
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

    checkNameValidation (name) {
        if (name.length < 2 || name.length > 40) {
            return false;
        }
        if (/^[A-Z]{1}[a-zA-Z]+$/.test(name)) {
            return true;
        } else {
            return false;
        }
    };
    checkListGender (datalist) {
        if (datalist === 'male' || datalist === 'female') {
            return true;
        }
        if (datalist !== 'male' || datalist !== 'female') {
            return false;
        }
    };
    checkListRelation (relation) {
        if (relation === 'single' || relation === 'married' || relation === 'divorced') {
            return true;
        }
        return false;
    };
    checkListLanguages (language, languages) {
        for (let i = 0; i < languages.length; i++) {
            if (languages[i] === language) {
                return true;
            }
        }
        return false;
    };
    checkListExperience (experience, experiences) {
        for (let i = 0; i < experiences.length; i++) {
            if (experiences[i] === experience) {
                return true;
            }
        }
        return false;
    };
    checkStringIsEmpty (string) {
        if (string !== "") {
            return true;
        }
        return false;
    };
    arrayToString (array) {
        let string = '';
        if (array.length === 0) {
            return string;
        }
        string = array[0];
        if (array.length === 1) {
            return string;
        }
        for (let i = 1; i < array.length; i++) {
            string = string + ', ' + array[i];
        }
        return string;
    };
    checkExistElement (array, el) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === el) {
                return false;
            }
        }
        return true;
    };
    checkNoOne (array, el) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 'No one') {
                return true;
            }
        }
        return false;
    };
}
export default LogicIndev;