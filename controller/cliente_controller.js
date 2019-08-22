'use strict';

const sequelize	= require('../database/models').sequelize;
const modelo = require('../database/models');
const status = require('../response/status');
// const Op = sequelize.Op;


const ObtenerTodosLosClientes = async (req, res) =>{
     
try {
   await modelo.Cliente.findAll(
   {}
   ).then(result=>{
    const clientes = result.map( cliente => {
        return Object.assign(
            {},
            {
                razonsocial: 	cliente.razonsocial,
                ruc 	   : 	cliente.ruc,
                email 	   : 	cliente.email,
                direccion  : 	cliente.direccion,
                telefono   : 	cliente.telefono,
                estado     : 	cliente.estado
            });
    });
        return status.okGet(res,'listado completo de clientes succesfull', clientes);
        
    });
} catch (error) {
    // se coloca una excepcion
    console.log(error);
    res.status(500).json(error);
}

};

const ObtenerListadoClientes = async (req, res) =>{
    let ll_cliente="";    
    if(req.body.cliente != undefined || req.body.cliente != null){
            ll_cliente = req.body.cliente;
        }
        console.log("debe traer los datos");
        console.log(req.body);
    try {
       await modelo.Cliente.findAll(
        { where: 
            { razonsocial: 
                { $like: '%'+ll_cliente+'%' } 
            } 
        }

       ).then(result=>{
        const clientes = result.map( cliente => {
			return Object.assign(
				{},
				{
					razonsocial: 	cliente.razonsocial,
					ruc 	   : 	cliente.ruc,
					email 	   : 	cliente.email,
					direccion  : 	cliente.direccion,
					telefono   : 	cliente.telefono,
					estado     : 	cliente.estado
				});
		});
            return status.okGet(res,'listado de clientes succesfull', clientes);
            
        });
    } catch (error) {
        // se coloca una excepcion
        console.log(error);
        res.status(500).json(error);
    }

};

const GetSucursalPorEmpresa = async (req, res)=>{
    let empresa = req.body.empresa;
    console.log(empresa);
    try {
        
        await modelo.Sucursal.findAll({
            where:{
                EmpresaId:empresa
            },
            include:[
                {
                    model: modelo.Empresa
                }
            ]
        }).then(result=>{
        
         const empresas = result.map( empresa => {
             return Object.assign(
                 {},
                 {
                     
                    empresa: 	empresa.Empresa.razonsocial,
                    ruc 	   : 	empresa.Empresa.ruc ,
                     sucursal: 	empresa.nombre,
                     direccion: empresa.direccion,
                     telefono: empresa.telefono,
                     celular: empresa.celular,
                     representante: empresa.representante
                     
                 });
         });
     
             return status.okGet(res,'listado de empresas succesfull', empresas);
             
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

const CrearNuevoCliente = async (req, res)=>{
    let dataCliente={
        codigointerno: req.body.codigointerno,
        razonsocial: req.body.razonsocial,
        ruc: req.body.ruc,
        email:req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        tipoprecio:req.body.tipoprecio,
        estado:true,
        EmpresaId: req.body.empresa
    };
    let t = await inicializarTransaccion();
    try{
        let result = await modelo.Cliente.CrearCliente(dataCliente, t);
            
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
    ObtenerTodosLosClientes,
    ObtenerListadoClientes,
    GetSucursalPorEmpresa,
    CrearNuevoCliente
};