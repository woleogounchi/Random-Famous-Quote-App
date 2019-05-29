/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
  We create an array of quote objects named `quotes`, that contains five quotes objects. 
  We then give each quote object a `quote`, `source`, `citation` and, `year` property. For
  this project I took my quotes from https://www.goodreads.com/quotes. As the year of 
  publication was not specify, I just took each source year of birth and death. I've commented 
  the `citation` and `year` property for 2 of the quotes to make sure my code work as required.  
***/
var quotes = [{
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss",
    citation: "goodreads",
    year: "1904-1991"
}, {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    // citation: "goodreads",
    // year: "1854-1900"
}, {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    citation: "goodreads",
    year: "1879-1955"
}, {
    quote: "So many books, so little time",
    source: "Frank Zappa",
    // citation: "goodreads",
    // year: "1940-1993"
}, {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    citation: "goodreads",
    year: "1893-1980"
}];

/***
  We create a `getRandomQuote` function with in it a variable called `randNum`, 
  to store a random number and we use that random number to `return` a random 
  quote object from the `quotes` array.
***/
function getRandomQuote() {
    var randNum = Math.floor(Math.random() * quotes.length);
    return quotes[randNum];
}

/***
  We create the `printQuote` function that calls in the `getRandomQuote` function and 
  stores it in a variable called `randQuote`, that wiil then be used to  build the 
  HTML string to be displayed randomly following the instructions provided. 
***/
function printQuote() {
    var randQuote = getRandomQuote();
    var stringVar = '<p class="quote">';
    stringVar += randQuote['quote'];
    stringVar += '</p>';
    stringVar += '<p class="source">';
    stringVar += randQuote['source'];
    // We create a variable called `randQuoteKeys` containing a 
    // list of the keys for any randQuote.
    var randQuoteKeys = Object.keys(randQuote);
    // We cjeck if `citation` and `year` are in the list of keys 
    // and if so we add their values to the HTML string.
    if (randQuoteKeys.indexOf('citation') >= 0) {
        stringVar += '<span class="citation">';
        stringVar += randQuote['citation'];
        stringVar += '</span>';
    }
    if (randQuoteKeys.indexOf('year') >= 0) {
        stringVar += '<span class="year">';
        stringVar += randQuote['year'];
        stringVar += '</span>';
    }

    stringVar += '</p>';
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = stringVar;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);