    //declare the variables
    const mac= document.getElementById("macbook").addEventListener("click", buybutton);
    const hp= document.getElementById("hp").addEventListener("click", buybutton1);
    const acer= document.getElementById("acer").addEventListener("click", buybutton2);
    


   


  function buybutton(){
    fetch("http://localhost:3000?id=1")
    .then(response => response.json())
  .then(data => console.log(data));

    }

    
  

  function buybutton1(){
    fetch("http://localhost:3000?id=2") 
    .then(response => response.json())
  .then(data => console.log(data));
    }
    
  


  function buybutton2(){
    fetch("http://localhost:3000?id=3") 
    .then(response => response.json())
  .then(data => console.log(data));
   
  }      


  fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });

