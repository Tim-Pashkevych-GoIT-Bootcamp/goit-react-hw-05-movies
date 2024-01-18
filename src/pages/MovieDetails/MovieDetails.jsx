import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'services/api';
import { useHttp } from 'hooks/useHttp';
import { Loader, MovieItemDetails } from 'components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const params = { fn: fetchMovieDetails, recordId: movieId };
  const { data, isLoading, error } = useHttp(params);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      {isLoading && <Loader />}
      {data && <MovieItemDetails movie={data} />}
    </>
  );
};

export default MovieDetails;
