
    const searchParams = new URLSearchParams(window.location.search);
    let movieName = searchParams.get('title');
    console.log(movieName);
    inputMovieName = movieName.value;
    fetch("./data.json")
    .then(response => response.json())
    .then(myMovies => loadMovie(myMovies));
    
    let slideIndex = 1;

  function loadMovie(myMovies) {
    var mainContainer = document.getElementById("shell-body");
    console.log(myMovies);
    var movies = myMovies.showing;
    console.log(movies);
    let found = false;
    for(let movie of movies)
    {
        if(movie.title == movieName)
        {
            found = true;
            let div = document.createElement("div");
            div.innerHTML = `<div class="header">${movie.title}</div>
            <div style="width: 100%; min-width: 400px; max-width: 800px; margin: auto">
            <div style="position: relative; width: 100%; overflow: hidden; padding-top: 56.25%;">
            <iframe width="560" height="315" src="${movie.trailer}" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe></div></div><br>
            <p class="description">Genre: ${printGenres(movie.genre)}<br>Runtime: ${movie.runtime}<br>${movie.description}</p>
            <div class="header">Showings</div>
            <div id="weekly-showings">
            <div class="description weekday"><strong>Sunday</strong><br>${showtimesToList(movie.showtimes.Sunday)}</div>
            <div class="description weekday"><strong>Monday</strong><br>${showtimesToList(movie.showtimes.Monday)}</div>
            <div class="description weekday"><strong>Tuesday</strong><br>${showtimesToList(movie.showtimes.Tuesday)}</div>
            <div class="description weekday"><strong>Wednesday</strong><br>${showtimesToList(movie.showtimes.Wednesday)}</div>
            <div class="description weekday"><strong>Thursday</strong><br>${showtimesToList(movie.showtimes.Thursday)}</div>
            <div class="description weekday"><strong>Friday</strong><br>${showtimesToList(movie.showtimes.Friday)}</div>
            <div class="description weekday"><strong>Saturday</strong><br>${showtimesToList(movie.showtimes.Saturday)}</div>
            </div>
            <div class="slideshow-container">
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="${movie.image}" style="height:400px">
                <div class="text">${movie.title} Poster</div>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="${movie.img1}" style="height:400px">
                <div class="text">${movie.caption1}</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="${movie.img2}" style="height:400px">
                <div class="text">${movie.caption2}</div>
            </div>
            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <!-- The dots/circles -->
            <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            </div>
            </div>`;
            mainContainer.appendChild(div);
        }
    }
    if(!found){
        movies = myMovies.comingSoon;
        for(let movie of movies)
        {
            if(movie.title == movieName)
            {
                found = true;
                let div = document.createElement("div");
                div.innerHTML = `<div class="header">${movie.title}</div>
                <div style="width: 100%; min-width: 400px; max-width: 800px; margin: auto">
                <div style="position: relative; width: 100%; overflow: hidden; padding-top: 56.25%;">
                <iframe width="560" height="315" src="${movie.trailer}" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe></div></div><br>
                <p class="description">Genre: ${printGenres(movie.genre)}<br>Runtime: ${movie.runtime}<br>${movie.description}</p>
                <div class="header">Releasing ${movie.releaseDate}</div>
                <div class="slideshow-container">
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="${movie.image}" style="height:400px">
                <div class="text">${movie.title} Poster</div>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="${movie.img1}" style="height:400px">
                <div class="text">${movie.caption1}</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="${movie.img2}" style="height:400px">
                <div class="text">${movie.caption2}</div>
            </div>
            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <!-- The dots/circles -->
            <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            </div>
            </div>`;
                mainContainer.appendChild(div);
            }
        }
    }
    showSlides();
}

function showtimesToList(showings){
    let value = "";
    console.log(showings);
    for(let time in showings){
        value += showings[time] + "\n";
    }
    return value;
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  function printGenres(genres){
    let value = "";
    console.log(genres);
    for(let item of genres)
    {
        value += item + " ";
    }
    return value;
  }