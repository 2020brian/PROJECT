    //declare the variables
    const mac= document.getElementById("macbook").addEventListener("click", buybutton);
    const hp= document.getElementById("hp").addEventListener("click", buybutton1);
    const acer= document.getElementById("acer").addEventListener("click", buybutton2);
    let dataurl = ("http://localhost:3000/")
   


  function buybutton(){
    fetch(dataurl) 
    .then(response => res.json)
    .then()

    
  }

  function buybutton1(){
    fetch(dataurl) 
    .then(response => res.json)
    .then()
    
  }


  function buybutton2(){
    fetch(dataurl) 
    .then(response => res.json)
    .then()
   
  }      
//safaricom api
var unirest = require("unirest");
var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate");
 
req.query({
 "grant_type": "client_credentials"
});
 
req.headers({
 "Authorization": "Basic SWZPREdqdkdYM0FjWkFTcTdSa1RWZ2FTSklNY001RGQ6WUp4ZVcxMTZaV0dGNFIzaA=="
});
 
req.end(res => {
 if (res.error) throw new Error(res.error);
 console.log(res.body);
});

 

