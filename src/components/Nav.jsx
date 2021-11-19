import React from 'react';
import Logo from '../Images/logo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
//importo Link
import { Link } from "react-router-dom"
//dentro del componente hago los linkeos necesarios.


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Fer-Dev - Weather App
        </span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
