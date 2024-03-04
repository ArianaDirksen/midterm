function toggleMenu(){
    var menu = document.getElementById("menu-dropdown");
    if(menu.style.display == "block") menu.style.display = "none";
    else menu.style.display = "block";
  }

  fetch("./data.json")
  .then(response => response.json())
  .then(myMovies => populateHeader(myMovies))
  .catch(function (err){
    console.log("Error: " + err);
  });

  function populateHeader(myMovies) {
    var mainContainer = document.getElementById("now-showing");
    var movies = myMovies.showing;
    for(let movie of movies)
    {
        let li = document.createElement("li");
        li.innerHTML = `<span onclick="toShell('${movie.title}')">- ${movie.title} -</span>`;
        mainContainer.appendChild(li);
    }
    var mainContainer = document.getElementById("soon");
    var movies = myMovies.comingSoon;
    for(let movie of movies)
    {
        let li = document.createElement("li");
        li.innerHTML = `<span onclick="toShell('${movie.title}')">- ${movie.title} -</span>`;
        mainContainer.appendChild(li);
    }
}

function toShell(title){
  window.location.href = 'shell.html?title=' + title;
}