// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from './dashboardNavBar.module.css';
import ActionButton from "@/components/ui-components/ActionButton";
import { useRouter } from 'next/router';

const DashboardNavbar = ({ buttonLabel, handleButtonClick }) => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <Link href="/" style={{ justifyContent: 'spaceBetween', textDecoration: 'none', display: 'flex', textAlign: 'center', alignItems: 'center' }}>
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="Logo" style={{ height: '40px' }} />
        </div>
        <p style={{ padding: '20px', fontSize: '1em', fontWeight: 'bold' }}>2geda</p>
      </Link>
      <div style={{ justifyContent: 'spaceBetween', display: 'flex', textAlign: 'center', alignItems: 'center' }}>
        <input type='search' placeholder='Search Name, Place and Job' style={{ padding: '10px', margin: '10px',fontStyle: 'italics', width: '400px', fontSize: '0.8rem', borderRadius: '10px' }} />
        <div>
          <img src='/assets/logo.png' style={{height: '40px'}}/>
          <p>My Profile</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
