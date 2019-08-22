'use strict';

const sequelize	= require('../database/models').sequelize;
const modelo = require('../database/models');
const status = require('../response/status');

const ObtenerListadoEmpleados = async (req, res) =>{
        
    try {
       await modelo.Empresa.findAll({}).then(result=>{
        const empresas = result.map( empresa => {
			return Object.assign(
				{},
				{
					razonsocial: 	empresa.razonsocial,
					ruc 	   : 	empresa.ruc ,
					email 	   : 	empresa.email,
					direccion  : 	empresa.direccion,
					telefono   : 	empresa.telefono,
					estado     : 	empresa.estado
				});
		});
            return status.okGet(res,'listado de empresas succesfull', empresas);
            
        });
    } catch (error) {
        // se coloca una excepcion
        res.status(500).json(error);
    }

};

const GetEmpleadoPorNombre = async (req, res)=>{
    let empleado = " ";
       
    if(req.body.empleado != undefined || req.body.empleado != null){
        empleado = req.body.empleado;
        }
    try {
        
        await modelo.Empleado.findAll({
            where:{
                $or: [
                    {
                      nombres: {
                        $like: '%'+empleado+'%'
                      }
                    },
                    {
                      apellidos: {
                        $like: '%'+empleado+'%'
                      }
                    }
                  ]
                
            }
        
            
        }).then(result=>{
        
         const empleados = result.map( empleado => {
             return Object.assign(
                 {},
                 {
                    nombres: 	empleado.nombres,
                    apellidos: 	empleado.apellidos,
                    ruc 	   : 	empleado.ruc,
                    email: empleado.email
                 });
         });
     
             return status.okGet(res,'listado de empleados succesfull', empleados);
             
         });
     } catch (error) {
         console.log(error);
         // se coloca una excepcion
         res.status(500).json(error);
     }


};

// const GetStoreProcedureCLientes = async (req, res)=>{
//    // sequelize.query('CALL GetAllClientes()', 

//    let datosClientes={
//     razonsocial:    req.params.razonsocial, 
//     cedula:         req.params.cedula   
//    };
//    console.log("muestra la razon social");
   
//    console.log(datosClientes);
//    let t = inicializarTransaccion();
//     //sequelize.query('EXEC GetClientesParams :razonsocial, :cedula', //SQL SERVER
//     await sequelize.query('CALL GetClientesParams(:razonsocial, :cedula)',  //MySQL
//           {
//             replacements: datosClientes,
//             type: sequelize.QueryTypes.SELECT
//         }).then(result=>{
//             //t.commit();
//             console.log(result);
//             res.status(200).json(result);
//         }).catch(err=>{
//             //t.rolback();
//             console.log(err);
//             res.status(500).json(err);
//             });
        

// }

const CrearNuevoEmpleado = async (req, res)=>{
    let dataEmpleado={
        codigointerno: req.body.codigointerno,
        nombres: req.body.nombres.toUpperCase(),
        apellidos: req.body.apellidos.toUpperCase(),
        ruc: req.body.ruc,
        fecha_nacimiento: req.body.nacimiento,
        email:req.body.email,
        telefono: req.body.telefono,
        password:req.body.password,
        estado:true,
        EmpresaId: req.body.empresa
    };
    let t = await inicializarTransaccion();
    try{
        let result = await modelo.Empleado.CrearEmpleado(dataEmpleado, t);
            
            t.commit();
            return status.okCreate(res,'cliente created successfull', result.get('razonsocial'));
    }catch(err){
        t.rolback();
            return status.error(res,err,'existio un error al crear',false);
    }
    
};


function inicializarTransaccion(){
	return new Promise((resolve, reject) => {
		sequelize.transaction(
      { autocommit: false
      }
    ).then( result => {
			return resolve(result);
		})
		.catch( fail => {
			return reject(fail);
		});
	});
};

// retorno de todas las funciones
return module.exports={
    ObtenerListadoEmpleados,
    GetEmpleadoPorNombre,
    CrearNuevoEmpleado
};