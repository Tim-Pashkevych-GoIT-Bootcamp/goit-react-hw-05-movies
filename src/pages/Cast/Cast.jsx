import { MOVIE_DB_IMAGE_URL } from 'helpers/constants';
import { useHttp } from 'hooks/useHttp';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieCasts } from 'services/api';
import { FaUserAlt } from 'react-icons/fa';
import { Loader } from 'components';
import { StyledCastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const params = { fn: fetchMovieCasts, recordId: movieId };
  const { data, isLoading, error } = useHttp(params);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      {isLoading && <Loader />}
      <StyledCastList>
        {data &&
          data.map(cast => (
            <li key={cast.cast_id}>
              {cast.profile_path ? (
                <img
                  src={`${MOVIE_DB_IMAGE_URL}${cast.profile_path}`}
                  alt={cast.name}
                  width={100}
                />
              ) : (
                <FaUserAlt size={100} />
              )}
              <div>
                <p>{cast.original_name}</p>
                <p>
                  <b>Character:</b>
                </p>
                <p> {cast.character}</p>
              </div>
            </li>
          ))}
      </StyledCastList>
    </>
  );
};

export default Cast;
