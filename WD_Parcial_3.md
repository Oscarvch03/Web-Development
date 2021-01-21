# Parcial 3 Desarrollo Web / 04-12-2020
# Oscar Velasco Ch.


## Punto 1


### Modelo "Libro"
```
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
```

### Modelo "Usuario"
```
'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsuarioSchema = Schema({
    nombre: String,
    e_mail: String,
    password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
```

### Modelo "Autor"
```
'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AutorSchema = Schema({
    nombre: String,
    sitio_web: String,
    descripcion: String
});

module.exports = mongoose.model('Autor', AutorSchema);
```

### Modelo "LibrosGuardados"
```
'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LibrosGuardadosSchema = Schema({
    usuario: {type: Schema.ObjectId, ref: 'Usuario'},
    libro: {type: Schema.ObjectId, ref: 'Libro'}
})

module.exports = mongoose.model('LibrosGuardados',     LibrosGuardadosSchema);
```



## Punto 2

```
let Book = require('../models/book'); 

function updateBook(req, res){ 
    
    if(!req.params.id){ 
        return res.status(500).send({ 
            message: "No se envió el id del libro" 
        }) 
    } 
    
    let bookId = req.params.id; 
    let bookUpdate = req.body; 
    
    Book.update({_id: bookId}, bookUpdate, {new:true}, (err,  bookUpdate) => { 
        if(err){ 
            return res.status(500).send({ 
                message: 'Error en actualización' 
            }) 
        } 
        
        if(!bookUpdate){ 
            return res.status(404).send({
                message: 'El libro no se pudo actualizar correctamente'
            })
        } 
        
        return res.status(200).send({ 
            message: "Se actualizó el libro correctamente"
        }) 
    }) 
}
```


## Punto 3

```
'use strict'

let express = require('express');
let LibroController = require('../controllers/Libro');
const { model } = require('../models/Libro');

let api = express.Router();

api.post('/update', LibroController.updateBook);

module.exports = api;
```


## Punto 4

### Parte [a]

*Modelo*: Representación de los Datos, Registro, Rutas

*Vista*: Interfaz de Usuario 

*Controlador*: Cliente, Intermediario, Callbacks, Eventos, Seguridad

### Parte [b]

5 Mongoose se comunica con la base de datos de mongo para leer, escribir o modificar datos

4 El usuario API envía una solicitud al servidor 

3 El controlador recibe una solicitud

6 El controlador interpreta la solicitud y ejecuta un callback

1 El controlador envía una respuesta

2 La vista se encarga de mostrar la respuesta al usuario en la API


## Punto 5

### Parte [a]
Los middlewares son bloques de código que se ejecutan entre la petición que hace el usuario (request), hasta que la petición llega al servidor. (Como por ejemplo procesos de autenticación)

### Parte [b]
Es importante tener un sistema de autenticación para casos como registro de usuarios, que en los modelos de la base de datos cuenten con el poder registrarse con un username y un password, así mismo como loggearse, así se garantiza una seguridad en el acceso y ejecución de las apps.