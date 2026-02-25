
const input = document.querySelector(".movie-name");
const searchBtn = document.querySelector(".search");
const movies = document.querySelector(".movies");
const popupback = document.querySelector(".popupback");
const popup = document.querySelector(".popup");
const watchlist = document.querySelector('.watchlist-msg')


searchBtn.addEventListener("click", () => {
    searchBtn.textContent = "loading..."
    searchBtn.disabled = true
    fetchingData()
})
async function fetchingData() {
    if (input.value.length > 0) {
        let api = `http://www.omdbapi.com/?apikey=84f630b0&t=${input.value}`;
        try {
            let response = await fetch(api)
            if (!response.ok) {
                throw new Error("HTTP Error!!")
            }
            let result = await response.json();
            searchBtn.textContent = "Search"
            searchBtn.disabled = false
            creatingMovieCard(result);
            popupback.classList.add("come-ani");
            popup.classList.add("come-ani");

            if (result.Response === "False") {
                throw new Error(result.Error);
            }
        } catch (error) {
            console.log(error);
        }
    }
    else {
        alert("write a movie name!")
    }
}

// fetchingData();

function creatingMovieCard(result) {
    //movie poster
    let moviePoster = document.createElement("img");
    moviePoster.classList.add("poster");
    moviePoster.src = result.Poster
    //movie infomation section
    let movieInformation = document.createElement("div");
    movieInformation.classList.add("movie-info");
    //heading section
    let heading = document.createElement("div");
    heading.classList.add("heading")
    //movie name
    let movieName = document.createElement("h4")
    movieName.textContent = result.Title;
    //btn section
    let buttonSection = document.createElement("div");
    buttonSection.classList.add('btn');
    //buttons
    let heartbtn = document.createElement('i');
    heartbtn.classList.add("fa-solid");
    heartbtn.classList.add("fa-heart-crack");
    let closebtn = document.createElement("i");
    closebtn.classList.add("fa-solid")
    closebtn.classList.add("fa-circle-xmark");
    buttonSection.appendChild(heartbtn)
    buttonSection.appendChild(closebtn)
    heading.appendChild(movieName)
    heading.appendChild(buttonSection)
    movieInformation.appendChild(heading)
    //actor Section
    let actorsContainer = document.createElement("div");
    actorsContainer.classList.add("actors");
    //actor word
    let actorHeading = document.createElement("span");
    actorHeading.textContent = "Actors: ";
    actorsContainer.appendChild(actorHeading)
    //actors name
    let actorsName = document.createElement("div");
    actorsName.textContent = result.Actors;
    actorsContainer.appendChild(actorsName)
    movieInformation.appendChild(actorsContainer)
    //country section
    let countrySection = document.createElement("div");
    countrySection.classList.add("country")
    //country word
    let countryHeading = document.createElement("span");
    countryHeading.classList.add("countryHead");
    countryHeading.textContent = "Country: "
    countrySection.appendChild(countryHeading)
    //country name
    let countryName = document.createElement("span");
    countryName.classList.add("belongCountry");
    countryName.textContent = result.Country;
    countrySection.appendChild(countryName)
    movieInformation.appendChild(countrySection)
    //language section
    let languageSection = document.createElement("div");
    languageSection.classList.add("language")
    //language word
    let languageHeading = document.createElement("span");
    languageHeading.classList.add("countryHead");
    languageHeading.textContent = "Language: "
    languageSection.appendChild(languageHeading)
    //language name
    let languageName = document.createElement("span");
    languageName.classList.add("belongCountry");
    languageName.textContent = result.Language;
    languageSection.appendChild(languageName)
    movieInformation.appendChild(languageSection)
    //category section
    let categorySection = document.createElement("div");
    categorySection.classList.add("category");
    //category heading
    let categoryHeading = document.createElement("span");
    categoryHeading.classList.add("catHed")
    categoryHeading.textContent = "Category: "
    categorySection.appendChild(categoryHeading);
    //categories
    let genre = result.Genre.split(",").map(item => item.trim())
    for (let i = 0; i < genre.length; i++) {
        let categories = document.createElement("span");
        categories.classList.add("cat")
        categories.textContent = genre[i];
        categorySection.appendChild(categories)
    }
    movieInformation.appendChild(categorySection)
    //rating section
    let ratingSection = document.createElement("div");
    ratingSection.classList.add("ratings")
    //rats
    let ratsSection = document.createElement("div");
    ratsSection.classList.add("rats");
    //source span
    let sourceSpan = document.createElement("span");
    sourceSpan.classList.add("source");
    sourceSpan.textContent = "Internet Movie Database: ";
    //value/ratings
    let ratings = document.createElement("span");
    ratings.classList.add("value");
    ratings.textContent = result.Ratings[0].Value;
    //rating icon
    let ratingIcon = document.createElement("i");
    ratingIcon.classList.add("fa-solid");
    ratingIcon.classList.add("fa-star");
    ratsSection.appendChild(sourceSpan);
    ratsSection.appendChild(ratings);
    ratsSection.appendChild(ratingIcon)
    ratingSection.appendChild(ratsSection)
    movieInformation.appendChild(ratingSection)
    //release section
    let releaseDate = document.createElement("div");
    releaseDate.classList.add("released");
    //released heading
    let releasedHeading = document.createElement("span");
    releasedHeading.classList.add("re-head")
    releasedHeading.textContent = "Released: "
    //release Date
    let Date = document.createElement("span")
    Date.textContent = result.Released;
    releaseDate.appendChild(releasedHeading)
    releaseDate.appendChild(Date)
    movieInformation.appendChild(releaseDate)
    //type section
    let typeSection = document.createElement("div");
    typeSection.classList.add("type");
    //type heading
    let typeHeading = document.createElement("span");
    typeHeading.classList.add("typeHead");
    typeHeading.classList.add("ty-hd");
    typeHeading.textContent = "type: ";
    //type name
    let typeName = document.createElement("span");
    typeName.classList.add("typeHead");
    typeName.textContent = result.Type;
    typeSection.appendChild(typeHeading)
    typeSection.appendChild(typeName)
    movieInformation.appendChild(typeSection)
    //writer Section
    let writerSection = document.createElement("div");
    writerSection.classList.add("writer");
    //writer heading
    let writerHeading = document.createElement("span");
    writerHeading.classList.add("writerHed");
    writerHeading.textContent = "Writer: ";
    //writer Name
    let writerName = document.createElement("span");
    writerName.classList.add("writerName");
    writerName.textContent = result.Writer;
    writerSection.appendChild(writerHeading)
    writerSection.appendChild(writerName)
    movieInformation.appendChild(writerSection)
    //year Section
    let yearSection = document.createElement("div");
    yearSection.classList.add("year");
    //year heading
    let yearHeading = document.createElement("span");
    yearHeading.classList.add("yearHed");
    yearHeading.textContent = "Year: ";
    //year
    let year = document.createElement("span");
    year.classList.add("yeargap");
    year.textContent = result.Year;
    yearSection.appendChild(yearHeading)
    yearSection.appendChild(year)
    movieInformation.appendChild(yearSection)
    //vote Section
    let voteSection = document.createElement("div");
    voteSection.classList.add("vote");
    //vote heading
    let voteHeading = document.createElement("span");
    voteHeading.classList.add("voteHed");
    voteHeading.textContent = "Vote: ";
    //total vote
    let vote = document.createElement("span");
    vote.classList.add("voteCount");
    vote.textContent = result.imdbVotes;
    //vote icon
    let voteIcon = document.createElement("i");
    voteIcon.classList.add("fa-solid");
    voteIcon.classList.add("fa-thumbs-up")
    voteSection.appendChild(voteHeading)
    voteSection.appendChild(vote)
    voteSection.appendChild(voteIcon)
    movieInformation.appendChild(voteSection)
    //plot section
    let plotSection = document.createElement("div");
    plotSection.classList.add("plot");
    //plot heading
    let plotHeading = document.createElement("span");
    plotHeading.classList.add("plotHed");
    plotHeading.textContent = "Plot: "
    //plot
    let plot = document.createElement("p");
    plot.textContent = result.Plot;

    //start appending elements
    plotSection.appendChild(plotHeading);
    plotSection.appendChild(plot)
    movieInformation.appendChild(plotSection)
    //appending
    movies.appendChild(moviePoster)
    movies.appendChild(movieInformation)
    //event listener
    const heart = document.querySelector(".fa-heart-crack");
    const close = document.querySelector(".fa-circle-xmark");
    heart.addEventListener("click", () => {
        heart.classList.remove("fa-heart-crack");
        if (!heart.classList.contains("fa-heart")) {
            Store(result.Poster, result.Title, result.Actors, result.Country, result.Language, genre, result.Ratings[0].Value, result.Released, result.Type, result.Writer, result.Year, result.imdbVotes, result.Plot);
            watchlist.classList.add('animate');
            setTimeout(() => {
                watchlist.classList.remove("animate")
            }, 2000)
        }
        heart.classList.add("fa-heart");

    })

    close.addEventListener("click", () => {
        popupback.classList.remove("come-ani");
        popup.classList.remove("come-ani");
        ResettingAllData()
    })

}

