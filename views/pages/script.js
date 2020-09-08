
window.addEventListener('load', start);



var inputNome = null;
var inputEmail = null;
var inputBotao = null;


var nome = null;



const dados = {

    "nome": "",
    "email": "",
    "telefone": "",
    "estado": "",
    "cidade": "",
    "whatsappBox":"SIM",
    "emailbox":  "NÂO"
}


const dadosValidacao = {

    "nome": "",
    "email": "",
    "telefone": "",
    "estado": "",
    "cidade": "",
}



function start() {
    inputNome = document.querySelector('#inputNome');
    inputEmail = document.querySelector('#inputEmail');
    inputTelefone = document.querySelector('#inputTelefone');
    inputEstado = document.querySelector('#inputEstado');
    inputCidade = document.querySelector('#inputCidade');
    whatsappBox = document.querySelector('#whatsappBox');
    emailBox = document.querySelector('#emailBox');

    


    inputBotao = document.querySelector('#enviarForm');

    formCarrega();
    activeInputNome();


    onclick();

}


function formCarrega() {

    function formSubmit(event) {
        event.preventDefault();
        onclick();

    }


    var form = document.querySelector('form');
    form.addEventListener('submit', formSubmit);
}


function activeInputNome() {

    function campoDgt(event) {

       


        if (event.target.className === 'inputNome') {
           
          
                if (event.key == 'Enter' ) {

                
                  if(event.target.value=="" || event.target.value.length < 6){
                    alert( "Preencha campo NOME corretamente!" );
                    inputNome.focus();
                    return false;
        

                 }  else{ 
                     dadosValidacao.nome ='OK';
                    inputEmail.focus();
                
                }
                    
                }
             

          
        }


        if (event.target.className === 'inputEmail') {
     
            validacaoNome();

                if (event.key == 'Enter') {

                    if(event.target.value=="" || event.target.value.indexOf('@')==-1
                    || event.target.value.indexOf('.')==-1
                    
                    
                    ){
                        alert( "Preencha campo E-MAIL corretamente! " );
                        inputEmail.focus();    
                        return false;

                    }else{

                        dadosValidacao.email ='OK';
                        inputTelefone.focus();
                      
        
                    }    

                }
   
        }


        if (event.target.className === 'inputTelefone') {

            validaEmail();


            if (event.key == 'Enter') {

                if(event.target.value=="" || event.target.value.length < 11){
                   
                    alert( "Preencha campo Telefone corretamente!" );
                    inputTelefone.focus();
                    return false;
                }else{

                    dadosValidacao.telefone ='OK';
                    inputEstado.focus();
                 
                }
          


            }
        }

        if (event.target.className === 'inputEstado') {

           
            validaTelefone();

            if (event.key == 'Enter') {

                if(event.target.value=="" || event.target.value.length < 3){
                   
                    alert( "Preencha campo Estado corretamente!" );
                    inputEstado.focus();
                    return false;
                }else{

                    dadosValidacao.estado ='OK';
                    inputCidade.focus();
                 

                }



              

            }
        }

        if (event.target.className === 'inputCidade') {

            validaEstado();


            if (event.key == 'Enter') {
                validaCidade();
               
                if(event.target.value=="" || event.target.value.length < 3){
                   
                    alert( "Preencha campo  Cidade corretamente!" );
                    inputCidade.focus();
                    return false;
                }else{
                    dadosValidacao.cidade ='OK';

                   
                }

            }
        }

        if (event.target.className === 'whatsappBox') {

            if (event.target.checked == true) {

                emailBox1 = document.querySelector('#emailBox').checked = false
                dados.emailbox = 'NÂO';
                dados.whatsappBox = 'SIM';
                console.log(dados.whatsappBox);

            }else{
                dados.whatsappBox = 'NÂO';
            }

            
        }

        if (event.target.className === 'emailBox') {

            if (event.target.checked == true) {

                whatsappBox1 = document.querySelector('#whatsappBox').checked =false;
                dados.whatsappBox ="NÂO"
                dados.emailbox = 'SIM';
                console.log(dados.emailbox);

            } else{
                dados.emailbox = 'NÂO';

            }
        
        }



    }

    inputNome.focus();
    inputNome.addEventListener('keyup', campoDgt);

    inputEmail.addEventListener('keyup', campoDgt);
    inputEmail.addEventListener('click', campoDgt);

  
    
    inputTelefone.addEventListener('keyup', campoDgt);
    inputTelefone.addEventListener('click', campoDgt);

    inputEstado.addEventListener('keyup', campoDgt);
    inputEstado.addEventListener('click', campoDgt);

    inputCidade.addEventListener('keyup', campoDgt);
    inputCidade.addEventListener('click', campoDgt);


     whatsappBox.addEventListener('click', campoDgt);
     emailBox.addEventListener('click', campoDgt);


};





