// const { release } = require("os");
const { Pool } = require("pg");
//Este archivo contiene los codigos javascript para el CRUD

const config = {
    user: "postgres",
    host: "localhost",
    database: "colegio",
    password: "13991987Ft",
    port: 5432,
    max: 20,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000,
    };
const pool = new Pool(config);


const ingresar=(arr)=>{
    try{
    pool.connect(async (error_conexion, client, release) => {
        if(error_conexion) return console.error(`ERROR DE CONEXIÓN : ${error_conexion}`)
        const SQLQuery = {
        name: 'insercion',
        rowMode: 'array',
        text: "INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *;",
        values: arr
        };
        const res = await client.query(SQLQuery);
        release();
        console.log(`Estudiante ${res.rows[0][1]} agregado con éxito`);
        console.log(res.rows);
        pool.end();
        });
    }catch(e){
        console.log(`ERROR EN LA INSERCIÓN :${e}`)
    }
}


async function consultar(){
    try{
        pool.connect(async (error_conexion, client, release) => {
            if(error_conexion) return console.error(`ERROR DE CONEXIÓN : ${error_conexion}`)
            const SQLQuery = {
            name: 'Consultar_todos',
            rowMode: 'array',
            text: "SELECT * FROM alumnos;",
            };
            const res = await client.query(SQLQuery);
            release();
            console.log('Consulta satisfactoria')
            console.log('------------------------')
            console.log(res.rows);
            pool.end();
            });
        }catch(e){
            console.log(`ERROR EN LA CONSULTA :${e}`)
        }
    }

async function editar(arr){
    try{
        pool.connect(async (error_conexion, client, release) => {
            if(error_conexion) return console.error(`ERROR DE CONEXIÓN : ${error_conexion}`)
            const SQLQuery = {
            name: 'editar',
            rowMode: 'array',
            text: "UPDATE alumnos SET nombre = $1, curso=$3, nivel=$4 WHERE rut = $2 RETURNING *;",
            values: arr
            };
            const res = await client.query(SQLQuery);
            release();
            console.log(res.rows);
            console.log(res.rowCount + " registro afectado")
            console.log(`Estudiante ${res.rows[0][1]} editado con exito`);
            pool.end();
            });
        }catch(e){
            console.log(`ERROR EN LA EDICIÓN :${e}`)
        }
};
async function consultaXrut(xRut){
    try{
        pool.connect(async (error_conexion, client, release) => {
            if(error_conexion) return console.error(`ERROR DE CONEXIÓN : ${error_conexion}`)
            const SQLQuery = {
            name: 'consultaXrut',
            rowMode: 'array',
            text: "SELECT * FROM alumnos WHERE rut= $1;",
            values: [xRut]
            };
            const res = await client.query(SQLQuery);
            release();
            console.log('Consulta satisfactoria')
            console.log('------------------------')
            console.log(res.rows);
            pool.end();
            });
        }catch(e){
            console.log(`ERROR EN LA CONSULTA :${e}`)
        }

};
async function eliminar(xRut){
    try{
        pool.connect(async (error_conexion, client, release) => {
            if(error_conexion) return console.error(`ERROR DE CONEXIÓN : ${error_conexion}`)
            const SQLQuery = {
            name: 'eliminar',
            rowMode: 'array',
            text: "DELETE FROM alumnos WHERE rut= $1;",
            values: [xRut]
            };
            const res = await client.query(SQLQuery);
            release();
            console.log('Consulta satisfactoria')
            console.log('------------------------')
            console.log(res.rowCount + " registros afectados")
            console.log(`Registro de estudiante con rut ${xRut} fue eliminado de la base de datos`)
            pool.end();
            });
        }catch(e){
            console.log('No se puedo completar la operacion de eliminación de la base de datos')
            console.log(`ERROR EN LA CONSULTA :${e}`)
        }
}
module.exports={ingresar, consultar, editar, consultaXrut, eliminar}