function ResettingAllData() {
    movies.innerHTML = "";
}

let imgArr = ["assets/movie1.webp", "assets/movie2.webp", "assets/movie3.webp", "assets/inguva.webp", "assets/movie4.webp", "assets/movie5.webp", "assets/water-man.webp"]
const coverPage = document.querySelector('.cover-image');

let i = 0
function changeCoverImg() {
    coverPage.classList.add("slow");
    while (i < imgArr.length) {
        coverPage.src = imgArr[i];
        break;
    }
    if (i === (imgArr.length - 1)) {
        i = 0;
    } else {
        i++
    }
    console.log(i);
}
// changeCoverImg()

setInterval(changeCoverImg, 5000)
setInterval(() => {
    coverPage.classList.remove("slow")
}, 10000)


//storing to localstorage
let data = JSON.parse(localStorage.getItem("Movie")) || [];
let idx = 0;
function Store(poster, Mname, ActName, ConName, LangName, Genre, Ratings, Rdate, Tname, Wname, Ryear, Vote, Plot) {

    let movie = {
        moviePoster: poster,
        movieName: Mname,
        actorsName: ActName,
        countryName: ConName,
        languageName: LangName,
        genre: Genre,
        ratings: Ratings,
        Date: Rdate,
        typeName: Tname,
        writerName: Wname,
        year: Ryear,
        vote: Vote,
        plot: Plot
    }
    data = data.filter(movi => movi.movieName !== Mname)
    data.push(movie)
    console.log("Stored data:", data);
    console.log("Incoming movie:", Mname);
    localStorage.setItem("Movie", JSON.stringify(data))
    creatingMovieCardViaLocalStorage(data, idx)
}

