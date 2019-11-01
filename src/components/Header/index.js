import React from 'react';
import './Header.css';
import user from '../../assets/user.svg';
import facebook from '../../assets/facebook.svg'

function Header(){
  return (
    <header>
      <img className="home" src={facebook} alt="Facebook"/>
      <div className="perfil">
        <a href="">Meu perfil <img src={user} alt="User"/></a>
      </div>
    </header>
    )
}

export default Header;