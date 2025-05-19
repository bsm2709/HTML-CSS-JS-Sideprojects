const _url = "https://icanhazdadjoke.com/";
const joke = document.getElementById("joke");

function getJoke(){
    fetch(_url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        joke.innerHTML = data.joke;
    })
}
getJoke()