const mysql = require("mysql");
const config = require("../config/default.json");
function createConnection() {
    return mysql.createConnection(config.mysql);
}
exports.load = sql => {
    return new Promise((resole, reject) => {
        const con = createConnection();
        con.connect(err => {
            if (err) {
                reject(err);
            }
        });
        con.query(sql, (error, results, fields) => {
            if (error) {
                reject(error);
            }
            resole(results);
        });
        con.end();
    });
};

exports.loadPIC = sql => {
    return new Promise((resole, reject) => {
        const con = createConnection();
        con.connect(err => {
            if (err) {
                reject(err);
            }
        });
        con.query(sql, (error, results, fields) => {
            if (error) {
                reject(error);
            }
            resole(results.insertId);
        });
        con.end();
    });
};


exports.add = (tbName, entity) => {
    return new Promise((resole, reject) => {
        const con = createConnection();
        con.connect(err => {
            if (err) {
                reject(err);
            }
        });
        const sql = `INSERT INTO ${tbName} SET ?`;
        con.query(sql, entity, (error, results, fields) => {
            if (error) {
                reject(error);
            }
            //console.log(`results: ----`, results);
            resole(results.insertId);
        });
        con.end();
    });
};
exports.mysql = (sql, params) => {
    return new Promise((resole, reject) => {
        //Something that i dont know :)
    });
};

exports.del = (tbName, idField, id) => {
    return new Promise((resole, reject) => {
        const con = createConnection();
        con.connect(err => {
            if (err) {
                reject(err);
            }
        });
        let sql = "DELETE FROM ?? WHERE ?? = ?";
        const params = [tbName, idField, id];
        sql = mysql.format(sql, params);
        con.query(sql, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resole(results.affectedRows);
            }
        });
        con.end();
    });
};

exports.update = (tbName, idField, entity) => {
    return new Promise((resole, reject) => {
        const con = createConnection();
        con.connect(err => {
            if (err) {
                reject(err);
            }
        });
        const id = entity[idField];
        delete entity[idField];
        let sql = `UPDATE ${tbName} SET ? WHERE ${idField} = ${id}`;
        con.query(sql, entity, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resole(results.changedRows);
            }
        });
        con.end();
    });
};

exports.errorHandle = promise => {
    return promise.then(data => [data, undefined]).catch(err => [undefined, err]);
};