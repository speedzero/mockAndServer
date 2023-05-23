var http = require("http");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '10.10.102.211',
  port     :'30036',
  user     : 'root',
  password : 'lE34lyMhtP',
  database : 'yanlian2_app_management'
});
connection.connect();
function getRole(callback){
  var res = ''
  connection.query('SELECT * FROM sys_role', function (error, results, fields) {
    if (error) throw error;
    var datas = results.map(item=>{
      // console.log('The item is: ', results);
      return item
    })
    console.log('The solution is: ', results[0]);
    console.log('The datas is: ', datas[0]);
    res = {
      code:'1',
      msg:'接口信息',
      data:datas
    }
    callback.writeHead(200, {'Content-Type': 'application/json;charset=utf8'});
    callback.end(JSON.stringify(res));
  });

  return  res;
}
http.createServer( function (request, response){
  const url = request.url
  console.log("url->",url)
  if (url === '/getRole'){
    console.log("/getRole",url)
    const roles =  getRole(response)
    console.log("/getRole",roles)

  }

}).listen(8888,'10.10.134.173')

console.log('Server running at http://10.10.134.173:8888/');


