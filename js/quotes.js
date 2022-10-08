const quotes = [
    {
        quote: "The way to get started is to quit taking and begin.",
        author: "Walt Disney",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Life is what happens while you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Tomas Edison",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "By changing nothing, nothing changes.",
        author: "Tony Robbins",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;