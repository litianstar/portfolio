/* 
 * server.js
 * 
 * The main file, to be invoked at the command line. Calls app.js to get 
 * the Express app object.
 */

var app = require('./app').init(4000);

var locals = {
        title: 		 'Node | Express | EJS | Boostrap',
        description: 'A Node.js applicaton bootstrap using Express 3.x, EJS, Twitter Bootstrap, and CSS3',
        author: 	 'C. Aaron Cois, Alexandre Collin',
        _layoutFile: true
    };

app.get('/', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('home.ejs', locals);
});

app.get('/about', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('about.ejs', locals);
});

app.get('/project', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('project.ejs', locals);
});

app.get('/service', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('service.ejs', locals);
});

app.get('/contact', function(req,res){

    locals.date = new Date().toLocaleDateString();

    res.render('contact.ejs', locals);
});

/* The 404 Route (ALWAYS Keep this as the last route) */
app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});