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
    getdetailByDateNow: async ()=> {
        try {
            var nowdate=getdatenow();
            const sql = `SELECT * FROM ${tbName} WHERE (dateexport = '${nowdate}' or dateexport > '${nowdate-10}') and((videosname like N'%ona%')or(videosname like N'%ovid %')or(videosname like N'%OVID %')or(videosname like N'%ONA %') )`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all Pro Id", error);
        }
    },
    getvideoThanhNien: async ()=> {
        try {
            var nowdate=getdatenow();
            const sql = `SELECT * FROM ${tbName} WHERE (dateexport > '${nowdate-4}') and idchannel='UCIW9cGgoRuGJnky3K3tbzNg'`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all Pro Id", error);
        }
    },
    getvideoTuoiTre: async ()=> {
        try {
            var nowdate=getdatenow();
            const sql = `SELECT * FROM ${tbName} WHERE (dateexport > '${nowdate-4}') and idchannel='UC47WI-kZXFf0H_f7pvaNCEQ'`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all Pro Id", error);
        }
    },
    getvideoNewlastaste: async ()=> {
        try {
            var nowdate=getdatenow();
            const sql = `SELECT * FROM ${tbName} WHERE (dateexport > '${nowdate-3}')`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all Pro Id", error);
        }
    },
    updatelike: async (id,like)=> {
        try {
            var nowdate=getdatenow();
            const sql = `UPDATE videos SET videos.like=${like} where id=${id}`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all Pro Id", error);
        }
    },
    updateview: async (id,view)=> {
        try {
            var nowdate=getdatenow();
            const sql = `UPDATE videos SET videos.views=${view} where id=${id}`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all Pro Id", error);
        }
    },
    getvideoAdmin: async ()=> {
        try {
            var nowdate=getdatenow();
            const sql = `SELECT * FROM ${tbName} WHERE (dateexport > '${nowdate-3}')`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all Pro Id", error);
        }
    },

};
function getdatenow() {
    var today = new Date();
    var datetemp;
    if (Number(today.getMonth()) >= 10 && Number(today.getDate()) >= 10)
        datetemp = today.getFullYear() + (today.getMonth() + 1) + today.getDate();
    if (Number(today.getMonth()) < 10 && Number(today.getDate()) > 10)
        datetemp = today.getFullYear() + '0' + (today.getMonth() + 1) + today.getDate();
    if (Number(today.getMonth()) >= 10 && Number(today.getDate()) < 10)
        datetemp = today.getFullYear() + (today.getMonth() + 1) + '0' + today.getDate();
    if (Number(today.getMonth()) < 10 && Number(today.getDate()) < 10)
        datetemp = today.getFullYear() + '0' + (today.getMonth() + 1) + '0' + today.getDate();
    return datetemp;
}