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
  },
  {
    quote: 'This is a test quote which doesn&rsquo;t include keys for source, citation, year, or tags.'
  }
];

/***
 * `getRandomQuote` function
 *
 * Returns a random quote object from `quotes` array
***/
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/***
 * `randomColor` function
 *
 * Returns an HSL color with a random hue value between 0 to 360.
 *
 * Note I'm only updating the hue value so colors don't get
 * overly vivid/grey (saturation) or too light/dark (lightness).
 * This way the tone and contrast of each random color is consistent.
***/
const randomColor = () => {
  return `hsl(${Math.floor(Math.random() * 360)} 54% 39%)`;
}

/***
 * `constructQuote` function
 *
 * Returns a string of HTML with values from `quote` object.
 *
 * Optionally includes source, citation, year, and tags values.
***/
const constructQuote = (quote) => {
  let quoteString = `<p class="quote">${quote.quote}</p>`;

  if (quote.source) {
    quoteString += `<p class="source">${quote.source}`;
  }
  if (quote.citation) {
    quoteString += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    quoteString += `<span class="year">${quote.year}</span>`;
  }
  quoteString += '</p>';

  if (quote.tags) {
    quoteString += `<p class="tags">Tags: ${quote.tags.join(', ')}</p>`;
  }

  return quoteString;
}

/***
 * `showRandomQuote` function
 *
 * Constructs HTML with values from `getRandomQuote` object.
 * Inserts HTML into the `#quote-box` div.
 * Update background to a random hue color.
 *
 * Called from:
 * - File load
 * - `printQuote` button click
***/
const showRandomQuote = () => {
  document.getElementById('quote-box').innerHTML = constructQuote(getRandomQuote());
  document.body.style.backgroundColor = randomColor();
}

/***
 * `timer` object
 *
 * Used to control when the `showRandomQuote` function is called.
 *
 * A `window.quoteTimer` global variable is used to store the timer object.
 * This allows the timer to be `reset` when the `#load-quote` button is clicked.
 * Note: When `start()` or `reset()` are called, an interval value can be passed in.
 * Note: Interval value is in milliseconds.
***/
const timer = {
  defaultInterval: 5000,
  start(interval = this.defaultInterval) {
    window.quoteTimer = setInterval(showRandomQuote, interval);
  },
  stop() {
    clearInterval(window.quoteTimer);
  },
  reset(interval = this.defaultInterval) {
    this.stop();
    this.start(interval);
  }
}

/***
 * `printQuote` function
 *
 * This function is called when the `#load-quote` button is clicked.
***/
const printQuote = () => {
  showRandomQuote();
  timer.reset();
}

/***
 * Start a timer that shows a random quote when this script loads
***/
timer.start();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener('click', printQuote, false);
