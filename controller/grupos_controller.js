'use strict';

const sequelize	= require('../database/models').sequelize;
const modelo = require('../database/models');
const status = require('../response/status');

const ObtenerListadoGrupos = async (req, res) =>{
        let grupo = " ";
        if(req.body.grupo != undefined || req.body.grupo != null){
            grupo = req.body.grupo;
            }

    try {
       await modelo.Grupo.findAll({
           where:{
            descripcion: {
                $like: '%'+grupo+'%'
              }
               
           }
       }).then(result=>{
        const grupos = result.map( grupo => {
			return Object.assign(
				{},
				{
					descripcion: 	grupo.descripcion,
					estado     : 	grupo.estado
				});
		});
            return status.okGet(res,'listado de grupos succesfull', grupos);
            
        });
    } catch (error) {
        // se coloca una excepcion
        res.status(500).json(error);
    }

};
 

const CrearNuevoGrupo = async (req, res)=>{
    let dataGrupo={
        descripcion: req.body.descripcion,
        estado:true
    };
    let t = await inicializarTransaccion();
    try{
        let result = await modelo.Grupo.CrearGrupo(dataGrupo, t);
            console.log("guardo la grupo");
            t.commit();
            return status.okCreate(res,'grupo created successfull', result.get('descripcion'));
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
    ObtenerListadoGrupos,
    CrearNuevoGrupo
};