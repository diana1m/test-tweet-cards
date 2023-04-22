import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <NavLinkStyled to="/">
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/tweets">
        Tweets
      </NavLinkStyled>
    </>
  );
};