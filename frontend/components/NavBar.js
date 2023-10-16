// frontend/components/NavBar.js

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
      <Link href="/">
        <a style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</a>
      </Link>
      {/* Add more navigation links as needed */}
    </nav>
  );
};

export default NavBar;