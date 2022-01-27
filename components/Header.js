import React from 'react';
import styles from "../styles/header.module.css"

function Header({ children }) {
  return <div>
    <div className={'card ' + styles.navbar}>
      <button className={styles.signupbtn + " card" }>Signup</button>
  </div>
  {children}
  </div>
}

export default Header;
