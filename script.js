async function fetchJoke() {
    const jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = ''; // Set to "Loading..." before fetching the joke
    
    let loadingInterval = setInterval(() => {
        if (jokeElement.innerHTML.length > 70) {
            jokeElement.innerHTML = jokeElement.innerHTML.slice(0, -2);
        }
        else {
            jokeElement.innerHTML += '🤣';
        }
    }
    , 5);
    
    try {
        const joke = await fetch('https://api.chucknorris.io/jokes/random');
        const jokeData = await joke.json();
        clearInterval(loadingInterval);
        jokeElement.innerHTML = jokeData.value;
    }
    catch (error) {
        clearInterval(loadingInterval);
        jokeElement.innerHTML = `Failed to load joke 🥹 , maybe chuckNorris not here but he gave me one joke , That is : <br> "Your Internet is not On!"`; 

    }
}
document.getElementById('get-joke').addEventListener('click', fetchJoke);