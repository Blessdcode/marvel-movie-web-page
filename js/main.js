/** @format */

const reviews = [
	{
		id: 1,
		img: "header-1",
		name: "Spider-Man",
		text: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. ",
	},
	{
		id: 2,
		img: "header-2",
		name: "Logan",
		text: "Logan comes out of retirement to escort a young mutant named Laura to a safe place. ",
	},
	{
		id: 3,
		img: "header-3",
		name: "incredible hulk",
		text: "Dr Bruce Banner subjects himself to high levels of gamma radiation which triggers his transformation into a huge green creature. ",
	},
	{
		id: 4,
		img: "header-4",
		name: "Captain America",
		text: "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. ",
	},
];

const authorEl = document.querySelector(".author");
const infoEl = document.querySelector(".info");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
const pagiNum = document.querySelector(".pagi-num");
const imgEl = document.querySelector("#hero-img");
const menuBtn = document.querySelector(".menu-btn");
const buger = document.querySelector(".nav-icon");
const navLink = document.querySelector(".nav-links");
const cardEl = document.querySelector(".latest-cards");
const tvCardEl = document.querySelector(".tvCard");
//  set starting item

let currentItem = 0;
let timeOut;
//  load initial item

window.addEventListener("DOMContentLoaded", function () {
	showPerson(currentItem);
	// setTimeout()
});

showPerson(currentItem);

// show base on item

function showPerson() {
	const item = reviews[currentItem];
	imgEl.src = `images/${item.img}.png`;
	authorEl.textContent = item.name;
	infoEl.textContent = item.text;
}

//  next slide
nextEl.style.transition = ".3s";

nextEl.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
	// clearTimeout(timeOut)
});

pagiNum.addEventListener("click", function () {
	currentItem++;
});

//  prev slide

prevEl.addEventListener("click", function () {
	currentItem--;

	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
	clearInterval(timeOut);
});

// timeOut = setTimeout(() => {
//     currentItem++
//     showPerson(currentItem)
// }, 3000)

setInterval(() => {
	currentItem++;
	if (currentItem >= reviews.length) {
		currentItem = 0;
	}
	showPerson(currentItem);
}, 3000);

// NavBar

buger.addEventListener("click", () => {
	navLink.classList.add("showMenu");
});

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		navLink.classList.add("showMenu");

		showMenu = true;
	} else {
		navLink.classList.remove("showMenu");

		showMenu = false;
	}
}


let moviesArray = [];

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWNkN2QyYjAzMzg3MDgxZGY4MjAxMDAzNjc5NDEwYiIsInN1YiI6IjY2Mzk2YTFkOTRkOGE4MDEyNjMzY2YwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PBE0E4bVRJ75J9-zHAYDrmYiVF2en0CE0kg_QvwsqoM",
	},
};

let pages = 4;
const numMovies = 1;

// Now Playing
async function getMovies() {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&count=${numMovies}`,

			options
		);
		const data = await response.json();
		const moviesArray = data.results;
		moviesArray.forEach((movie) => {
			const card = document.createElement("div");
			card.classList.add("latest-card");

			const image = document.createElement("div");
			image.classList.add("image");

			if (movie.poster_path) {
				// Check if poster_path is available
				const imageUrl = document.createElement("img");
				imageUrl.src =
					"https://image.tmdb.org/t/p/w500" + movie.poster_path;
				imageUrl.alt = movie.original_title;
				imageUrl.classList.add("img-fluid");
				image.appendChild(imageUrl);
			} else {
				// If no poster path available, you might want to show a placeholder image or some default content
				image.textContent = "No image available";
			}

			const movieTitle = document.createElement("h3");
			movieTitle.classList.add("text-white");
			movieTitle.textContent = movie.title;

			const cardDet = document.createElement("div");
			cardDet.classList.add("detail", "text-white");
			// cardDet.textContent = movie.overview;

			const movieTime = document.createElement("p");
			movieTime.classList.add("time");
			movieTime.textContent = movie.vote_average.toFixed(1);

			const span = document.createElement("span");

			const date = document.createElement("p");
			date.classList.add("date");
			date.textContent = movie.release_date;

			card.append(image, movieTitle, cardDet);
			cardDet.append(movieTime, span, date);
			cardEl.appendChild(card);
		});
	} catch (error) {
		console.log(error);
	}
}

getMovies();

// Tv show
let tvArrays = [];
async function getTvs() {
	try {
		const response = await fetch(
			"https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc",
			options
		);
		const data = await response.json();
		const moviesArray = data.results;
		moviesArray.forEach((movie) => {
			const card = document.createElement("div");
			card.classList.add("latest-card");

			const image = document.createElement("div");
			image.classList.add("image");

			if (movie.poster_path) {
				// Check if poster_path is available
				const imageUrl = document.createElement("img");
				imageUrl.src =
					"https://image.tmdb.org/t/p/w500" + movie.poster_path;
				imageUrl.alt = movie.original_title;
				imageUrl.classList.add("img-fluid");
				image.appendChild(imageUrl);
			} else {
				// If no poster path available, you might want to show a placeholder image or some default content
				image.textContent = "No image available";
			}

			const movieTitle = document.createElement("h3");
			movieTitle.classList.add("text-white");
			movieTitle.textContent = movie.name;

			const cardDet = document.createElement("div");
			cardDet.classList.add("detail", "text-white");
			// cardDet.textContent = movie.overview;

			const movieTime = document.createElement("p");
			movieTime.classList.add("time");
			movieTime.textContent = movie.vote_average.toFixed(1);

			const span = document.createElement("span");

			const date = document.createElement("p");
			date.classList.add("date");
			date.textContent = movie.release_date;

			card.append(image, movieTitle);
			cardDet.append(movieTime);
			tvCardEl.appendChild(card);
		});
	} catch (error) {
		console.log(error);
	}
}
getTvs();
