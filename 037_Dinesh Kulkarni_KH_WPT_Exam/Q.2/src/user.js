let mysql = require("mysql");
let Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

let dbinfo = 
{
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"jsdata",
}

async function addmsg(user)
{
    let connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = 'insert into message values(?)';
    await connection.queryAsync(sql,[user.msgs]);

    await connection.endAsync();
    console.log("record added");

}

async function showmsg()
{
    let connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = 'select * from message';
    await connection.queryAsync(sql,[]);

    await connection.endAsync();
    console.log("record show");
}

module.exports = {addmsg,showmsg};