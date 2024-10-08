import { Route, Routes } from "react-router-dom";
import MovieDetails from "src/features/movies/MovieDetails";
import MoviesList from "src/features/movies/MoviesList";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "src/common/ui/Layout";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesList />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
