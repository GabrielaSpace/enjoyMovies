let pag =1;
const buttonPrevious =document.querySelector('#buttonPrevious');
const buttonNext =document.querySelector('#buttonNext');

buttonNext.addEventListener('click',()=>{

})



const showMov = async()=>{

    try{

        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=51112ea7b939c59385320c658bb3dc12`);
       // es para comprobar si e id de la pelicula es correcto
       if (resp.status === 200) {
        const dataBase = await resp.json();
        const popular = dataBase.results;
        let movies ='';
        popular.forEach(movie => {
            console.log(movie.title);   
            movies += `
            <div class ='movie' >
            <img class='cover' src='https://image.tmdb.org/t/p/w500/${movie.poster_path}'>
            </div>
            <h3 class='title'>${movie.title}</h3>`;
        });
        document.querySelector('#content').innerHTML = movies;
    } else if(resp.status === 401){
    console.log('coloca un id correcto');
} else if(resp.status === 404){
     console.log('La pelicula que buscas no existe');
    }}
   catch(error){console.log(error);
}
}
showMov()