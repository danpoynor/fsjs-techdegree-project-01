/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {
    quote: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
    source: 'Albert Einstein',
    citation: 'Letter to his son Eduard',
    year: '1930',
    tags: ['motivational', 'life']
  },
  {
    quote: 'Try to become not a man of success, but try rather to become a man of value.',
    source: 'Albert Einstein',
    citation: 'As quoted by LIFE magazine',
    year: '1955',
    tags: ['success']
  },
  {
    quote: 'Everything should be made as simple as possible, but not simpler.',
    source: 'Albert Einstein',
    citation: 'Reader&rsquo;s Digest',
    year: '1977',
    tags: ['motivational', 'simple', 'famous']
  },
  {
    quote: 'A theory can be proved by experiment; but no path leads from experiment to the birth of a theory.',
    source: 'Albert Einstein',
    citation: 'The Sunday Times',
    year: '1976',
    tags: ['experiment', 'theory']
  },
  {
    quote: 'I am content in my later years. I have kept my good humor and take neither myself nor the next person seriously.',
    source: 'Albert Einstein',
    citation: 'The Ultimate Quotable Einstein (ed. Princeton University Press)',
    year: '2010',
    tags: ['later years', 'humor', 'self']
  },
  {
    quote: 'Mozart&rsquo;s music is so pure and beautiful that I see it as a reflection of the inner beauty of the universe.',
    source: 'Albert Einstein',
    citation: 'The Ultimate Quotable Einstein (ed. Princeton University Press)',
    year: '2010',
    tags: ['music', 'beautiful']
  },
  {
    quote: 'I believe that a simple and unassuming life is good for everybody, physically and mentally.',
    source: 'Albert Einstein',
    citation: 'The World as I See It',
    year: '1959',
    tags: ['life', 'unassuming']
  }
];

/***
 * `getRandomQuote` function
 *
 * Returns a random quote object from `quotes` array
***/
const getRandomQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `randomColor` function
 *
 * Returns an HSL color with a random hue value between 0 to 360.
***/
const randomColor = () => {
  const randomHue = Math.floor(Math.random() * 360);
  return `hsl(${randomHue} 54% 39%)`;
}

/***
 * `printQuote` function
 *
 * Calls `getRandomQuote` function.
 * Creates HTML string with quote and source.
 * Includes optional citation and year.
 * Inserts HTML string to `quote-box` div.
 *
***/
const printQuote = () => {
  const quote = getRandomQuote();

  let quoteString = `<p class="quote">${quote.quote}</p>`;

  quoteString += `<p class="source">${quote.source}`;
  if (quote.citation.length > 0) {
    quoteString += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year.length > 0) {
    quoteString += `<span class="year">${quote.year}</span>`;
  }
  quoteString += `</p>`;

  if (quote.tags.length > 0) {
    const tagsCSV = quote.tags.join(", ")
    quoteString += `<p class="tags">Tags: ${tagsCSV}</p>`;
  }

  document.body.style.backgroundColor = randomColor();
  document.getElementById('quote-box').innerHTML = quoteString;
}

// Call `printQuote` function automatically every 5 seconds
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
