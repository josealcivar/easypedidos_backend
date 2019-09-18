'use strict';

const sequelize	= require('../database/models').sequelize;
const modelo = require('../database/models');
const status = require('../response/status');

const ObtenerListadoMarca = async (req, res) =>{
        let marca = " ";
        if(req.body.marca != undefined || req.body.marca != null){
            marca = req.body.marca;
            }

    try {
       await modelo.Marca.findAll({
           where:{
            descripcion: {
                $like: '%'+marca+'%'
              }
               
           }
       }).then(result=>{
        const marcas = result.map( marca => {
			return Object.assign(
				{},
				{
					descripcion: 	marca.descripcion,
					estado     : 	marca.estado
				});
		});
            return status.okGet(res,'listado de grupos succesfull', marcas);
            
        });
    } catch (error) {
        // se coloca una excepcion
        res.status(500).json(error);
    }

};
 

const CrearNuevaMarca = async (req, res)=>{
    let dataMarca={
        descripcion: req.body.descripcion,
        estado:true
    };
    let t = await inicializarTransaccion();
    try{
        let result = await modelo.Marca.CrearMarca(dataMarca, t);
            console.log("guardo la grupo");
            t.commit();
            return status.okCreate(res,'marca created successfull', result.get('descripcion'));
    }catch(err){
        t.rolback();
            return status.error(res,err,'hubo un error al crear',false);
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
    ObtenerListadoMarca,
    CrearNuevaMarca
};