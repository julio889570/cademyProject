const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];
//show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// hide Loading
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
//Show New Quote
function newQuote(){
    loading();
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // Checking if Author field is blank replace it with 'Unknown'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }

    // Chinking Quote length to determine styling
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
    complete();
}



//Get Quotes From API
 async function getQuote(){
     loading()
     const apiUrl = 'https://type.fit/api/quotes';
     try{
         const response = await fetch(apiUrl);
         apiQuotes = await response.json();
         loading()
         newQuote()
     }catch(err){
         console.log('Error has occured:' + err);
     }finally{
            console.log('This always run');
     }
 }
 function tweetQuote(){
     const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
     window.open(twitterUrl, '_blank');
 }
 //event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
 // On Load
 getQuote();