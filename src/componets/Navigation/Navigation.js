import { useDispatch } from 'react-redux';
import { NavLinkStyled, NavigationWrapper } from './Navigation.styled';
import { changePage } from '../../redux/slice';

export const Navigation = () => {
  const dispatch = useDispatch();

  const goHome= () => {
    dispatch(changePage(1))
  }

  return (
    <NavigationWrapper>
      <NavLinkStyled to="/" onClick={goHome}>
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/tweets">
        Tweets
      </NavLinkStyled>
    </NavigationWrapper>
  );
};