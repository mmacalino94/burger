var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.all("burgers", function(res)  {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res)  {
            cb(res);
        });
    },

    updateOne: function(cb) {
        orm.updateOne("burgers", objColVals, condition, function(res)  {
            cb(res);
        });
    },

    delete: function(cb) {
        orm.delete("burgers", condition, function(res)  {
            cb(res);
        });
    }
};

module.exports = burger;
