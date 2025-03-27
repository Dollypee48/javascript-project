const API_KEY = "537033b4090945e688acc8e8a561a71d"

const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const newsContainer = document.getElementById("news-container");

const API_URL = "https://newsapi.org/v2/top-headlines";

function fetchNews(sources = "techcrunch"){
    fetch(`${API_URL}?sources=${sources}&apikey=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        displayNews(data.articles);
    });
}

function displayNews(items){
    newsContainer.innerHTML = "";
    items.forEach((item) => {
        let divContainer = document.createElement("div")

        divContainer.classList.add("divContainer")

        console.log(item)
        divContainer.innerHTML = `
        <img src=${item.urlToImage} alt="news picture"/>
        <h3>${item.title}</h3>
        <p>${item.description || "No description available"}</p>
        <p>${item.publishedAt}</p>
        <a href=${item.url}> Read more</a>
        `
        newsContainer.appendChild(divContainer)
    });
}

searchBtn.addEventListener("click", function() {
    const searchTerm = search.value.trim().toLowerCase()

    fetch(`${API_URL}?sources=techcrunch&apikey=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        const filteredNews = data.articles.filter((article) => {
            return article.title.toLowerCase().includes(searchTerm) || article.description.toLowerCase().includes(searchTerm)
            
        })
        displayNews(filteredNews);
    });


})

fetchNews()









