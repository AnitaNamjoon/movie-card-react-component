// App.jsx
// Main App component of the React application
// Responsible for rendering the MovieCard component

import "./App.css"; 
// Import CSS file for styling the App and its components

import MovieCard from "./components/MovieCard"; 
// Import MovieCard component from the components folder

function App() {
  // App component is a functional component
  return (
    <>
      {/* React Fragment: a wrapper that doesn't create extra HTML */}
      
      <MovieCard
        movie={{
          // Passing a 'movie' object as a prop to the MovieCard component
          title: "The Shawshank Redemption", // Movie title
          release_date: "2024",              // Movie release year
          url: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" 
          // URL for the movie poster image
        }}
      />
    </>
  );
}

// Export App component so it can be used by index.js (entry point)
export default App;
