//Desaio Always Music 2.0
const {ingresar, consultar, editar, consultaXrut, eliminar}=require('./consultas.js')
//Nuevo estudiante: ejecutar ==> node index.js nuevo 'Brian May' '12.345.678-9' guitarra 7
//Consulta: ejecutar ==> node index.js consulta'
//Editar estudiante: ejecutar ==> node index.js editar 'Brian May' '12.345.678-9' guitarra 10
//Consultar por rut: ejecutar ==> node index.js rut '12.345.678-9'
//Eliminar registro de estudiante: ejecutar ==> node index.js eliminar '12.345.678-9'

//SE PUEDE UTILIZAR node pobladoazaroso.js PARA CARGAR AUTOMATICAMENTE LA BASE DE DATOS 'colegio' EN POSTGRES

let op=process.argv[2]
    if(op=='nuevo'){  
        let reg=process.argv.slice(3)
        ingresar(reg);
    
    }else if(op=='consulta'){
        consultar();
    
    }else if(op=='editar'){
        let reg=process.argv.slice(3)
        editar(reg)
    
    }else if(op=='rut'){
        let reg=process.argv.slice(3)[0]
        consultaXrut(reg)

    }else if(op=='eliminar'){
        let reg=process.argv.slice(3)[0]
        eliminar(reg)
    
    }else{
    console.log('opcion no valida. Inténtelo denuevo')    
    }