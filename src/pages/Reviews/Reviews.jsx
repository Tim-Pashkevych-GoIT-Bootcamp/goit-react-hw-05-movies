import { Loader, MovieReviewList } from 'components';
import { useHttp } from 'hooks/useHttp';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const params = { fn: fetchMovieReviews, recordId: movieId };
  const { data, isLoading, error } = useHttp(params);

  if (error) {
    toast.error(error);
  }
  return (
    <>
      {isLoading && <Loader />}
      {data && <MovieReviewList reviews={data} />}
    </>
  );
};

export default Reviews;
