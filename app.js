const url = "https://api.breakingbadquotes.xyz/v1/quotes";

const content = document.getElementById("content");
const btn = document.getElementById("btn");
const author = document.getElementById("author");

async function getdata(url) {
  try {
    const res = await fetch(url);
    const data = await res.json(); // data is an array
    console.log(data);

    // Fix: Use the first object in the array
    content.innerHTML = data[0].quote;
    author.innerHTML = `— ${data[0].author}`;
  } catch (error) {
    content.innerHTML = "Server is busy. Try again later.";
    author.innerHTML = "";
    console.error("Fetch error:", error);
  }
}

btn.addEventListener('click', function () {
  getdata(url);
});

