let divi=document.querySelectorAll(".divi");
let body=document.querySelector("#body");
let reset=document.querySelector("#reset");
let head1=document.querySelector("#Heading1");

divi.forEach((box) => {
    box.addEventListener("click",()=>{
        // document.style.backgroundColor = "black";
        console.log("button has been clicked");
        let value = box.innerText.trim().toLowerCase();
        if (value === "black") {
            body.style.backgroundColor = "black";
        }
        if (value === "white") {
            body.style.backgroundColor = "white";
        }
        if (value === "orange") {
            body.style.backgroundColor = "orange";
        }
        if (value === "green") {
            body.style.backgroundColor = "green";
        }
        if (value === "yellow") {
            body.style.backgroundColor = "yellow";
        }
        if (value === "plum") {
            body.style.backgroundColor = "plum";
        }
        if (value === "pink") {
            body.style.backgroundColor = "pink";
        } 
    });  
});
let back =() => {
    body.style.backgroundColor="#9D8189";
    head1.style.backgroundColor="#9D8189";
}

reset.addEventListener("click",()=>{
    back();
})


// document.querySelector("#firstColor").addEventListener("click",()=>{
//     console.log("clicked");
//  })


    // divi.addEventListener("click", () => {
    //     console.log("clicked");
    // });
