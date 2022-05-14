import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css'

// Componentes y funciones
import SearchBar from '../SearchBar'

const NavBar = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Henry's
        {/* <img src="https://i.imgur.com/Q9XcQ9I.png" alt="logo" /> */}
      </NavLink>
      <nav className={styles.navbar}>

        {/* el navlink se utiliza para saber si esta activo o no */}
        <ul className={styles.links__ul}>

          <NavLink
            className={styles.links__a}
            // className={({ isActive }) => {
            //     return isActive ? 'is-active' : '';
            // }}
            to='/create-user'
          >
            Sign Up
          </NavLink>
          <SearchBar />
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;