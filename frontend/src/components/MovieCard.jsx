// MovieCard.jsx
// A React functional component that renders a single movie card UI
// It displays the movie poster, title, release date, and a favorite button.

function MovieCard({ movie }) { 
  // 'movie' is a prop passed from the parent component (App.jsx)
  // It is an object containing title, release_date, and url of the movie.

  // Function to handle click on the favorite button
  function onFavoriteClick() {
    // Shows an alert when the favorite button is clicked
    alert("You have clicked the favorite button!");
  }

  // Return JSX to render the MovieCard
  return (
    <div className="movie-card"> 
      {/* Outer container div for the movie card */}
      
      <div className="movie-poster">
        {/* Container for the movie poster image */}
        
        <img 
          src={movie.url} // The URL of the movie poster image
          alt={movie.title} // Alt text for accessibility (screen readers)
        />
        
        <div className="movie-overlay">
          {/* Overlay that appears on top of the poster (for favorite button) */}
          
          <button 
            className="favorite-btn" // CSS class for styling the button
            onClick={onFavoriteClick} // Click handler for the button
          ></button>
          
          {/* Heart symbol displayed inside overlay */}
          ♥
        </div>
      </div>

      <div className="movie-info">
        {/* Container for movie information below the poster */}
        
        <h3>{movie.title}</h3> 
        {/* Display movie title from the movie object */}
        
        <p>{movie.release_date}</p> 
        {/* Display movie release date from the movie object */}
      </div>
    </div>
  );  
}

// Export the MovieCard component to be used in other files (like App.jsx)
export default MovieCard;
