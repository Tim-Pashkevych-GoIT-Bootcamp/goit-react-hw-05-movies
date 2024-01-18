import {
  StyledLoaderBackdrop,
  StyledLoaderBackdropContent,
} from './Loader.module';

export const Loader = () => {
  return (
    <StyledLoaderBackdrop>
      <StyledLoaderBackdropContent>
        <span className="loader"></span>
      </StyledLoaderBackdropContent>
    </StyledLoaderBackdrop>
  );
};
