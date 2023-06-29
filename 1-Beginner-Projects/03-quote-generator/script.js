let quote = document.getElementById("paraID");
let author = document.getElementById("authorID");
const urlAddress = "https://api.quotable.io/random";
const getquotes = async (url) => {
    const response = await fetch(url);
    var data = await response.json()
    quote.innerHTML = `${data.content}`
    author.innerHTML = `${data.author}`
};
const quotebtn = document.getElementById("newquote")
quotebtn.addEventListener('click', () => {
    getquotes(urlAddress)
});
