const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const inTheatersRow = document.getElementById('tRow');

function loadInTheaters(url) {
  fetch(url).then(res => res.json())
  .then(function(data){
    data.results.forEach(element => {
      const el = document.createElement('div');
      const image = document.createElement('img');
      const text = document.createElement('h3');

      el.classList.add("row-items")

      text.innerHTML = `${element.title}`;
      // image.src = IMGPATH + element.poster_path;

      el.appendChild(text);
      inTheatersRow.appendChild(el);
      el.style.backgroundImage = `linear-gradient(transparent, #080808 99%), url('${IMGPATH + element.poster_path}')`;
    });
  })
}
