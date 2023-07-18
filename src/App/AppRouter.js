import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams  } from 'react-router-dom';
import DashBoard from '../pages/DashBoard';
import Home from '../pages/Home';
// import Error404 from '../pages/Error404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:id" element={<DashboardWrapper />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </Router>
  );
};

const DashboardWrapper = () => {
  const params = useParams();
  const { id } = params;

  return <DashBoard id={id} />;
};

export default AppRouter;
