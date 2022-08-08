import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className={styles.navbarContainer}>
      <p className={styles.logo}>
        <Link href='/'>UAL Tech</Link>
      </p>

      <button type='button' className={styles.cartIcon} onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className={styles.cartItemQty}>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
