const db = require("../database/mysql");
const tbName = `videos`;
module.exports = {
    allvideo: async() => {
        try {
            const sql = `SELECT * FROM ${tbName}`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }
    },
   
    addvideo: async video => {
        const id = await db.add(tbName, video);
        return id;
    },
    delvideo: id => db.del(tbName,id),
    getDetailById: async id => {
        try {
            const sql = `SELECT * FROM ${tbName} WHERE idvideo = '${id}'`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all Pro Id", error);
        }
    },


};