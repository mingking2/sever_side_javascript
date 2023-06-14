var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
    secret: '24535436543@##$@!',
    resave: false,
    saveUninitialized: true
}));
app.get('/count', function(req, res) {
    if(req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send('count : ' + req.session.count);
});

app.get('/auth/login', function(req, res) {
    var output = `
    <form>
        <p>
            <input type='text' name='id' placeholder='username'>
        </p>
        <p>
            <input type='password' name='password' placeholder='password'>
        </p>
        <p>
            <input type='submit'>
        </p>
    </form>
    `;
    res.send(output);
});

app.listen(3003, function(){
    console.log('Connected 3003 port!!!');
});
