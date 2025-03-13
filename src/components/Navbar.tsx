import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../auth/authSlice';

const Navbar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>
        Home
      </Link>
      <Link to="/about" style={styles.link}>
        About
      </Link>
      <Link to="/contact" style={styles.link}>
        Contact
      </Link>

      {!user ? (
        <>
          <Link to="/login" style={styles.link}>
            Login
          </Link>
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </>
      ) : (
        <button onClick={() => dispatch(logout())} style={styles.button}>
          Logout
        </button>
      )}
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: 'flex',
    gap: '20px',
    padding: '10px',
    background: '#333',
    color: 'white',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  button: {
    marginLeft: '20px',
    padding: '8px 15px',
    cursor: 'pointer',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Navbar;
