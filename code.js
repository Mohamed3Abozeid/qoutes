var quote = [
    
{
    text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    ,author:"― Marilyn Monroe"
    },
     {
        text: "The only limit to our realization of tomorrow will be our doubts of today."
        , author: "Franklin D. Roosevelt"
    },
    {
        text: "Life is what happens when you're busy making other plans."
        , author: "John Lennon"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on."
        , author: "Robert Frost"
    },
    {
        text: "Do not wait to strike till the iron is hot, but make it hot by striking."
        , author: "William Butler Yeats"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall."
        , author: "Nelson Mandela"
    }
    ,
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein"
    }
,

    {
        text: "You only live once, but if you do it right, once is enough."
        ,author:"Mae West"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on"
        , author: "Robert Frost"
        
        
    },
    {
        text: "It is better to be hated for what you are than to be loved for what you are not."
        ,author:"Andre Gide, Autumn Leaves"
    }


]

  

function getRandomQuote() 
{
    var randomIndex = Math.floor(Math.random() * quote.length);
    var randomQuote = quote[randomIndex];

    var qouteElement = document.getElementById('quote');
    var qouteAuother = document.getElementById('quote-author');

    qouteElement.innerHTML = randomQuote.text;
    qouteAuother.innerHTML ="--"+ randomQuote.author;

}