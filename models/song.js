const orm = require("../config/orm");

const song = {
    all: function(cb) {
        orm.all("topSongs", "song", function(res) {
          cb(res);
        });
      },
      create: function(cols, vals, cb) {
        orm.create("topSongs", cols, vals, function(res) {
          cb(res);
        });
      }
};

module.exports = song;