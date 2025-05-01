let image=document.querySelector("#change-image");
let imageofDogs= document.querySelector("#imageofDogs")

let fetchimage= async()=>{
   let response =await fetch("https://dog.ceo/api/breeds/image/random");
   let data= await response.json();
   console.log(data.message);
//    imageofDogs.src=data.message;
    imageofDogs.src = data.message;
}

image.addEventListener("click",()=>{
    fetchimage();
})