const express = require("express");
const session = require('express-session');
const flash = require('express-flash');
const app = express ();
const port = 8000;
const router = require('./routers');
const passport = require('./lib/passport');





app.use(express.json());
app.use(express.urlencoded({extended:false}));

///use session
app.use(session({
    secret: 'rahasia',
    resave: false,
    saveUninitialized: false
}))


///use flash
app.use(flash());
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine','ejs');

app.use('/', router);

app.listen(port, () => console.log(`running at port ${port}`))