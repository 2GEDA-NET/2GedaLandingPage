// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from './navBar.module.css';
import ActionButton from "@/components/ui-components/ActionButton";
import { useRouter } from 'next/router';

const Navbar = ({ buttonLabel, handleButtonClick }) => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="Logo" style={{ height: '40px' }} />
        </div>
      </Link>
      {/* <input type = 'search' placeholder/> */}
      <ActionButton
        label={buttonLabel}
        inverse={true}
        onClick={handleButtonClick}
        style={{ padding: '10px 30px' }}
      />
    </div>
  );
};

export default Navbar;
