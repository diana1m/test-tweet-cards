import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Navigation } from '../Navigation/Navigation';

import { Header, Container } from './Layout.styled';

export const Layout = () => {
  return (
    <div >
      <Header>
        <Container>
            <Navigation />
        </Container>
      </Header>
      <Suspense fallback={<p>Loading...</p>}>
        <Container>
            <Outlet />
        </Container>
      </Suspense>
    </div>
  );
};