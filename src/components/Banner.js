import "./Banner.css";
import iconPlay from "./images/iconplay.png";
import iconButton from "./images/Icon button.png";
import movieImage from "./images/Movie.png";
import shape from "./images/Shape.png";
import iconStar from "./images/Icon star.png";
import account from "./images/account.png";
import settings from "./images/settings.png";
import { useQuery } from "react-query";
import chevron from "./images/Chevron-Right.png"


function Banner() {
  const movies = useQuery({
    queryKey: "movies",
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=2d469ef1513c03e647c3c3a1e50de5b2"
      ).then((response) => response.json()), //para que es el then
  });

  if (movies.isLoading) return <h1>is loading...</h1>;
  if (movies.isError) return <pre>{JSON.stringify(movies.error)}</pre>; // que es el JSON.stringify

  console.log(movies);

  const bannerMovie = movies.data.results[0];

  const styleOverview={
    fontSize:20
  };
 

  return (
    <div
      className="container1 js-container1"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path})`,
      }}
    >
      <div className="menu">
        <a href="">
          <img src={iconPlay} className="icon1" />
        </a>
        <a href="">
          <img src={shape} className="icon2" />
        </a>
        <a href="">
          <img src={movieImage} className="icon3" />
        </a>
        <a href="">
          <img src={iconButton} className="icon4" />
        </a>
        <a href="">
          <img src={iconStar} className="icon5" />
        </a>
      </div>

      <div className="principal">
        <div className="settings">
          <a href="">
            <img src={account} className="icon1" />
          </a>
          <a href="">
            <img src={settings} className="icon1" />
          </a>
        </div>
        <div className="genre1"></div>
        <div className="js-movie-banner">
          <h2>{bannerMovie.original_title}</h2>
          <h3 className="overview" style={styleOverview}>{bannerMovie.overview}</h3>
          <button className="button1">Watch now</button>
        </div>
      </div>
    </div>  
    
  );
}

export default Banner;
