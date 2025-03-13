import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const location = useLocation();

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ['/login', '/register'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />} {/* ✅ Hide Navbar on Login/Register */}
      <div style={{ padding: '20px' }}>
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
