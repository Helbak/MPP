class ModelIndev {
    constructor() {
        this.state = {
            step: 'StepOne'
        };
        this.username = "";
        this.password = "";
        this.confirm = "";
        this.phone = "";
        this.email = "";
        this.name = "";
        this.surname = "";
        this.gender = "";
        this.relation = "";
        this.experience = "";
        this.progrLang = "";
        // this.rules;
        this.countStep2 = 1;
        this.countStep3 = 1;
        this.rulesBox = false;
        this.hisLanguages = [];
        this.stringLanguages = '';
        this.disableRegistr = true;
        this.languages = ['Java', 'C', 'C++', 'C#', 'JavaScript', 'PHP', 'Ruby', 'Matlab', 'Python', 'R', 'Swift'];
        this.experiences = ['0 - 1 years', '1 - 2 years', '2 - 3 years', '3 - 4 years', '4 and more years'];
        this.area = ['usernameArea', 'passwordArea', 'confirmArea', 'phoneArea', 'emailArea', 'nameArea', 'surnameArea', 'genderArea', 'relationArea', 'progrLangArea', 'experienceArea'];
        this.usernameTipString = 'Enter a name of at least 1 and no more than 40 characters, in Latin letters';
        this.passwordTipString = 'Password must have from 6 to 30 characters, including one digit, one letter of the upper register, one letter of the lower register';
        this.confirmTipString = 'Passwords do not match';
        this.emailTipString = 'You entered an invalid email';
        this.phoneTipString1 = 'Enter the first sign "+"';
        this.phoneTipString2 = 'Enter the code of Ukraine or Israel or the United States';
        this.phoneTipString3 = 'The number of digits should be 12';
        this.phoneTipString4 = 'Enter only numbers';
        this.phoneTipString5 = 'The number of digits should be 11';
        this.nameTipString = 'Enter a name of at least 2 and no more than 40 characters, in Latin letters, first spell is capital ';
        this.surnameTipString = 'Enter a name of at least 2 and no more than 40 characters, in Latin letters, first spell is capital';
        this.genderTipString = '';
        this.relationTipString = '';
        this.progrLangTipString = '';
        this.experienceTipString = '';
        this.checkBoxTipString = 'Do you agree?';


        this.stringStep1 = "<div class=\"indev-module__main__title\">\n" +
            "              <p class=\"indev-module__main__title-text\">CREATE AN ACCOUNT</p>\n" +
            "          </div>\n" +
            "          <div class=\"indev-module__main__steps first\" >\n" +
            "              <div class=\"indev-module__main__steps-container\">\n" +
            "                  <input class=\"indev-module__main-steps__inputs\" id = \"username\" type=\"text\" placeholder=\"Username\">\n" +
            "                  <input class=\"indev-module__main-steps__inputs\" id = \"password\" type=\"password\" placeholder=\"Password\">\n" +
            "                  <input class=\"indev-module__main-steps__inputs\" id = \"confirm\" type=\"password\" placeholder=\"Repeat password\">\n" +
            "                  <input class=\"indev-module__main-steps__inputs\" id = \"email\" type=\"text\" placeholder=\"E-mail\">\n" +
            "                  <input class=\"indev-module__main-steps__inputs\" id = \"phone\" type=\"tel\" placeholder=\"Phone number\">\n" +
            "              </div>\n" +
            "              <div class=\"indev-module__main__steps__footer footer-block\">\n" +
            "                  <div class=\"footer-block__btn-prev\"></div>\n" +
            "                  <div class=\"footer-block__text\">\n" +
            "                      <p class=\"indev-module__main-steps__inputs__step\">1/3</p>\n" +
            "                  </div>\n" +
            "                  <div class=\"footer-block__btn-next\">\n" +
            "                      <button class=\"indev-module__main__button-next\" id=\"nextButton\">Next step</button>\n" +
            "                  </div>\n" +
            "              </div>\n" +
            "          </div>";

        this.stringStep2 = " <div clsss=\"indev-module__main__title\">\n" +
            "              <p class=\"indev-module__main__title-text\">CREATE AN ACCOUNT</p>\n" +
            "          </div>\n" +
            "          <div class=\"indev-module__main__steps second\">\n" +
            "              <div class=\"indev-module__main__steps-container\">\n" +
            "                  <input class=\"indev-module__main-steps__inputs\" type=\"text\" id=\"name\" placeholder=\"Name\">\n" +
            "                  <input class=\"indev-module__main-steps__inputs\" type=\"text\" id=\"surname\" placeholder=\"Surname\">\n" +
            "              <div class=\"indev-module__main__steps-container\">\n" +
            "              <select class=\"indev-module__main__steps-container-select\" type=\"text\" id=\"gender\">\n" +
            "                  <option value=\"\" selected disabled>Gender</option>\n" +
            "                  <option value=\"male\">male</option>\n" +
            "                  <option value=\"female\">female</option>\n" +
            "              </select>\n" +
            "              </div>\n" +
            "              <div class=\"indev-module__main__steps-container\">\n" +
            "                  <select class=\"indev-module__main__steps-container-select\" type=\"text\" id=\"relation\">\n" +
            "                      <option value=\"\" selected disabled>Relationship status</option>\n" +
            "                      <option value=\"divorced\">divorced</option>\n" +
            "                      <option value=\"married\">married</option>\n" +
            "                      <option value=\"single\">single</option>\n" +
            "                  </select>\n" +
            "              </div>\n" +
            "              </div>\n" +
            "              <div class=\"indev-module__main__steps__footer\">\n" +
            "                  <div class=\"footer-block__btn-prev\">\n" +
            "                      <button class=\"indev-module__main__button-prev\" id=\"backButtonFrom2\">Back</button>\n" +
            "                  </div>\n" +
            "                  <div class=\"footer-block__text\">\n" +
            "                      <p class=\"indev-module__main-steps__inputs__step\">2/3</p>\n" +
            "                  </div>\n" +
            "                  <div class=\"footer-block__btn-next\">\n" +
            "                      <button class=\"indev-module__main__button-next\" id=\"nextButtonFrom2\">Next step</button>\n" +
            "                  </div>\n" +
            "              </div>\n" +
            "          </div>";

        this.stringStep3 = "<div clsss=\"indev-module__main__title\">\n" +
            "          <p class=\"indev-module__main__title-text\">CREATE AN ACCOUNT</p>\n" +
            "          </div>\n" +
            "          <div class=\"indev-module__main__steps third\" >\n" +
            "              <div class=\"indev-module__main__steps-container\">\n" +
            "                  <div class=\"third-multilist\">\n" +
            "                      <input type=\"text\" class=\"third-multilist__input1\" readonly=\"true\" type=\"text\" id=\"progrLangLeft\" placeholder=\"Programming languages\">\n" +
            "                      <select  type=\"text\" class=\"indev-module__main__steps-container-select1 multiright\" id=\"progrLangRight\">\n" +
            "                          <option selected disabled value=\"\"></option>\n" +
            "                          <option value=\"No one\">No one</option>\n" +
            "                          <option value=\"C\">C</option>\n" +
            "                          <option value=\"C++\">C++</option>\n" +
            "                          <option value=\"C#\">C#</option>\n" +
            "                          <option value=\"Java\">Java</option>\n" +
            "                          <option value=\"JavaScript\">JavaScript</option>\n" +
            "                          <option value=\"Matlab\">Matlab</option>\n" +
            "                          <option value=\"PHP\">PHP</option>\n" +
            "                          <option value=\"Ruby\">Ruby</option>\n" +
            "                          <option value=\"Python\">Python</option>\n" +
            "                          <option value=\"R\">R</option> No one\n" +
            "                      </select>\n" +
            "\n" +
            "                      <select class=\"indev-module__main__steps-container-select input\" type=\"text\" id=\"experience\">\n" +
            "                          <option selected disabled value=\"\">Work experience</option>\n" +
            "                          <option value=\"0-1 years\">0-1 years</option>\n" +
            "                          <option  value=\"1-2 years\">1-2 years</option>\n" +
            "                          <option  value=\"2-3 years\">2-3 years</option>\n" +
            "                          <option  value=\"3-4 years\">3-4 years</option>\n" +
            "                          <option  value=\"4 and more years\">4 and more years</option>\n" +
            "                      </select>\n" +
            "\n" +
            "                      <div class=\"third-multilist__checkbox\">\n" +
            "                          <input type=\"checkbox\" id = \"checkboxRules\" value=\"true\">\n" +
            "                          <label for=\"checkbox\">Accept the <a href=\"#\" id=\"btnRules\">registration</a> rules</label>\n" +
            "                      </div>\n" +
            "                  </div>\n" +
            "\n" +
            "              </div>\n" +
            "              <div class=\"indev-module__main__steps__footer\">\n" +
            "                  <div class=\"footer-block__btn-prev\">\n" +
            "                      <button class=\"indev-module__main__button-prev\" id=\"backButtonFromStep3\">Back</button>\n" +
            "                  </div>\n" +
            "                  <div class=\"footer-block__text\">\n" +
            "                      <p class=\"indev-module__main-steps__inputs__step\">3/3</p>\n" +
            "                  </div>\n" +
            "                  <div class=\"footer-block__btn-next\">\n" +
            "                      <button class=\"indev-module__main__button-next\" id=\"registerButton\">Registration</button>\n" +
            "                  </div>\n" +
            "              </div>\n" +
            "          </div>";

        this.stringRules = '<div class="indev-module__main__steps second">\n' +
            '              <div class="indev-module__main__steps-container">\n' +
            '          <p class="indev-module__main__title-text">RULES</p>\n' +
            '                      <button class="indev-module__main__button-from-rules" id="backButtonFromRules">Back</button>\n' +
            '                  </div>\n' +
            '                  <div class="footer-block__text">\n' +
            '                      <p class="indev-module__main-steps__inputs__step"></p>\n' +
            '                  </div>\n' +
            '              </div>\n' +
            '          </div>\n' +
            '          <div clsss="indev-module__main__title">\n' +

            '          </div>\n';

        this.stringStep4 = "<div class=\"indev-module__main__steps four\">\n" +
            "              <p class=\"indev-module__main__steps-success\">Your information successful added on the database! Good luck!</p>\n" +
            "          </div>";
    };

    getResult() {
        return this.stringResult;
    };

    getRules() {
        return this.stringRules;
    };

    getStep1() {
        return this.stringStep1;
    };

    getStep2() {
        return this.stringStep2;
    };

    getStep3() {
        return this.stringStep3;
    };

    getStep4() {
        return this.stringStep4;
    };


    getRules() {
        return this.rules;
    };

    getUsername() {
        return this.username;
    };

    setUsername(username) {
        return this.username = username;
    };


    getPassword() {
        return this.password;
    };

    setPassword(password) {
        return this.password = password;
    };


    getConfirm() {
        return this.confirm;
    };

    setConfirm(confirm) {
        return this.confirm = confirm;
    };

    getPhone() {
        return this.phone;
    };

    setPhone(phone) {
        return this.phone = phone;
    };

    getEmail() {
        return this.email;
    };

    setEmail(email) {
        return this.email = email;
    };

    getName() {
        return this.name;
    };

    setName(name) {
        return this.name = name;
    };


    getSurname() {
        return this.surname;
    };

    setSurname(surname) {
        return this.surname = surname;
    };


    getGender() {
        return this.gender;
    };

    setGender(gender) {
        return this.gender = gender;
    };


    getRelation() {
        return this.relation;
    };

    setRelation(relation) {
        return this.relation = relation;
    };

    getProgrLang() {
        return this.progrLang;
    };

    setProgrLang(progrLang) {
        return this.progrLang = progrLang;
    };

    getExperience() {
        return this.experience;
    };

    setExperience(experience) {
        return this.experience = experience;
    };

    getArea() {
        return this.area;
    };

    setRulesBox(rulesBox) {
        return this.rulesBox = rulesBox;
    };

    getArea() {
        return this.rules;
    };

    setCountStep2(countStep2) {
        return this.countStep2 = countStep2;
    };

    setCountStep3(countStep3) {
        return this.countStep3 = countStep3;
    };

    setHisLanguages(language) {
        if (language === 'No one') {
            this.hisLanguages = ['No one'];
            this.stringLanguages = 'No one'
            return;
        }
        if (this.hisLanguages[0] === 'No one') {
            this.hisLanguages[0] = language;
            return;
        }
        this.hisLanguages[this.hisLanguages.length] = language;
    };

    getStateStep() {
        return this.state.step;
    };

    setStateStep(step) {
        this.state.step = step;
    };

    rerenderEntireTree() {
        console.log('state changed');
    }

    clearAllModel() {
        this.username = "";
        this.password = "";
        this.confirm = "";
        this.phone = "";
        this.email = "";
        this.name = "";
        this.surname = "";
        this.gender = "";
        this.relation = "";
        this.experience = "";
        this.progrLang = "";
        // this.rules;
        this.countStep2 = 1;
        this.countStep3 = 1;
        this.rulesBox = false;
        this.hisLanguages = [];
        this.stringLanguages = '';
        this.disableRegistr = true;
        this.languages = ['Java', 'C', 'C++', 'C#', 'JavaScript', 'PHP', 'Ruby', 'Matlab', 'Python', 'R', 'Swift'];
        this.experiences = ['0 - 1 years', '1 - 2 years', '2 - 3 years', '3 - 4 years', '4 and more years'];
        this.area = ['usernameArea', 'passwordArea', 'confirmArea', 'phoneArea', 'emailArea', 'nameArea', 'surnameArea', 'genderArea', 'relationArea', 'progrLangArea', 'experienceArea'];
        this.usernameTipString = 'Enter a name of at least 1 and no more than 40 characters, in Latin letters';
        this.passwordTipString = 'Password must have from 6 to 30 characters, including one digit, one letter of the upper register, one letter of the lower register';
        this.confirmTipString = 'Passwords do not match';
        this.emailTipString = 'You entered an invalid email';
        this.phoneTipString1 = 'Enter the first sign "+"';
        this.phoneTipString2 = 'Enter the code of Ukraine or Israel or the United States';
        this.phoneTipString3 = 'The number of digits should be 12';
        this.phoneTipString4 = 'Enter only numbers';
        this.phoneTipString5 = 'The number of digits should be 11';
        this.nameTipString = 'Enter a name of at least 2 and no more than 40 characters, in Latin letters, first spell is capital ';
        this.surnameTipString = 'Enter a name of at least 2 and no more than 40 characters, in Latin letters, first spell is capital';
        this.genderTipString = '';
        this.relationTipString = '';
        this.progrLangTipString = '';
        this.experienceTipString = '';
        this.checkBoxTipString = 'Do you agree?';
    }

    subscribe(observer) {//принимаем из инита функцию rerender
        this.rerenderEntireTree = observer;//перезаписываем (даём новое содержание
        //функции rerenderEntireTree(), теперь её содержание не console.log, а
        // controller.init(controllerCD.callBackBtnCrud.bind(controllerCD), controllerCD.model.States)
    }

};


export default ModelIndev;