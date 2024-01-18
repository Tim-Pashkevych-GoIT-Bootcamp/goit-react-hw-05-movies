import { useHttp } from 'hooks/useHttp';
import { useSearchParams } from 'react-router-dom';
import { findMovies } from 'services/api';
import { MoviesSearch, MoviesList, Loader } from 'components';
import { StyledHeaderSection, StyledSection } from 'styles/Shared';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, isLoading } = useHttp({ fn: findMovies, query });

  const onSubmit = query => {
    setSearchParams(query ? { query } : {});
  };

  return (
    <>
      <StyledHeaderSection>
        <StyledSection>
          <MoviesSearch onSubmit={onSubmit} />
        </StyledSection>
      </StyledHeaderSection>
      <StyledSection>
        {isLoading && <Loader />}
        <section>{data && <MoviesList movies={data} />}</section>
      </StyledSection>
    </>
  );
};

export default Movies;