function validacaoNome(){

    NomeV = document.querySelector('#inputNome').value;

      

    if( NomeV=="" || NomeV.length < 6){


        alert( "Preencha campo NOME corretamente!" );
        inputNome.focus();
        return false;

    }else{

        dadosValidacao.nome ='OK';
    }
  


}




function validaEmail(){



    EmailV = document.querySelector('#inputEmail').value;

    if(EmailV=="" || EmailV.indexOf('@')==-1
    || EmailV.indexOf('.')==-1
    
    
    ){
        alert( "Preencha campo E-MAIL corretamente!! " );
        inputEmail.focus();    
        return false;

    }else{

        dadosValidacao.email ='OK';
    }
  


}



function validaTelefone(){

    TelefoneV = document.querySelector('#inputTelefone').value;

    if(TelefoneV=="" ||  TelefoneV.length < 11){
                   
        alert( "Preencha campo Telefone corretamente!" );
        inputTelefone.focus();
        return false;
    }else{

        dadosValidacao.telefone ='OK';
    }
  

}


function validaEstado(){

    EstadoV = document.querySelector('#inputEstado').value;

    if(EstadoV=="" ||  EstadoV.length < 3){
                   
        alert( "Preencha campo Estado corretamente!" );
        inputEstado.focus();
        return false;
    }else{

        dadosValidacao.estado ='OK';
    }
  

}

function validaCidade(){

    cidadeV = document.querySelector('#inputCidade').value;

    if(cidadeV=="" ||  cidadeV.length < 3){
                   
        alert( "Preencha campo Cidade corretamente!" );
        inputCidade.focus();
        return false;
    }else{

        dadosValidacao.cidade='OK';
    }
  

}




// function activeInputEmail() {
//     function campoEmail(event) {



//         if (event.key == 'Enter') {

//             activeInputEmail();


//         }

//         dados.email = (event.target.value);

//     }

//     inputEmail.focus();
//     inputEmail.addEventListener('keyup', campoEmail);
// };



function onclick() {

    function botao(event) {

        // dados.nome = name;
        if (event.target.className == 'button'){

           
            dados.nome = document.querySelector('#inputNome').value;
            dados.email= document.querySelector('#inputEmail').value;
            dados.telefone= document.querySelector('#inputTelefone').value;
            dados.estado = document.querySelector('#inputEstado').value;
             dados.cidade= document.querySelector('#inputCidade').value;
    // whatsappBox = document.querySelector('#whatsappBox').value;
    // emailBox = document.querySelector('#emailBox').value;
           
    console.log(dadosValidacao);
      validaCidade();

       validacaoCampo() 
        


        // post_to_url();
         
     

 }
          
 
   
 async function postEmeil(){


const  dadosEnvio =JSON.stringify({dados})

console.log(dadosEnvio);
const myRequest = await new Request('http://www.ainteligenciacriativa.com.br:3000/' ,
{method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},  body:dadosEnvio});

const myURL = await myRequest.url;
const myMathod =await myRequest.method;
const myCred =await myRequest.credentials;
const bodyUserd =await myRequest.bodyUsed;





fetch(myRequest)
  .then(response => {
    if (response.status === 200) {
        
        console.log(response);
        alert("Dados enviados com sucesso!");
   
       
        return response.json();
    } else {
      throw new Error('Ops! Houve um erro em nosso servidor.');
    }

  
  })
  .then(response => {
    console.debug(response);
    // ...
  }).catch(error => {
    console.log(error);
  });




};


function validacaoCampo(){

    if( dadosValidacao.nome=="OK"  && dadosValidacao.email=="OK"  && dadosValidacao.telefone=="OK"  
    && dadosValidacao.estado=="OK"  && dadosValidacao.cidade=="OK"  ){

        postEmeil();

     document.querySelector('#inputNome').value = '';
     document.querySelector('#inputEmail').value= '';
     document.querySelector('#inputTelefone').value= '';
     document.querySelector('#inputEstado').value= '';
     document.querySelector('#inputCidade').value= '';



     inputNome.focus();

       

    }else{
        alert( " Todos os campos são de preenchimento obrigatório !" );
        return false;


    }


}




function post_to_url() {



var obj = {
        "Nome": "Danilo",
        "Email": "danilo.tito@conninf.com.br",
        "Telefone": "(11) 941341992",
        "Estado": "São Paulo",
        "Cidade": "São  Paulo",
        "Whats":  "SIM",
        "Email1":  "SIM"
    };



    (async () => {
        const rawResponse = await fetch('http://localhost:3000', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({obj})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
}





            
    }

    inputBotao = document.addEventListener('click', botao);


}


module.exports =Script;