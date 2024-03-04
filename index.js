  fetch("./data.json")
  .then(response => response.json())
  .then(myMovies => loadMovies(myMovies))
  .catch(function (err){
    console.log("Error: " + err);
  });

  function loadMovies(myMovies) {
    var mainContainer = document.getElementById("col");
    console.log(myMovies);
    var movies = myMovies.showing;
    console.log(movies);
    for(let movie of movies)
    {
        let div = document.createElement("div");
        console.log(movie);
        div.innerHTML = `<div class="card shadow-sm small-text" >
        <img src=${movie.image} class="card-img-top" alt="${movie.title}"></img>
            <div class="card-body">
            <p class="card-text"> <strong>${movie.title}</strong>, ${movie.year}<br>Runtime: ${movie.runtime}</p>
            <div class="showtimes">Showings Today: <br> ${getTodayShowings(movie)}</div><br>
                <div class="d-flex justify-content-between align-items-center">
                   <div class="btn-group">
                     <button type="button" class="btn btn-sm btn-outline-secondary" onclick="toShell('${movie.title}')">Learn More</button>
                   </div>
                <small class="text-body-secondary">Rated: ${movie.rating}</small>
                </div>
            </div>
        </div>`;
        console.log(div);
        console.log(mainContainer);
        mainContainer.appendChild(div);
    }
    var mainContainer = document.getElementById("col2");
    var movies = myMovies.comingSoon;
    console.log(movies);
    for(let movie of movies)
    {
        let div = document.createElement("div");
        console.log(movie);
        div.innerHTML = `<div class="card shadow-sm">
        <img src=${movie.image} class="card-img-top" alt="${movie.title} Poster"></img>
            <div class="card-body">
            <p class="card-text" style="text-align: center;"> <strong>${movie.title}</strong><br>Coming to Old Time Cinema on <br><strong>${movie.releaseDate}</strong></p>
                <div class="d-flex justify-content-between align-items-center">
                   <div class="btn-group">
                     <button type="button" class="btn btn-sm btn-outline-secondary" onclick="toShell('${movie.title}')">Learn More</button>
                   </div>
                <small class="text-body-secondary">Rated: ${movie.rating}</small>
                </div>
            </div>
        </div>`;
        console.log(div);
        console.log(mainContainer);
        mainContainer.appendChild(div);
    }
}

function toShell(title){
  window.location.href = 'shell.html?title=' + title;
}

function getTodayShowings(movie){
  const d = new Date();
  let day = d.getDay();
  let showings = [];
  switch(day){
    case 0:
      showings = movie.showtimes.Sunday;
      break;
    case 1:
      showings = movie.showtimes.Monday;
      break;
    case 2:
      showings = movie.showtimes.Tuesday;
      break;
    case 3:
      showings = movie.showtimes.Wednesday;
      break;
    case 4:
      showings = movie.showtimes.Thursday;
      break;
    case 5:
      showings = movie.showtimes.Friday;
      break;
    case 6:
      showings = movie.showtimes.Saturday;
  }
  let value = "";
  let i = 0;
  for(let time of showings){
    if(i == 0) {
      value +=  time + " "
      i++;
    }
    else {
      value += "| " + time + " "
    }
  }
  return value;
}