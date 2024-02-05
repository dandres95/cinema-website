import "./Banner.css";
import { useQuery } from "react-query";
import starFill from "./images/Star Fill.png"

function Shows() {
  const shows = useQuery({
    queryKey: "shows",
    queryFn: () =>
      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=2d469ef1513c03e647c3c3a1e50de5b2"
      ).then((response) => response.json()),
  });

  if (shows.isLoading) return <h1> is loading...</h1>;
  if (shows.isError) return <pre>{JSON.stringify(shows.error)}</pre>;

  console.log(shows);

  const showSection = shows.data.results.slice(1, 4);

  console.log(showSection);

  return (
    <a href=""className="link-movie">
    <div className="container3">
      {showSection.map((show) => (
        <div
          className="got"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${show.poster_path})`,
          }}
        >
          <h1></h1>
          <div className="rating2">
            <img src={starFill} />
            <img src={starFill} />
            <img src={starFill} />
            <img src={starFill} />
            <img src={starFill} />
          </div>
          <h2>{show.original_name}</h2>
        </div>
      ))}
    </div>
    </a>
  );
}
export default Shows;
