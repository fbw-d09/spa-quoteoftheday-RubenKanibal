const quotes = [
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    "Don't watch the clock; do what it does. Keep going.",
    'The secret of getting ahead is getting started.',
    'Well done is better than well said.',
    'You miss 100% of the shots you don’t take.',
    'A goal is a dream with a deadline.',
    'Outstanding people have one thing in common: An absolute sense of mission.',
    'Trying is winning in the moment.',
    'Fall down seven times and stand up eight.',
    "You just can't beat the person who never gives up.",
    'There is little success where there is little laughter.',
    'We cannot solve our problems with the same thinking we used when we created them.'
  ];

// Write your Javascriot code here



const h1 = document.querySelector("h1");
h1.style.textAlign = "center";
h1.style.marginTop = "5%";
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexDirection = "row";
const box = document.querySelector("#box");
box.style.width = "55%";
box.style.height = "25px";
box.style.border = "2px solid grey";
box.style.borderRadius = "5px";

const button = document.querySelector("button");
const paragraph = document.querySelector("p");

button.style.marginLeft = "22.5%";
button.style.marginTop = "10px";
paragraph.style.margin = "0";
paragraph.style.lineHeight = "25px";
paragraph.style.paddingLeft = "5px";

button.onclick = () => {
  let randomQuote = Math.floor(Math.random() * quotes.length);

function showQuote() {
  return quotes[randomQuote];
}
  paragraph.innerText = showQuote();
}
