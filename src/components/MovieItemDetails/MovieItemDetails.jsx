import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FaImage } from 'react-icons/fa';
import { format } from 'date-fns';
import { MOVIE_DB_IMAGE_URL } from 'helpers/constants';
import { Loader } from 'components';
import { StyledList } from 'styles/Shared';
import {
  StyledMovieDetailsAddInformationSection,
  StyledMovieDetailsSection,
  StyledMovieDetailsSectionContainer,
} from './MovieItemDetails.styled';

export const MovieItemDetails = ({ movie }) => {
  const location = useLocation();

  return (
    <>
      <StyledMovieDetailsSection>
        <StyledMovieDetailsSectionContainer>
          <div>
            {movie.poster_path ? (
              <img
                src={`${MOVIE_DB_IMAGE_URL}${movie.poster_path}`}
                alt={movie.original_title}
                width={300}
              />
            ) : (
              <FaImage size={300} />
            )}
          </div>
          <div>
            <h1>
              {movie.original_title}
              {movie.release_date &&
                `(${format(new Date(movie.release_date), 'yyyy')})`}
            </h1>
            <p>{`User Score: ${Math.round(movie.vote_average * 10)}%`}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <StyledList className="genres">
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </StyledList>
          </div>
        </StyledMovieDetailsSectionContainer>
        <StyledMovieDetailsAddInformationSection>
          <h2>Additional information</h2>
          <StyledList className="addMenuList">
            <li>
              <NavLink to="cast" state={{ from: location.state?.from }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </NavLink>
            </li>
          </StyledList>
        </StyledMovieDetailsAddInformationSection>
        <section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </StyledMovieDetailsSection>
    </>
  );
};
