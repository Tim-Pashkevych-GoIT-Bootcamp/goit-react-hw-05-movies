import { useHttp } from 'hooks/useHttp';
import { useSearchParams } from 'react-router-dom';
import { findMovies } from 'services/api';
import { MoviesSearch, MoviesList, Loader } from 'components';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, isLoading } = useHttp({ fn: findMovies, query });

  const onSubmit = query => {
    setSearchParams(query ? { query } : {});
  };

  return (
    <>
      {isLoading && <Loader />}
      <section>
        <MoviesSearch onSubmit={onSubmit} />
      </section>
      <section>{data && <MoviesList movies={data} />}</section>
    </>
  );
};

export default Movies;
