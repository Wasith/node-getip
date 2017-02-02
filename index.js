var express = require('express');
var ipGetter = require('./getIP');
var fs = require('fs');
var uuidV4 = require('uuid/v4');
// var uuid = require('./getUUID');
var PORT = 3000;
	
var app = express();
app.get('/', function (req, res) {
	  var ip = ipGetter.getServerIp();
	  // var id = uuid.getUuid();
	  const path = './uuid.txt';
	  fs.readFile(path, 'utf8', function (err, data) {
		  if (data == undefined) {
			  const id = uuidV4();
			  fs.writeFile (path, id, function(err) {
 			  	if (err) throw err;
			   	res.send('Hello, world! \nMy IP = ' + ip + "\nUUID = " + id + "\n");
			  });
		  } else {
			  res.send('Hello, world! \nMy IP = ' + ip + "\nUUID = " + data + "\n");
		  }
        return data;
      });
});
	
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);