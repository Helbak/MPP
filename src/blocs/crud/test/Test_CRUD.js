describe('Test new id array', () => {
       
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.newIdArray([{Name: "Dima", Id: 5},{Name: "Nastia"},{Name: "Kostia"}]);
        const exp = [{Name: "Dima", Id: 1},{Name: "Nastia", Id: 2},{Name: "Kostia", Id: 3}];
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': [{Name: "Dima", Id: 5},{Name: "Nastia"},{Name: "Kostia"} ,{Name: "Kostia"}], 'expected': [{Name: "Dima", Id: 1},{Name: "Nastia", Id: 2},{Name: "Kostia", Id: 3}, {Name: "Kostia", Id: 4} ]},
        {'value': [{Name: "Dima", Id: 5},{Name: "Nastia"},{Name: "Kostia"}], 'expected': [{Name: "Dima", Id: 1},{Name: "Nastia", Id: 2},{Name: "Kostia", Id: 3}]}
    ];
    
    for (let testSuite of mock) {
        it(`Test  object, expected obfect with Id avtomatic`,() => {
            const act = logic.newIdArray(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('The input value is not a number', () => {
        const act = logic.newIdArray(5);
        assert.isFalse(act);
    });
    
    it('The input value is not a string', () => {
        const act = logic.newIdArray('test');
        assert.isFalse(act);
    });
    
    it('The input value is not a undefined', () => {
        const act = logic.newIdArray();
        assert.isFalse(act);
    });
    
    it('The input value is not array', () => {
        const act = logic.newIdArray({});
        assert.isFalse(act);
    });
    
});

describe('Test validation user nikname length', () => {
       
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkUsernameLength('Dima');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'Svagerr', 'expected': true},
        {'value': 'Hellomynamedima', 'expected': true},
        {'value': 'Op', 'expected': true},
        {'value': 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'expected': true},
        {'value': 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'expected': false}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkUsernameLength(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkUsernameLength(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkUsernameLength({});
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkUsernameLength({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkUsernameLength([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkUsernameLength();
        assert.isFalse(act);
    });
    
    it('Value < 40', () => {
        const act = logic.checkUsernameLength('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
        assert.isFalse(act);
    });
    
    it('Value > 0', () => {
        const act = logic.checkUsernameLength('');
        assert.isFalse(act);
    });
    
});

describe('Test validation user nikname', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkUsernameValidation('Svagerr');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'Svagerr', 'expected': true},
        {'value': 'Hellomynamedima', 'expected': true},
        {'value': 'oop', 'expected': true},
        {'value': 'DIMA', 'expected': true},
        {'value': 'Nastia', 'expected': true},
        {'value': 'Aaaaaaaaaaaa1', 'expected': true}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkUsernameValidation(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkUsernameValidation(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkUsernameValidation({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkUsernameValidation([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkUsernameValidation();
        assert.isFalse(act);
    });
    
});

describe('Test validation check password only length', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkPasswordOnlyLength('Svagerr');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'Svagerr', 'expected': true},
        {'value': 'Hellomynamedima', 'expected': true},
        {'value': 'oop', 'expected': false},
        {'value': 'DIMA', 'expected': false},
        {'value': 'Nastia', 'expected': true},
        {'value': 'Aaaaaaaaaaaa1', 'expected': true}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkPasswordOnlyLength(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkPasswordOnlyLength(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkPasswordOnlyLength({});
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkPasswordOnlyLength({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkPasswordOnlyLength([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkPasswordOnlyLength();
        assert.isFalse(act);
    });
    
    it('Value >= 30', () => {
        const act = logic.checkPasswordOnlyLength('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
        assert.isFalse(act);
    });
    
    it('Value <= 6', () => {
        const act = logic.checkPasswordOnlyLength('deeee');
        assert.isFalse(act);
    });
    
});

describe('Test validation password', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkPasswordValidation('Seaways34585745');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'Svagerr', 'expected': false},
        {'value': 'Hellomynamedima', 'expected': false},
        {'value': 'Oopfdsf3', 'expected': true},
        {'value': 'DIMA', 'expected': false},
        {'value': 'Nastia', 'expected': false},
        {'value': 'Aaaaaaaaaaaa1', 'expected': true}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkPasswordValidation(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkPasswordValidation(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkPasswordValidation({});
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkPasswordValidation({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkPasswordValidation([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkPasswordValidation();
        assert.isFalse(act);
    });
    
});

describe('Test validation email', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkEmailValidation('dimasagerr@gmail.com');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'Svagerr', 'expected': false},
        {'value': 'Hellomynamedima', 'expected': false},
        {'value': 'oofdof3424@gmail.com', 'expected': true},
        {'value': 'DIMA', 'expected': false},
        {'value': 'Nastia', 'expected': false},
        {'value': 'Aaaaaaaaaaaa1@outlook.com', 'expected': true},
        {'value': 'nastia@email.ua', 'expected': true},
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkEmailValidation(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkEmailValidation(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkEmailValidation({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkEmailValidation([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkEmailValidation();
        assert.isFalse(act);
    });
    
});

describe('Test validation phone', () => {

    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkPhoneNumberValidation('+380999166225');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': '+380639502497', 'expected': true},
        {'value': 'Hellomynamedima', 'expected': false},
        {'value': '+19999999999', 'expected': true},
        {'value': '+199999999991', 'expected': false},
        {'value': '+1999999999', 'expected': false},
        {'value': '+972999166225', 'expected': true},
        {'value': '+9729991662251', 'expected': false},
        {'value': '+97299916622', 'expected': false},
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkPhoneNumberValidation(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkEmailValidation(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkPhoneNumberValidation({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkPhoneNumberValidation([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkPhoneNumberValidation();
        assert.isFalse(act);
    });
    
    it('Value lenght < 12', () => {
        const act = logic.checkPhoneNumberValidation('+3809999999');
        assert.isFalse(act);
    });
    
    it('Value lenght > 13', () => {
        const act = logic.checkPhoneNumberValidation('+3809999999999');
        assert.isFalse(act);
    });
    
});

describe('Test validation name', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkNameValidation('Dima');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'Nastia', 'expected': true},
        {'value': '5', 'expected': false},
        {'value': 'Kostia', 'expected': true},
        {'value': 'ghb', 'expected': false},
        {'value': '+1999999999', 'expected': false},
        {'value': 'Ura', 'expected': true},
        {'value': 'dima', 'expected': false},
        {'value': 'Qwertyuiopasdfghjklzxcvbnmqwertyuioplkjrj', 'expected': false},
        {'value': 'Qwertyuiopasdfghjklzxcvbnmqwertyuioplkjr', 'expected': true},
        {'value': 'Qwertyuiopasdfghjklzxcvbnmqwertyuioplkj$', 'expected': false}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkNameValidation(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkNameValidation(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkNameValidation({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkNameValidation([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkNameValidation();
        assert.isFalse(act);
    });
    
    it('Value lenght < 40', () => {
        const act = logic.checkNameValidation('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
        assert.isFalse(act);
    });
    
    it('Value lenght > 1', () => {
        const act = logic.checkNameValidation('f');
        assert.isFalse(act);
    });
    
});

describe('Test validation surmame', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkSernameValidation('Dima');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'Nastia', 'expected': true},
        {'value': '5', 'expected': false},
        {'value': 'Kostia', 'expected': true},
        {'value': 'ghb', 'expected': false},
        {'value': '+1999999999', 'expected': false},
        {'value': 'Ura', 'expected': true},
        {'value': 'dima', 'expected': false},
        {'value': 'Qwertyuiopasdfghjklzxcvbnmqwertyuioplkjrj', 'expected': false},
        {'value': 'Qwertyuiopasdfghjklzxcvbnmqwertyuioplkjr', 'expected': true},
        {'value': 'Qwertyuiopasdfghjklzxcvbnmqwertyuioplkj$', 'expected': false}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkSernameValidation(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkSernameValidation(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkSernameValidation({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkSernameValidation([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkSernameValidation();
        assert.isFalse(act);
    });
    
    it('Value lenght < 40', () => {
        const act = logic.checkSernameValidation('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
        assert.isFalse(act);
    });
    
    it('Value lenght > 1', () => {
        const act = logic.checkSernameValidation('f');
        assert.isFalse(act);
    });
    
});

describe('Test validation gender', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkListGender('male');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'male', 'expected': true},
        {'value': '', 'expected': true},
        {'value': 'female', 'expected': true},
        {'value': 'rere', 'expected': false},
        {'value': '+1999999999', 'expected': false},
        {'value': 'male', 'expected': true},
        {'value': 'femal', 'expected': false},
        {'value': 'rer', 'expected': false},
        {'value': '', 'expected': true},
        {'value': 'Qwertyuiopasdfghjklzxcvbnmqwertyuioplkj$', 'expected': false}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkListGender(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkListGender(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkListGender({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkListGender([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkListGender();
        assert.isFalse(act);
    });
   

    
});

describe('Test validation relation status', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkListRelation('married');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'single', 'expected': true},
        {'value': '', 'expected': true},
        {'value': 'married', 'expected': true},
        {'value': 'rere', 'expected': false},
        {'value': 'sinle', 'expected': false},
        {'value': 'divorced', 'expected': true},
        {'value': 'femal', 'expected': false},
        {'value': 'rer', 'expected': false},
        {'value': '', 'expected': true},
        {'value': 'Qwertyuiopasdfghjklzxcvbnmqwertyuioplkj$', 'expected': false}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkListRelation(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkListRelation(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkListRelation({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkListRelation([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkListRelation();
        assert.isFalse(act);
    });
    
});

describe('Test validation languages', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkListLanguages('C, Java, PHP');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': 'C, PHP, R, Matlab', 'expected': true},
        {'value': 'C, C++', 'expected': true},
        {'value': 'Java, JavaScript', 'expected': true},
        {'value': 'rere', 'expected': false},
        {'value': 'sinle, page', 'expected': false},
        {'value': 'R', 'expected': true},
        {'value': 'Rr', 'expected': false},
        {'value': 'rer', 'expected': false},
        {'value': '', 'expected': false},
        {'value': 'C+++, C#, Python', 'expected': false}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkListLanguages(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkListLanguages(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkListLanguages({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkListLanguages([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkListLanguages();
        assert.isFalse(act);
    });
    
});

describe('Test validation expirience', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkListExperience('1-2 years');
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': '0-1 years', 'expected': true},
        {'value': '1-2 years', 'expected': true},
        {'value': '2-3 years', 'expected': true},
        {'value': 'rere', 'expected': false},
        {'value': 'sinle, page', 'expected': false},
        {'value': '3-4 years', 'expected': true},
        {'value': 'Rr', 'expected': false},
        {'value': 'rer', 'expected': false},
        {'value': '', 'expected': false},
        {'value': '4 and more years', 'expected': true}
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkListExperience(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not number', () => {
        const act = logic.checkListExperience(5);
        assert.isFalse(act);
    });
    
    it('Value not object', () => {
        const act = logic.checkListExperience({});
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkListExperience([]);
        assert.isFalse(act);
    });
    
    it('Value not undefined', () => {
        const act = logic.checkListExperience();
        assert.isFalse(act);
    });
    
});

describe('Test validation JSON', () => {
    
    const logic = new LogicCD();
    
    it('Function check', () => {
        const act = logic.checkValidationJSON({"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"});
        const exp = true;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {'value': {"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}, 'expected': true},
        {'value': {"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}, 'expected': true},
        {'value': {"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"","Relantionship_status":"","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}, 'expected': true},
        {'value': {"Username":"","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}, 'expected': false},
        {'value': {"Username":"Developer","Password":"","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}, 'expected': false},
        {'value': {"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"","Gender":"","Relantionship_status":"","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}, 'expected': true},
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value']}, expected ${testSuite['expected']}`,() => {
            const act = logic.checkValidationJSON(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Value not undefined', () => {
        const act = logic.checkValidationJSON();
        assert.isFalse(act);
    });
    
    it('Value not number', () => {
        const act = logic.checkValidationJSON(5);
        assert.isFalse(act);
    });
    
    it('Value not string', () => {
        const act = logic.checkValidationJSON('test');
        assert.isFalse(act);
    });
    
    it('Value not array', () => {
        const act = logic.checkValidationJSON([]);
        assert.isFalse(act);
    });
    
});

describe('Test create new Person', () => {
    
    const logic = new LogicCD();
    const states = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
    const str = '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}';
    
    it('Function check', () => {
        const act = logic.create(str, states);
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1':   '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '{"Username":"Developer","Password":"Parol","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 1,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 2,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-2 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 1,
                inputCrudValue: '', 
            }
        },
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value1']}, expected ${testSuite['expected']}`,() => {
            const act = logic.create(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value not undefined', () => {
        const act = logic.create(undefined, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not empty line', () => {
        const act = logic.create('', {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not a number', () => {
        const act = logic.create(5, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
 
    it('First value not object', () => {
        const act = logic.create({}, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
});

describe('Test create new Person add top', () => {
    
    const logic = new LogicCD();
    const states = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
    const str = '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}';
    
    it('Function check', () => {
        const act = logic.addStart(str, states);
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1':   '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '{"Username":"Developer","Password":"Parol","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 1,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 2,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-2 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 1,
                inputCrudValue: '', 
            }
        },
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value1']}, expected ${testSuite['expected']}`,() => {
            const act = logic.addStart(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value not undefined', () => {
        const act = logic.addStart(undefined, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not empty line', () => {
        const act = logic.addStart('', {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not a number', () => {
        const act = logic.addStart(5, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
 
    it('First value not object', () => {
        const act = logic.addStart({}, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
});

describe('Test create new Person add middle', () => {
    
    const logic = new LogicCD();
    const states = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
    const str = '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}';
    
    it('Function check', () => {
        const act = logic.addMiddle(str, states);
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1':   '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '{"Username":"Developer","Password":"Parol","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 1,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 2,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-2 years"}', 
            'value2': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }, 
            'expected': {
                arrayPerson: [],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 1,
                inputCrudValue: '', 
            }
        },
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value1']}, expected ${testSuite['expected']}`,() => {
            const act = logic.addMiddle(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value not undefined', () => {
        const act = logic.addMiddle(undefined, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not empty line', () => {
        const act = logic.addMiddle('', {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not a number', () => {
        const act = logic.addMiddle(5, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
 
    it('First value not object', () => {
        const act = logic.addMiddle({}, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
});

describe('Test function read', () => {
    
    const logic = new LogicCD();
        
    it('Function check', () => {
        const act = logic.read('1', {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}'
        }
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1': '2', 
            'value2': {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}, {"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":2}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        }, 
            'expected': {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}, {"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":2}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '{"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":2}', 
        }
        },
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value1']}, expected ${testSuite['expected']}`,() => {
            const act = logic.read(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value not object', () => {
        const act = logic.read({}, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 1,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not undefined', () => {
        const act = logic.read(undefined, {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 1,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value > 0', () => {
        const act = logic.read('0', {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 1,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
});

describe('Test function loginCrud', () => {
    
    const logic = new LogicCD();
        
    it('Function check', () => {
        const act = logic.loginCrud('admin', 'admin', {
            arrayPerson: [],
            blockCrudState: 0,
            blockLoginState: 1,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: ''
        }
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1': 'admin',
            'value2': 'Dima',
            'value3': {
                        arrayPerson: [],
                        blockCrudState: 0,
                        blockLoginState: 1,
                        errorBlockCrudState: 0,
                        errorBlockLoginState1: 0,
                        errorBlockLoginState2: 0,
                        inputCrudValue: '', 
                }, 
            'expected': {
                        arrayPerson: [],
                        blockCrudState: 0,
                        blockLoginState: 1,
                        errorBlockCrudState: 0,
                        errorBlockLoginState1: 0,
                        errorBlockLoginState2: 1,
                        inputCrudValue: '', 
                }
        },
        {
            'value1': 'Dima',
            'value2': 'admin',
            'value3': {
                        arrayPerson: [],
                        blockCrudState: 0,
                        blockLoginState: 1,
                        errorBlockCrudState: 0,
                        errorBlockLoginState1: 0,
                        errorBlockLoginState2: 0,
                        inputCrudValue: '', 
                }, 
            'expected': {
                        arrayPerson: [],
                        blockCrudState: 0,
                        blockLoginState: 1,
                        errorBlockCrudState: 0,
                        errorBlockLoginState1: 1,
                        errorBlockLoginState2: 0,
                        inputCrudValue: '', 
                }
        },
        {
            'value1': 'Dima',
            'value2': 'Maksyuta',
            'value3': {
                        arrayPerson: [],
                        blockCrudState: 0,
                        blockLoginState: 1,
                        errorBlockCrudState: 0,
                        errorBlockLoginState1: 0,
                        errorBlockLoginState2: 0,
                        inputCrudValue: '', 
                }, 
            'expected': {
                        arrayPerson: [],
                        blockCrudState: 0,
                        blockLoginState: 1,
                        errorBlockCrudState: 0,
                        errorBlockLoginState1: 1,
                        errorBlockLoginState2: 1,
                        inputCrudValue: '', 
                }
        },
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value1']}, expected ${testSuite['expected']}`,() => {
            const act = logic.loginCrud(testSuite['value1'], testSuite['value2'], testSuite['value3']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
});

describe('Test function delete', () => {
    
    const logic = new LogicCD();
        
    it('Function check', () => {
        const act = logic.deleteStr('1', {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: ''
        }
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1': '5', 
            'value2': {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}, {"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":2}, {"Username":"Developer2","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":3}, {"Username":"Developer3","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":4}, {"Username":"Developer4","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":5}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        }, 
            'expected': {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}, {"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":2}, {"Username":"Developer2","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":3}, {"Username":"Developer3","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":4}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        }
        },
        {
            'value1': '3', 
            'value2': {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}, {"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":2}, {"Username":"Developer2","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":3}, {"Username":"Developer3","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":4}, {"Username":"Developer4","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":5}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        }, 
            'expected': {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}, {"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":2}, {"Username":"Developer3","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":3}, {"Username":"Developer4","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":4}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        }
        }
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value1']}, expected ${testSuite['expected']}`,() => {
            const act = logic.deleteStr(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value undefined', () => {
        const act = logic.deleteStr(undefined, {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value > 0', () => {
        const act = logic.deleteStr({}, {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not object', () => {
        const act = logic.deleteStr('0', {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years","Id":1}],
            blockCrudState: 1,
            blockLoginState: 0,
            errorBlockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
});

describe('Test cfunction update', () => {
    
    const logic = new LogicCD();
    const states = {
            arrayPerson: [{"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
    const str = '{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}';
    
    it('Function check', () => {
        const act = logic.update(str, states);
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1':   '{"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 2}', 
            'value2': {
            arrayPerson: [{"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}, {"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 2}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        }, 
            'expected': {
                arrayPerson: [{"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}, {"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 2}],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }
        },
        {
            'value1':   '{"Username":"Developer","Password":"Parol12345","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}', 
            'value2': {
            arrayPerson: [{"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}, {"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 2}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        }, 
            'expected': {
                arrayPerson: [{"Username":"Developer","Password":"Parol12345","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}, {"Username":"Developer1","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 2}],
                blockLoginState: 1,
                blockCrudState: 0,
                errorBlockLoginState1: 0,
                errorBlockLoginState2: 0,
                errorBlockCrudState: 0,
                inputCrudValue: '', 
            }
        },
    ];
    
    for (let testSuite of mock) {
        it(`Test  value ${testSuite['value1']}, expected ${testSuite['expected']}`,() => {
            const act = logic.update(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value not undefined', () => {
        const act = logic.update(undefined, {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not fiel line', () => {
        const act = logic.update('', {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not a number', () => {
        const act = logic.update(5, {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
    it('First value not object', () => {
        const act = logic.update({}, {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        });
        const exp = {
            arrayPerson: [{"Username":"Developer","Password":"Parol1234","Email":"email@gmail.com","Phone":"+380999999999","Name":"Dima","Surname":"Maksyuta","Gender":"male","Relantionship_status":"married","Programming_languages":"C#, Java, JavaScript","Work_experience":"0-1 years", "Id": 1}],
            blockLoginState: 1,
            blockCrudState: 0,
            errorBlockLoginState1: 0,
            errorBlockLoginState2: 0,
            errorBlockCrudState: 0,
            inputCrudValue: '', 
        };
        assert.deepEqual(act, exp);
    });
    
});