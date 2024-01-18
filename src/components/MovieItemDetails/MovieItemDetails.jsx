import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaImage } from 'react-icons/fa';
import { format } from 'date-fns';
import { MOVIE_DB_IMAGE_URL } from 'helpers/constants';

export const MovieItemDetails = ({ movie }) => {
  const location = useLocation();
  const score = Math.round(movie.vote_average * 10);
  const releaseYear = format(new Date(movie.release_date), 'yyyy');

  return (
    <>
      <section>
        <div>
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
            <h2>{`${movie.original_title}(${releaseYear})`}</h2>
            <p>{`User Score: ${score}%`}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};