// Store()


//creating movie cards via local storage;
function creatingMovieCardViaLocalStorage(data, idx) {

    const saved_watchlist = document.querySelector(".saved-watchlist")
    const moviess = document.querySelector(".moviess")
    //movie poster
    let moviePoster = document.createElement("img");
    moviePoster.classList.add("poster");
    moviePoster.src = data[idx].moviePoster
    //movie infomation section
    let movieInformation = document.createElement("div");
    movieInformation.classList.add("movie-info");
    //heading section
    let heading = document.createElement("div");
    heading.classList.add("heading")
    //movie name
    let movieName = document.createElement("h4")
    movieName.textContent = data[idx].movieName;
    //btn section
    let buttonSection = document.createElement("div");
    buttonSection.classList.add('btn');
    //buttons
    let heartbtn = document.createElement('i');
    heartbtn.classList.add("fa-solid");
    heartbtn.classList.add("fa-heart");
    heartbtn.classList.add("remLoc")
    let closebtn = document.createElement("i");
    closebtn.classList.add("fa-solid")
    closebtn.classList.add("fa-circle-xmark");
    buttonSection.appendChild(heartbtn)
    buttonSection.appendChild(closebtn)
    heading.appendChild(movieName)
    heading.appendChild(buttonSection)
    movieInformation.appendChild(heading)
    //actor Section
    let actorsContainer = document.createElement("div");
    actorsContainer.classList.add("actors");
    //actor word
    let actorHeading = document.createElement("span");
    actorHeading.textContent = "Actors: ";
    actorsContainer.appendChild(actorHeading)
    //actors name
    let actorsName = document.createElement("div");
    actorsName.textContent = data[idx].actorsName;
    actorsContainer.appendChild(actorsName)
    movieInformation.appendChild(actorsContainer)
    //country section
    let countrySection = document.createElement("div");
    countrySection.classList.add("country")
    //country word
    let countryHeading = document.createElement("span");
    countryHeading.classList.add("countryHead");
    countryHeading.textContent = "Country: "
    countrySection.appendChild(countryHeading)
    //country name
    let countryName = document.createElement("span");
    countryName.classList.add("belongCountry");
    countryName.textContent = data[idx].countryName;
    countrySection.appendChild(countryName)
    movieInformation.appendChild(countrySection)
    //language section
    let languageSection = document.createElement("div");
    languageSection.classList.add("language")
    //language word
    let languageHeading = document.createElement("span");
    languageHeading.classList.add("countryHead");
    languageHeading.textContent = "Language: "
    languageSection.appendChild(languageHeading)
    //language name
    let languageName = document.createElement("span");
    languageName.classList.add("belongCountry");
    languageName.textContent = data[idx].languageName;
    languageSection.appendChild(languageName)
    movieInformation.appendChild(languageSection)
    //category section
    let categorySection = document.createElement("div");
    categorySection.classList.add("category");
    //category heading
    let categoryHeading = document.createElement("span");
    categoryHeading.classList.add("catHed")
    categoryHeading.textContent = "Category: "
    categorySection.appendChild(categoryHeading);
    //categories
    let genre = data[0].genre;
    for (let i = 0; i < genre.length; i++) {
        let categories = document.createElement("span");
        categories.classList.add("cat")
        categories.textContent = genre[i];
        categorySection.appendChild(categories)
    }
    movieInformation.appendChild(categorySection)
    //rating section
    let ratingSection = document.createElement("div");
    ratingSection.classList.add("ratings")
    //rats
    let ratsSection = document.createElement("div");
    ratsSection.classList.add("rats");
    //source span
    let sourceSpan = document.createElement("span");
    sourceSpan.classList.add("source");
    sourceSpan.textContent = "Internet Movie Database: ";
    //value/ratings
    let ratings = document.createElement("span");
    ratings.classList.add("value");
    ratings.textContent = data[idx].ratings;
    //rating icon
    let ratingIcon = document.createElement("i");
    ratingIcon.classList.add("fa-solid");
    ratingIcon.classList.add("fa-star");
    ratsSection.appendChild(sourceSpan);
    ratsSection.appendChild(ratings);
    ratsSection.appendChild(ratingIcon)
    ratingSection.appendChild(ratsSection)
    movieInformation.appendChild(ratingSection)
    //release section
    let releaseDate = document.createElement("div");
    releaseDate.classList.add("released");
    //released heading
    let releasedHeading = document.createElement("span");
    releasedHeading.classList.add("re-head")
    releasedHeading.textContent = "Released: "
    //release Date
    let Date = document.createElement("span")
    Date.textContent = data[idx].Date;
    releaseDate.appendChild(releasedHeading)
    releaseDate.appendChild(Date)
    movieInformation.appendChild(releaseDate)
    //type section
    let typeSection = document.createElement("div");
    typeSection.classList.add("type");
    //type heading
    let typeHeading = document.createElement("span");
    typeHeading.classList.add("typeHead");
    typeHeading.classList.add("ty-hd");
    typeHeading.textContent = "type: ";
    //type name
    let typeName = document.createElement("span");
    typeName.classList.add("typeHead");
    typeName.textContent = data[idx].typeName;
    typeSection.appendChild(typeHeading)
    typeSection.appendChild(typeName)
    movieInformation.appendChild(typeSection)
    //writer Section
    let writerSection = document.createElement("div");
    writerSection.classList.add("writer");
    //writer heading
    let writerHeading = document.createElement("span");
    writerHeading.classList.add("writerHed");
    writerHeading.textContent = "Writer: ";
    //writer Name
    let writerName = document.createElement("span");
    writerName.classList.add("writerName");
    writerName.textContent = data[idx].writerName;
    writerSection.appendChild(writerHeading)
    writerSection.appendChild(writerName)
    movieInformation.appendChild(writerSection)
    //year Section
    let yearSection = document.createElement("div");
    yearSection.classList.add("year");
    //year heading
    let yearHeading = document.createElement("span");
    yearHeading.classList.add("yearHed");
    yearHeading.textContent = "Year: ";
    //year
    let year = document.createElement("span");
    year.classList.add("yeargap");
    year.textContent = data[idx].year;
    yearSection.appendChild(yearHeading)
    yearSection.appendChild(year)
    movieInformation.appendChild(yearSection)
    //vote Section
    let voteSection = document.createElement("div");
    voteSection.classList.add("vote");
    //vote heading
    let voteHeading = document.createElement("span");
    voteHeading.classList.add("voteHed");
    voteHeading.textContent = "Vote: ";
    //total vote
    let vote = document.createElement("span");
    vote.classList.add("voteCount");
    vote.textContent = data[idx].votes;
    //vote icon
    let voteIcon = document.createElement("i");
    voteIcon.classList.add("fa-solid");
    voteIcon.classList.add("fa-thumbs-up")
    voteSection.appendChild(voteHeading)
    voteSection.appendChild(vote)
    voteSection.appendChild(voteIcon)
    movieInformation.appendChild(voteSection)
    //plot section
    let plotSection = document.createElement("div");
    plotSection.classList.add("plot");
    //plot heading
    let plotHeading = document.createElement("span");
    plotHeading.classList.add("plotHed");
    plotHeading.textContent = "Plot: "
    //plot
    let plot = document.createElement("p");
    plot.textContent = data[idx].plot;

    //start appending elements
    plotSection.appendChild(plotHeading);
    plotSection.appendChild(plot)
    movieInformation.appendChild(plotSection)
    //appending
    moviess.appendChild(moviePoster)
    moviess.appendChild(movieInformation)
    //event listener
    const heart = document.querySelector(".remLoc");
    const close = document.querySelector(".fa-circle-xmark");
    console.log("above heart", heart);
    
    heart.addEventListener("click", (e) => {
        console.log("in heart");
        
        heart.classList.remove("fa-heart");
        heart.classList.add("fa-heart-crack");
        let MovName = e.target.parentElement.parentElement.querySelector("h4").innerHTML;        
        data = data.filter(item => item.movieName.trim().toLowerCase() !== MovName.trim().toLowerCase())
        localStorage.setItem("Movie", JSON.stringify(data))
        moviess.innerHTML = ""
        creatingMovieCardViaLocalStorage(data,idx)
    })

    close.addEventListener("click", () => {
        saved_watchlist.classList.add("hide")
    })

}

