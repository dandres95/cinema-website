import "./Banner.css";
import { useQuery } from "react-query";
import starFill from "./images/Star Fill.png";

function Movies() {
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

  const movieSection = movies.data.results.slice(1, 6);

  return (
    <a href="" className="link-movie">
    <div className="container2">
      {movieSection.map((movie) => (
        <div
          key={movie.id}
          className="card"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
          }}
        >
          <div className="rating1">
            <img src={starFill} />
            <img src={starFill} />
            <img src={starFill} />
            <img src={starFill} />
            <img src={starFill} />
          </div>
          <h2>{movie.original_title}</h2>
        </div>
      ))}
    </div>
    </a>
  );
}

export default Movies;
