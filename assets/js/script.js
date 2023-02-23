const mainDiv  = document.getElementById('main-div');
const mainText  = document.getElementById('main');
const mainAuthor  = document.getElementById('main-author');
const mainButton  = document.getElementById('random-quote');
const twitterBtn = document.getElementById('twitter');

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


//Function to copy Quote text
function copyText() {
    const text = document.getElementById("main").textContent;
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
  }

  // Function to post Quote to Twitter
  function twitterQuote() {
    const quote = mainText.innerText;
    const author = mainAuthor.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
  }

  twitterBtn.addEventListener('click', twitterQuote);