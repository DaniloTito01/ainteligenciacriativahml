var express = require('express')

const app = express();
const cors = require('cors')

const path = require('path')
const PORT = process.env.PORT || 5000
app.use(cors())


// const banco =  require('./db');
 const Cliente = require('./db');



// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
  
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))




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
       
        // email: '',
        // telefone: '',
        // estado: '',
        // cidade: '',
        // whatsapp: '',
        // emailbox: ''




app.use(express.json());



app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//   .get('/', (req, res) => res.render('pages/index'))
app.get("/", (req, res) =>{
    res.render('pages/index.ejs');

   
});

app.post("/", (req, res ) =>{
   
  
 res.send("OK");





 dadoss =  req.body;

 name = dadoss.dados.nome;
 email1 = dadoss.dados.email;
 console.log(name);


 if(!name==''){
    console.log("Passou " +  dadoss.dados.email + dadoss.dados.nome  );

    // Cliente.create({
  
  
    //   nome:dadoss.dados.nome,
    //   email:dadoss.dados.email,
    //   telefone:dadoss.dados.telefone,
    //   estado:dadoss.dados.estado,      
    //   cidade:dadoss.dados.cidade,
    //   emailbox:dadoss.dados.emailbox,
    //   whatsbox:dadoss.dados.whatsappBox
    
    
    //  })
   
    // banco.gravarBanco(dadoss.dados.nome,dadoss.dados.email,dadoss.dados.telefone,dadoss.dados.estado,dadoss.dados.cidade,dadoss.dados.whatsappBox,dadoss.dados.emailbox);

 
    email(dadoss.dados.nome,dadoss.dados.email,dadoss.dados.telefone,dadoss.dados.estado,dadoss.dados.cidade,dadoss.dados.whatsappBox,dadoss.dados.emailbox);

 }
 console.log(dadoss + "DATA" + dia + "/0" + mes +"/" + ano4  +"Horas" + hora +":" + min);


  

});



app.listen(PORT ,() => {
    console.log("API Start");

})





function email(nome,email1,telefone,estado,cidade,whatsappBox,emailbox){

//dadosEmail.nome =dadoss.dados.nome;

     // 0-59


    const nodemailer = require('nodemailer');
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'atendimento@ainteligenciacriativa.com.br',
            pass: 'V123asd456@'
        }
    });
    

   
transporter.sendMail({
    from: '"A Inteligência Criativa" <atendimento@ainteligenciacriativa.com.br>', // sender address
    to: 'danilo.tito@conninf.com.br',// list of receivers
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
    // +'<br> <b>Data:  </b>' + dia + "/0" + mes +"/" + ano4      
    // +'<br> <b>Hora: </b>'  + hora +":" +min     
    

}).then(messge =>{
  console.log(messge);
  console.log("sdsdsds");
}).catch(err =>{
console.log(err)
console.log("Erro");
})


}

