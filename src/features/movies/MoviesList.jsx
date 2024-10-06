import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { MOVIEDB_IMAGES_URL } from "src/common/ui/constants";
import { selectAllMovies } from "./moviesSlice";

function MoviesList() {
  const movies = useSelector(selectAllMovies); //passed function has access to whole state of my whole app and then I just say what exactly I want to take from my state. In the case I am taking movies, where I basically have the list of movies. This name is specify is the store.
  return (
    <>
      <Heading textAlign="center" size="xl" mb={6}>
        Trending Movies
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} spacing={4}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
            overview={movie.overview}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default MoviesList;
