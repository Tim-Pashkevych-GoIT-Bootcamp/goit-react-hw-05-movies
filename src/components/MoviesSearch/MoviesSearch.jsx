import { useForm } from 'react-hook-form';
import { StyledSearchFormContainer } from './MoviesSearch.styled';

export const MoviesSearch = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <StyledSearchFormContainer>
      <form onSubmit={handleSubmit(data => onSubmit(data.query))}>
        <label>
          <input
            type="text"
            autoComplete="off"
            {...register('query', { required: true })}
          />
        </label>
        <button>Search</button>
      </form>
    </StyledSearchFormContainer>
  );
};
