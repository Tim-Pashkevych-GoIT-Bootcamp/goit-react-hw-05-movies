import { StyledMovieDetailsSectionContainer } from 'components/MovieItemDetails/MovieItemDetails.styled';
import { format } from 'date-fns';
import { MOVIE_DB_IMAGE_URL } from 'helpers/constants';
import { FaImage } from 'react-icons/fa';
import { StyledList } from 'styles/Shared';

export const MovieItemDetailsGeneral = ({ movie }) => {
  return (
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
  );
};
