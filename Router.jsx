// src/Router.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ListingsPage from './pages/ListingsPage';

const RouterSetup = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/listings" element={<ListingsPage />} />
    </Routes>
  </Router>
);

export default RouterSetup;

