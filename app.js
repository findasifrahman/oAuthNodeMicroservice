var app = require('express')();
var passport = require('passport');//require('./config/passport-setup');
var paeesortSetup = require('./config/passport-setup');

app.get('/',(req,res)=>{
    res.send("welcome");
})
app.get('/auth/google/redirect',passport.authenticate('google'),(req,res)=>{
    console.log(req.query);
    res.send("dashboard");
})
app.get('/auth/google',passport.authenticate('google',{
    scope:["profile"]
}))

app.listen(8087, () => {
    console.log(`Server started on port`);
});