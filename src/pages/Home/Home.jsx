import { useHttp } from 'hooks/useHttp';
import { fetchTrendingMovies } from 'services/api';
import { Loader, MoviesList } from 'components';
import { toast } from 'react-toastify';
import { StyledHeaderSection, StyledSection } from 'styles/Shared';

const Home = () => {
  const params = { fn: fetchTrendingMovies };
  const { data: movies, isLoading, error } = useHttp(params);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <StyledHeaderSection>
        <StyledSection>
          <h1>Trending today</h1>
        </StyledSection>
      </StyledHeaderSection>
      <StyledSection>
        {isLoading && <Loader />}
        {movies && <MoviesList movies={movies} />}
      </StyledSection>
    </>
  );
};

export default Home;
