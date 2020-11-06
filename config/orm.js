const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }
var orm = {
    allSongs: function(cb) {
        // var queryString = "SELECT * FROM " + tableInput + ";";
        var queryString = `SELECT song, artist, album, COUNT(*) FROM topSongs GROUP BY song HAVING COUNT(*) >= 1 ORDER BY COUNT(*) DESC;`
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      allArtists: function(cb) {
        // var queryString = "SELECT * FROM " + tableInput + ";";
        var queryString = `SELECT artist, COUNT(*) FROM topArtists GROUP BY artist HAVING COUNT(*) >= 1 ORDER BY COUNT(*) DESC;`
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      allAlbums: function(cb) {
        // var queryString = "SELECT * FROM " + tableInput + ";";
        var queryString = `SELECT album, artist, COUNT(*) FROM topAlbums GROUP BY album HAVING COUNT(*) >= 1 ORDER BY COUNT(*) DESC;`
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
      
};

module.exports = orm;