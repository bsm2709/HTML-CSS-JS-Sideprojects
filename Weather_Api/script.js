let submitbutton = document.querySelector('#submitbutton');
let city = document.querySelector('#city');
let localtime = document.querySelector('#localtime');
let temp = document.querySelector('#temp');
let humid = document.querySelector('#humid');
let details = document.querySelector('.details');

submitbutton.addEventListener("click",()=>{
    let cityname= document.querySelector('#cityname').value;
    findWeather(cityname);

})

let findWeather = async (cityname)=>{
    let response= await fetch(`http://api.weatherapi.com/v1/current.json?key=bd6a624e33d64fa0bb271317252803&q=${cityname}&aqi=yes`);
    let data = await response.json();
    // console.log(data);
    // console.log(data.location.name);
    // console.log(data.location.region);
    // console.log(data.location.country);
    // console.log(data.current.humidity);
    // console.log(data.current.temp_c);
    // console.log(data.location.localtime);
    city.innerText = `${data.location.name} , ${data.location.region} \n  ${data.location.country}`;
    localtime.innerText = `Local date & time - ${data.location.localtime}`;
    temp.innerText =`Temprature - ${data.current.temp_c} C`;
    humid.innerText =`Humidity - ${data.current.humidity} %`;


}