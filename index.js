//Importamos los paquetes que requerimos
const express = require ('express');
const hbs = require('hbs');

//Creamos la aplicacion
const app = express ();

//Definimos el motor de plantillas
//Vamos a comenzar a emplear MVC
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials')

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//Configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/cabanel', (req, res)=>{
    res.render('cabanel', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Alexandre Cabanel'
    });
});

app.get('/gerome', (req, res)=>{
    res.render('gerome', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Jean-León Gerome'
    });
});

app.get('/rousseau', (req, res)=>{
    res.render('rosseau', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Henri Roussau'
    });
});

app.get('/brueghel', (req, res)=>{
    res.render('brueghel', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Pieter Brueghel'
    });
});

app.get('/contact', (req, res)=>{
    res.render('contact', {
        autor : 'America Gonzalez',
        year : new Date().getFullYear(),
        title : 'Contacto'
    });
});

//Arrancamos el servidor web
app.listen(8080, ()=>{
    console.log("Escuchando el puerto 8080")
});
