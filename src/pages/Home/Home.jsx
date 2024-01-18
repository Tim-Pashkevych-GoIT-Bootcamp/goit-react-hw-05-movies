import { useHttp } from 'hooks/useHttp';
import { fetchTrendingMovies } from 'services/api';
import { Loader, MoviesList } from 'components';
import { toast } from 'react-toastify';

const Home = () => {
  const params = { fn: fetchTrendingMovies };
  const { data: movies, isLoading, error } = useHttp(params);

  if (error) {
    toast.error(error);
  }

  return (
    <section>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </section>
  );
};

export default Home;
