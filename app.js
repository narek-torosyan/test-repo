var fs = require('fs');
var http = require("http");
var server = require("./server.js");
var Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'nar', 'Volo2016!', {
  host: './SQLEXPRESS',
  port: 1433,
  dialect: 'mssql',

//  "dialectOptions": {
// "instanceName": "(localdb)\v11.0"
// },



  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});
var isAuth = sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

//  var sequelize = new Sequelize('VANGUARD_TX_DPB_NEW', 'sa', 'Volo2020V', {
//   host: '10.0.1.73',
//   dialect: 'mssql',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
 
// });

// var isAuth = sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   }, function (err) { 
//     console.log('Unable to connect to the database:', err);
//   });



// fs.stat(__filename, function (err, stat) {
//     var x = stat.isFile();
//     console.log(stat);
// }
// );
// fs.readFile(__filename, { encoding: "utf-8" }, function (err, data) {
//     console.log()
//     console.log(__filename)
//     if (err) {
//         console.log(err);
//     }

//     else {
//         console.log(data);
//     }
// })
