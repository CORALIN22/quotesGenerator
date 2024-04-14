const quotes = [
  "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
  "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
  "Believe you can and you're halfway there.",
  "Learn the rules like a pro, so you can break them like an artist.",
  "Do one thing every day that scares you.",
];

const quoteGenerator = (quote) => {
  return Math.floor(Math.random() * quote.length);
};

console.log(quotes[quoteGenerator(quotes)]);
