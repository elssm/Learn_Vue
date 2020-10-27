var http = require('http');
var urlModule = require('url') //帮我们解析url地址，从而拿到pathname query
http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   const url = request.url
const { pathname:url,query} = urlModule.parse(request.url,true)

  if(url==='/getscript'){
    //   var scriptStr = 'show()'

      var data={
          name:'lisa',
          age:18,
          gender:'girl'
      }
      
      var scriptStr = `${query.callback}(${JSON.stringify(data)})`
      response.end(scriptStr)
  }else{
      response.end('404')
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');