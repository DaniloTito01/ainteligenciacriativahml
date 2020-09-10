var Sequelize  = require('sequelize');



  var sequelize = new Sequelize(process.env.DB_BANCO, process.env.DB_NAME, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect:  'mysql' /* one of | 'mariadb' | 'postgres' | 'mssql' */
    });


    

    sequelize.authenticate().then(function(){
      console.log('OK');
    }).catch(function(err){
      console.log('ERRO' + err);
    })
  
    const Cliente = sequelize.define('leads',{
      nome:{
        type : Sequelize.STRING,
      },
      email:{
        type : Sequelize.STRING,
      },
      telefone:{
        type : Sequelize.STRING,
      },
      estado:{
        type : Sequelize.STRING,
      },
      cidade:{
        type : Sequelize.STRING,
      },
      emailbox:{
        type : Sequelize.STRING,
      },
      whatsbox:{
        type : Sequelize.STRING,
      }
    });

    console.log("Passou  aqui Banco")
  
   //Cliente.sync({force:true});
  
  

module.exports =Cliente;