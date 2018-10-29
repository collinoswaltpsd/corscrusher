var proxy = require('express-http-proxy');
var app = require('express')();
 
app.use('/index.cfm*', proxy('www.google.com'));
app.use('*', proxy("www.microsoft.com"));
app.listen(3000, () => console.log(`Example app listening on port 3000!`))
