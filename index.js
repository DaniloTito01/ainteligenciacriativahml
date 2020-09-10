var express = require('express')

const app = express();
const cors = require('cors')

const path = require('path')
const PORT = process.env.PORT || 5000
app.use(cors())
require('dotenv/config');

 const Cliente = require('./db');





var data = new Date();
var dia     = data.getDate();           // 1-31
var mes     = 1 +data.getMonth();          // 0-11 (zero=janeiro) 
var ano4    = data.getFullYear();  
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();   




console.log(process.env.CLEARDB_DATABASE_URL);





var dadoss = 
    {
        nome: '',
        email: '',
        telefone: '',
        estado: '',
        cidade: '',
        whatsapp: '',
        emailbox: ''
}


const  nome= ''
       




app.use(express.json());



app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get("/", (req, res) =>{res.render('pages/index.ejs')});



app.post("/", (req, res ) =>{
   
  
 res.send("OK");





 dadoss =  req.body;

 name = dadoss.dados.nome;
 email1 = dadoss.dados.email;
 console.log(name);


 if(!name==''){

    email(dadoss.dados.nome,dadoss.dados.email,dadoss.dados.telefone,
        dadoss.dados.estado,dadoss.dados.cidade,dadoss.dados.whatsappBox,dadoss.dados.emailbox);

   
    Cliente.create({
  
  
      nome:dadoss.dados.nome,
      email:dadoss.dados.email,
      telefone:dadoss.dados.telefone,
      estado:dadoss.dados.estado,      
      cidade:dadoss.dados.cidade,
      emailbox:dadoss.dados.emailbox,
      whatsbox:dadoss.dados.whatsappBox
    
   
     })
     console.log("Passou  aqui")
  
 

 }});



app.listen(PORT ,() => {
    console.log("API Start HML");

})





function email(nome,email1,telefone,estado,cidade,whatsappBox,emailbox){

    var data = new Date();
    var dia     = data.getDate();           // 1-31
    var mes     = 1 +data.getMonth();          // 0-11 (zero=janeiro) 
    var ano4    = data.getFullYear();  
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();   
  
  
  
      const nodemailer = require('nodemailer');
      
      let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: process.env.NODE_USER,   
              pass: process.env.NODE_PASS        
  
  
          }
      });
      
  
     
  transporter.sendMail({
      from: '"A Inteligência Criativa" + process.env.NODE_USER', // sender address
      to:process.env.NODE_TO ,// list of receivers
      subject:'Lead: '+ email1, // Subject line
      text: "Teste", //'Data:13/08/2020 Nome :  Danilo  , E-mail: danilo.tito@hotmail.com , Telefone: (11)  7070-7070 ,Estado: São Paulo, Cidade : São Paulo  ', // plain text body
      html: '<h1>Lead </h1>'   
      +'<br> <b>Nome: </b>'   + nome     
      +'<br> <b>Email: </b>' + email1          
      +'<br> <b>Telefone: </b>' + telefone          
      +'<br> <b>Estado: </b>' + estado          
      +'<br> <b>Cidade: </b>'+ cidade       
      +'<br> <b>Receber por Whatsapp: </b>' + whatsappBox           
      +'<br> <b>Receber por Email: </b>' + emailbox      
       +'<br> <b>Data:  </b>' + dia + "/0" + mes +"/" + ano4      
      +'<br> <b>Hora: </b>'  +(hora -3 ) +":" +min     
      
  
  }).then(messge =>{
    console.log(messge);
    console.log("sdsdsds");
  }).catch(err =>{
  console.log(err)
  console.log("Erro");
  })
  
  
  }
  
