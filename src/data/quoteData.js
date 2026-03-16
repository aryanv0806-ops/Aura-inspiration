/**
 * Quote Database
 * NO API CALLS - All quotes stored locally
 */

export const quotesData = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    source: "Life Wisdom",
    bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#667eea",
    textColor: "#ffffff",
  },
  {
    id: 2,
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill",
    source: "Perseverance",
    bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accentColor: "#f093fb",
    textColor: "#ffffff",
  },
  {
    id: 3,
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    source: "Philosophy",
    bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accentColor: "#4facfe",
    textColor: "#ffffff",
  },
  {
    id: 4,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    source: "Vision",
    bgGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    accentColor: "#fa709a",
    textColor: "#ffffff",
  },
  {
    id: 5,
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    source: "Motivation",
    bgGradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    accentColor: "#30cfd0",
    textColor: "#ffffff",
  },
  {
    id: 6,
    text: "The best time to plant a tree was 20 years ago. The second best is now.",
    author: "Chinese Proverb",
    source: "Wisdom",
    bgGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    accentColor: "#a8edea",
    textColor: "#000000",
  },
  {
    id: 7,
    text: "Everything you want is on the other side of fear.",
    author: "Jack Canfield",
    source: "Courage",
    bgGradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
    accentColor: "#ff9a56",
    textColor: "#ffffff",
  },
  {
    id: 8,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    source: "Belief",
    bgGradient: "linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)",
    accentColor: "#00d4ff",
    textColor: "#ffffff",
  },
  {
    id: 9,
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    source: "Action",
    bgGradient: "linear-gradient(135deg, #fbc531 0%, #f39c12 100%)",
    accentColor: "#fbc531",
    textColor: "#ffffff",
  },
  {
    id: 10,
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    source: "Perspective",
    bgGradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    accentColor: "#11998e",
    textColor: "#ffffff",
  },
  {
    id: 11,
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    source: "Resilience",
    bgGradient: "linear-gradient(135deg, #eb3349 0%, #f45c43 100%)",
    accentColor: "#eb3349",
    textColor: "#ffffff",
  },
  {
    id: 12,
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    source: "Opportunity",
    bgGradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    accentColor: "#a855f7",
    textColor: "#ffffff",
  },
  {
    id: 13,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    source: "Action",
    bgGradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
    accentColor: "#ff6b6b",
    textColor: "#ffffff",
  },
  {
    id: 14,
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
    source: "Perspective",
    bgGradient: "linear-gradient(135deg, #45b7d1 0%, #96ceb4 100%)",
    accentColor: "#45b7d1",
    textColor: "#ffffff",
  },
  {
    id: 15,
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    source: "Risk",
    bgGradient: "linear-gradient(135deg, #f5af19 0%, #f12711 100%)",
    accentColor: "#f5af19",
    textColor: "#ffffff",
  },
];

/**
 * Get a random quote from the database
 */
export function getRandomQuote() {
  return quotesData[Math.floor(Math.random() * quotesData.length)];
}

/**
 * Get quote by ID
 */
export function getQuoteById(id) {
  return quotesData.find((quote) => quote.id === id);
}
