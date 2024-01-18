import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components';
import { StyledMovieDetailsSection } from './MovieItemDetails.styled';
import { MovieItemDetailsGeneral } from 'components/MovieItemDetailsGeneral/MovieItemDetailsGeneral';
import { MovieItemDetailsAdditional } from 'components/MovieItemDetailsAdditional/MovieItemDetailsAdditional';

export const MovieItemDetails = ({ movie }) => {
  const location = useLocation();

  return (
    <>
      <StyledMovieDetailsSection>
        <MovieItemDetailsGeneral movie={movie} />
        <MovieItemDetailsAdditional location={location} />
        <section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </StyledMovieDetailsSection>
    </>
  );
};
