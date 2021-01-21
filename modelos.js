// Libro 

'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LibroSchema = Schema({
    titulo: String,
    tipo: String,
    autor: {type: Schema.ObjectId, ref: 'Autor'},
    fecha_publicacion: Date,
    descripcion: String
});

module.exports = mongoose.model('Libro', MessageSchema);


// Usuario

'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsuarioSchema = Schema({
    nombre: String,
    e_mail: String,
    password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);


// Autor 

'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AutorSchema = Schema({
    nombre: String,
    sitio_web: String,
    descripcion: String
});

module.exports = mongoose.model('Autor', AutorSchema);


// LibrosGuardados

'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LibrosGuardadosSchema = Schema({
    usuario: {type: Schema.ObjectId, ref: 'Usuario'},
    libro: {type: Schema.ObjectId, ref: 'Libro'}
})

module.exports = mongoose.model('LibrosGuardados', LibrosGuardadosSchema);

