var ytpl = require('ytpl');

module.exports = {
  infoplaylist: async idplaylist => {

    let promise = new Promise(async (resolve, reject) => {
      let arraysplaylist = [];
      await ytpl(idplaylist, function(err, playlist) {
        if(err) {console.log("err get play list"); throw err};
        var pla=playlist.items;
        for (const i in pla) {
          arraysplaylist.push(pla[i].id);
        }
       resolve(arraysplaylist)
      });
    });
    return promise.then((playlist) => {
      //console.log(playlist);
      return playlist;
    });
  },

}


