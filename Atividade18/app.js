let express = require('express');
let texto = require('./modulo1');//não colocar modulo1.js ele já
let app=express(); // executando o express  
app.set('view engine', 'ejs');
app.get('/', function(req,res){
    res.render("home/index")
});
app.get('/formulario_adicionar_usuario', function(req,res){
    res.render("admin/adicionar_usuario");
})
app.get('/informacao/historia', function(req,res){
    res.render("informacao/historia")
});
app.get('/informacao/cursos', function(req,res){
    res.render("informacao/cursos")
});
app.get('/informacao/professores', function(req,res){
    res.render("informacao/professores")
});
app.get('/', function(req,res){
    res.send("<html><body>Site da Fatec Sorocaba</body></html>");
});

app.get('/historia', function(rea,res){
    res.send("<html><body>História da Fatec Sorocaba</body></html>");
});
app.get('/cursos', function(reg,res){
    res.send("<html><body>Cursos da Fatec Sorocaba</body></html>");
});

app.get('/professores', function(req,res){
    res.send("<html><body>Professores da Fatec Sorocaba</body></html>");
});

app.listen(3000, function(){
    console.log(texto);
});