var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '10.10.102.211',
  port     :'30036',
  user     : 'root',
  password : 'lE34lyMhtP',
  database : 'yanlian2_app_management'
});

connection.connect();

connection.query('SELECT * FROM sys_role', function (error, results, fields) {
  if (error) throw error;
  results.map(item=>{
    console.log('The item is: ', results);
  })
  console.log('The solution is: ', results[0].solution);
});
