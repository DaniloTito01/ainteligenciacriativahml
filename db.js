var Sequelize  = require('sequelize');



  var sequelize = new Sequelize('heroku_00a65bf38f2d8c4', 'b7c2d4c822cc9a', '72cd6e07', {
      host: 'us-cdbr-east-02.cleardb.com',
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
  
   Cliente.sync({force:true});
  
  

module.exports =Cliente;