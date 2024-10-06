import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { MOVIEDB_IMAGES_URL } from "src/common/ui/constants";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { selectMovieById } from "./moviesSlice";

function MovieDetail() {
  const { movieId } = useParams();
  const movie = useSelector((state) => selectMovieById(state, movieId));
  return (
    <Box minH="100vh">
      <Link to="/">
        <IconButton
          mb={5}
          bg="white"
          border="1px"
          borderColor="gray.300"
          aria-label="Go back"
          icon={<ArrowBackIcon />}
        />
      </Link>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
          alt={`poster of ${movie.title} movie`}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{movie.title}</Heading>

            <Text py="2">{movie.overview}</Text>
          </CardBody>

          <CardFooter>
            <Button bg="green.300" color="white">
              Generate joke
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}

export default MovieDetail;
