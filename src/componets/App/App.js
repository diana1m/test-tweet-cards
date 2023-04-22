import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchTweets } from '../../redux/operations';


const HomePage = lazy(() => import('../../pages/Home'));
const TweetsPage = lazy(() => import('../../pages/Tweets'));

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTweets());
      }, [dispatch]);

  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
