import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Flex, Heading, SimpleGrid, Spinner, useToast } from "@chakra-ui/react";
import { MOVIEDB_IMAGES_URL } from "src/common/constants";
import {
  fetchMovies,
  selectAllMovies,
  selectMoviesError,
  selectMoviesStatus,
} from "./moviesSlice";
import { useEffect } from "react";

function MoviesList() {
  const dispatch = useDispatch();
  const toast = useToast();
  const movies = useSelector(selectAllMovies); //passed function has access to whole state of my whole app and then I just say what exactly I want to take from my state. In the case I am taking movies, where I basically have the list of movies. This name is specify is the store.
  const moviesStatus = useSelector(selectMoviesStatus);
  const moviesError = useSelector(selectMoviesError);

  console.log(movies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchMovies()).unwrap();
      } catch (err) {
        toast({
          title: "Failed to load movies",
          description:
            err.message ||
            "Please refresh the page and check your internet connection!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    fetchData();
  }, [dispatch, toast]);

  let content;
  if (moviesStatus === "succeeded") {
    content = (
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
    );
  } else if (moviesStatus === "loading") {
    content = (
      <Flex alignItems="center" justifyContent="center" minH="100vh">
        <Spinner text="Loading..." />
      </Flex>
    );
  } else if (moviesStatus === "failed") {
    content = (
      <Flex alignItems="center" justifyContent="center" minH="100vh">
        {moviesError}
      </Flex>
    );
  }

  return (
    <>
      <Heading textAlign="center" size="xl" mb={6}>
        Trending Movies
      </Heading>
      {content}
    </>
  );
}

export default MoviesList;
