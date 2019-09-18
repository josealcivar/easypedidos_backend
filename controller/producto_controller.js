'use strict';

const sequelize	= require('../database/models').sequelize;
const modelo = require('../database/models');
const status = require('../response/status');

const ObtenerListadoEmpresas = async (req, res) =>{
        
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

const GetSucursalPorEmpresa = async (req, res)=>{
    let empresa = req.params.empresa;
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

const CrearNuevoProducto = async (req, res)=>{
    let dataProducto={
        codigointerno: req.body.codigointerno,
        description: req.body.description,
        destacado:req.body.destacado,
        stock: req.body.stock,
        precio1: req.body.precio1,
        precio2: req.body.precio2,
        precio3: req.body.precio3,
        precio4: req.body.precio4,
        porcentajepromo: req.body.porcentajepromo,
        origen: req.body.origen,
        rutaimagen: req.body.rutaimagen,
        estado:true
    };

    let t = await inicializarTransaccion();
    try{
        let result = await modelo.Producto.CrearProducto(dataProducto, t);
            console.log("guardo la empresa");
            t.commit();
            return status.okCreate(res,'empresa created successfull', result.get('razonsocial'));
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
    ObtenerListadoEmpresas,
    GetSucursalPorEmpresa,
    CrearNuevoProducto
};