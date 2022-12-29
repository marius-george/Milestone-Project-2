let apiQuote = [];

async function getQuote() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        let response = await fetch(apiUrl);
        apiQuote = await response.json();
        // Shows in console quote 244 from API array. I have to create a random function using math.floor and math.random o display random quote. 
        console.log(apiQuote[243]);
    }
    catch (error) {

    }
}

getQuote();