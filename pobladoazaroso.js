const { Client } = require('pg');
//ESte codigo es solo para desarrollo. automaticamente ingresa usuarios a la base de datos segun e valor de la variable CantidadDeUsuarios

let cantidadDeUsuarios = 20;
let names=['pepito', 'juanito', 'pedro', 'juan', 'diego','susy', 'peppa', 'dany','george', 'goku', 'chanchito feliz', 'jerónimo sola', 'cuchujero', 'krilin', 'rochi', 'papelucho', 'Seiya', 'Piccoro','El chanfle', 'Chespirito', 'El chapulin colorado', 'Don ramón', 'Homero Simpson', 'Chuck Norris', 'Jack Sparrow']
let cursos=['javascript', 'Guitarra', 'flamenco', 'Electricidad','Postgres', 'Node.js', 'GO', 'JAVA', 'Sicariato', 'Terminator', 'Karate', 'Física cuántica','jiu jitsu', 'Sabotaje', 'Ciberseguridad', 'Pentesting', 'Ethical hacking']

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};


let usersTable=[...new Array(cantidadDeUsuarios)].map((_, index)=>{
    let obj={
        id: index+1,
        nombre: names[random(0,(names.length-1))],
        rut: `${random(9, 28)}.${random(100,999)}.${random(100,999)}-${random(0,9)}`,
        curso: `${cursos[random(0,(cursos.length-1))]}`,
        nivel: `${random(0,10)}`
    }
    return obj
});



let arrconsultas=[]
usersTable.forEach(el=>{
  arrconsultas.push(`insert into alumnos (id, nombre, rut, curso, nivel) values ('${el.id}','${el.nombre}', '${el.rut}', '${el.curso}', '${el.nivel}') RETURNING *;`)
})

const config = {
    user: "postgres",
    host: "localhost",
    database: "colegio",
    password: "13991987Ft",
    port: 5432,
    };

const client = new Client(config);
client.connect();

arrconsultas.forEach(async el=>{
    const res = await client.query(el);
    console.log(...res.rows);
    console.log(res.rowCount)
})
setTimeout(()=>{
    client.end();
},3000)
