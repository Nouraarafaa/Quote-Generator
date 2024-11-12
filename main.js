const quotes = [
    "'Be yourself; everyone else is already taken.'",
    "'I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.'",
    "'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",
    "'Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind'",
    "'Live as if you were to die tomorrow. Learn as if you were to live forever'",
    "'I am so clever that sometimes I don't understand a single word of what I am saying'"
];

let previousIndex = -1;

function displayQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex); 
    
    document.getElementById("quoteDisplay").innerText = quotes[randomIndex];
    previousIndex = randomIndex; 
}