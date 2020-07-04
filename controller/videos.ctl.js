

var mvideo=require('../model/videos')
module.exports = {
    checktrungvideo: async(xxxa) => {
         
        var checklist=[];
        var rows= await mvideo.allvideo();
    let promise = new Promise(async (resolve, reject) => {

        try {
        } catch (error) {
            console.log("ERROR", error);

        }
        resolve(xxxa);
    })

   return promise.then(async (xxxa) => {
        var flat=1;
            for (const i in xxxa )
            {
                for(const j in rows)
                {
                    if(rows[j].idvideo===xxxa[i])
                    {
                        checklist.push(true);
                        flat=0;
                    }
                }
                if(flat===1) checklist.push(false);
                flat=1;
            }
            //console.log(checklist.lenght);
            return checklist
    })
    },
};