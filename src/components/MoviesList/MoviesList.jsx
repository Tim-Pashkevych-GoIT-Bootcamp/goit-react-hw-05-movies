import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledList } from 'styles/Shared';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledList>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </StyledList>
  );
};
