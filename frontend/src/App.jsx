import "./App.css";
import MovieCard from "./components/MovieCard";
function App(){
  return(
    <>
    <MovieCard movie = {{title:"The Shawshank Redemption", release_date: "2024", url: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"}}/>
    </>
  );
}
export default App;