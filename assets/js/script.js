const mainDiv  = document.getElementById('main-div');
const mainText  = document.getElementById('main');
const mainAuthor  = document.getElementById('main-author');
const mainButton  = document.getElementById('random-quote');
const twitterBtn = document.getElementById('twitter');

let apiQuote = [];

// This code fetches a list of quotes from an external API, selects a random quote from the list, and displays the selected quote's author and text on a webpage using two functions, getQuote() and newQuote().

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


// This function copies the text content of an HTML element to the user's clipboard and displays an alert message indicating that the text has been copied.
function copyText() {
    const text = document.getElementById("main").textContent;
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
  }

  // The function constructs a URL for sharing a quote and author on Twitter using template literals and opens a new window to the Twitter share URL.
  function twitterQuote() {
    const quote = mainText.innerText;
    const author = mainAuthor.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
  }

  twitterBtn.addEventListener('click', twitterQuote);