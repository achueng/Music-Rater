const orm = require("../config/orm");

const album = {
    all: function(cb) {
        orm.all("topAlbums", "album", function(res) {
          cb(res);
        });
      },
      create: function(cols, vals, cb) {
        orm.create("topAlbums", cols, vals, function(res) {
          cb(res);
        });
      }
  };

  module.exports = album;