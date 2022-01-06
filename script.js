async function foo(){
  
 var text=document.getElementById('text').value
  var res= await fetch(` https://cataas.com/api/cats?tags=${text}`)
  var result= await res.json()
for(let i=0;i<=25;i++){
  var pet=result[i].id
  console.log(pet);
  goo(pet,i) 
}
}


async function goo(pet,i){
try{
    var cat1= await fetch(`https://cataas.com/cat/${pet}`)
    document.getElementById("image1").src = cat1.url;
    if(i===1){
    var cat2= await fetch(`https://cataas.com/cat/${pet}`)
    document.getElementById("image2").src = cat2.url;
    }
    if(i==2){
    var cat3= await fetch(`https://cataas.com/cat/${pet}`)
    document.getElementById("image3").src = cat3.url;
    }
    if(i===3){
    var cat4= await fetch(`https://cataas.com/cat/${pet}`)
    document.getElementById("image4").src = cat4.url;
    }
    if(i===4){
      var cat5= await fetch(`https://cataas.com/cat/${pet}`)
      document.getElementById("image5").src = cat5.url;
      }

    }
    catch(error){
      console.log(error);
    }
}

window.addEventListener("scroll",function(){
  var header=this.document.querySelector("nav")
  header.classList.toggle("sticky", window.scrollY>0)
})
