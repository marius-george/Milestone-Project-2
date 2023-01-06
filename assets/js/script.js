const mainDiv  = document.getElementById('main-div');
const mainText  = document.getElementById('main');
const mainAuthor  = document.getElementById('main-author');
const mainButton  = document.getElementById('random-quote');

let apiQuote = [];

// Generate random quote
function newQuote() {
    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
    mainAuthor.textContent = quote.author;
    mainText.textContent = quote.text;
}

async function getQuote() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        let response = await fetch(apiUrl);
        apiQuote = await response.json();
        newQuote();
    }
    catch (error) {

    }
}

//Event Listeners

mainButton.addEventListener('click', newQuote);

getQuote();