fetch("http://img.omdbapi.com/?apikey=[yourkey]&", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});