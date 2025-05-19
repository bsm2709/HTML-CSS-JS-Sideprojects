const _url = "https://icanhazdadjoke.com/";
const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

function getJoke() {
    jokeBtn.disabled = true;
    joke.style.opacity = 0;

    fetch(_url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            joke.innerHTML = `<h4 class="sentence">${data.joke}</h4>`;
            joke.style.opacity = 1;
            jokeBtn.disabled = false;
        }, 300);
    })
}

getJoke();
jokeBtn.addEventListener("click", getJoke);
