const express = require("express");
const app = express();
app.use(express.static("dist"));
app.get("/", function(request, response){
    response.sendFile("index.html", { root: __dirname });
});
const bodyParser = require('body-parser');
const mysql=require('mysql');

const port = 3307;

const server = app.listen(port, function () {
    console.log(`1) ------------------ Server on port ${port} ------------------ `);
});

const http = require('http').Server(app);
app.use(express.json());
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database: 'crud_version_two'
});
connection.connect(function(err){
    if(!!err){
        console.log(err);
    } else {
        console.log(' 2) ------------ Connected database CRUD ---------- ');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(express.static(__dirname + '/modules/modul_CRUD'));

app.get('/all', function (req, res) {
    connection.query('SELECT * FROM crud_version_two', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

app.post('/add', function (req, res) {
    const obj = req.body;
    
    function result(array) {        
        if(obj.length === array.length){
            for(let i = 0; i < obj.length; i++){
                connection.query(`UPDATE crud_version_two SET Username = '${obj[i].Username}', Password = '${obj[i].Password}', Email = '${obj[i].Email}', Phone = '${obj[i].Phone}', Name = '${obj[i].Name}', Surname = '${obj[i].Surname}', Gender = '${obj[i].Gender}', Relantionship_status = '${obj[i].Relantionship_status}', Programming_languages = '${obj[i].Programming_languages}', Work_experience = '${obj[i].Work_experience}' WHERE Id = ${i+1}`, function (error, results, fields) {
                    if (error) throw error;
                    res.end();
                    console.log("База данных обновилась");
            });    
            }
        } 
        else if (obj.length > array.length){
            for(let i = 0; i < obj.length; i++){
                if(i >= array.length){

                    connection.query(`INSERT INTO crud_version_two (Username, Password, Email, Phone, Name, Surname, Gender, Relantionship_status, Programming_languages, Work_experience, Id) VALUES ('${obj[i].Username}', '${obj[i].Password}', '${obj[i].Email}', '${obj[i].Phone}', '${obj[i].Name}', '${obj[i].Surname}', '${obj[i].Gender}', '${obj[i].Relantionship_status}', '${obj[i].Programming_languages}', '${obj[i].Work_experience}', ${obj[i].Id})`, function (error, results, fields) {
                        if (error) throw error;
                        res.end();
                        console.log("Пользователь добавлен");
                    });
                } else {
                    connection.query(`UPDATE crud_version_two SET Username = '${obj[i].Username}', Password = '${obj[i].Password}', Email = '${obj[i].Email}', Phone = '${obj[i].Phone}', Name = '${obj[i].Name}', Surname = '${obj[i].Surname}', Gender = '${obj[i].Gender}', Relantionship_status = '${obj[i].Relantionship_status}', Programming_languages = '${obj[i].Programming_languages}', Work_experience = '${obj[i].Work_experience}',  Id = ${obj[i].Id} WHERE Id = ${i+1}`, function (error, results, fields) {
                        if (error) throw error;
                        res.end();
                        console.log("База данных обновилась");
                    });
                }
            }
        } 
        else {
            for(let i = 0; i < array.length; i++){
                if(obj[i] === undefined){
                    connection.query(`DELETE FROM crud_version_two WHERE Id = ${i+1}`, function (error, results, fields) {
                        if (error) throw error;
                        res.end();
                        console.log("Было удаление пользователя");
                    });
                } 
                else {
                    connection.query(`UPDATE crud_version_two SET Username = '${obj[i].Username}', Password = '${obj[i].Password}', Email = '${obj[i].Email}', Phone = '${obj[i].Phone}', Name = '${obj[i].Name}', Surname = '${obj[i].Surname}', Gender = '${obj[i].Gender}', Relantionship_status = '${obj[i].Relantionship_status}', Programming_languages = '${obj[i].Programming_languages}', Work_experience = '${obj[i].Work_experience}',  Id = ${obj[i].Id} WHERE Id = ${i+1}`, function (error, results, fields) {
                        if (error) throw error;
                        res.end();
                        console.log("База данных обновилась");
                    });
                }
            }
        }
    }
    
    const arrayDB = connection.query('SELECT * FROM crud_version_two', function (error, results, fields) {
            if (error) throw error;
            let array = results;
            result(results);
        }); 

});

app.post('/addNewStr', function (req, res) {
    
    const obj = req.body;
    
    function result(array) {        
        
        for(let i = 0; i < obj.length; i++){
            connection.query(`INSERT INTO crud_version_two (Username, Password, Email, Phone, Name, Surname, Gender, Relantionship_status, Programming_languages, Work_experience, Id) VALUES ('${obj[i].Username}', '${obj[i].Password}', '${obj[i].Email}', '${obj[i].Phone}', '${obj[i].Name}', '${obj[i].Surname}', '${obj[i].Gender}', '${obj[i].Relantionship_status}', '${obj[i].Programming_languages}', '${obj[i].Work_experience}', ${array.length + i + 1})`, function (error, results, fields) {
                if (error) throw error;
                res.end();
                console.log("Пользователь добавлен");
            });    
        }
    }
    
    const arrayDB = connection.query('SELECT * FROM crud_version_two', function (error, results, fields) {
        if (error) throw error;
        let array = results;
        result(results);
    });
});