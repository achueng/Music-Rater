const orm = require("../config/orm");

const record = {
    all: function(cb) {
        orm.all("records", function(res) {
          cb(res);
        });
      },
      create: function(cols, vals, cb) {
        orm.create("records", cols, vals, function(res) {
          cb(res);
        });
      }
};

module.exports = record;