//showing watchlist

const saved_watchlist = document.querySelector(".saved-watchlist")
const watchlistBtn = document.querySelector(".watchlist")
const main = document.querySelector("main")
watchlistBtn.addEventListener("click", () => {
    moviess.innerHTML = ''
    saved_watchlist.classList.remove("hide")
    console.log(idx);
    
    if(data.length === 0){
        moviess.textContent = "watchlist is empty"
    }
    else{
        creatingMovieCardViaLocalStorage(data, idx)
    }
})


//next & prev

let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
const moviess = document.querySelector(".moviess")
if(data.length === 0){ 
    next.disabled = true
    next.style.opacity = "0.4"
}
next.addEventListener("click", () => {
    if (idx < (data.length-1)) {
        idx++;
        console.log(idx);
        moviess.innerHTML = ""
        creatingMovieCardViaLocalStorage(data, idx)
    }
    else {
        idx = 0
        console.log(idx);
        moviess.innerHTML = ""
        creatingMovieCardViaLocalStorage(data, idx)
    }
})
if(data.length === 0){
    prev.disabled = true
    prev.style.opacity = "0.5"
}
prev.addEventListener("click", () => {
    if (idx >= 1) {
        idx--;
        console.log(idx);
        
        moviess.innerHTML = ""
        creatingMovieCardViaLocalStorage(data, idx)
    }
    else{
        console.log(idx);
        idx = (data.length-1)
        moviess.innerHTML = ""
        creatingMovieCardViaLocalStorage(data, idx)
    }
})