import React from 'react';
import style from '../styles/Header.module.css';
import Image from 'next/image';
import youtubeLogo from '../public/images/YouTube-Logo-edited.wine.png';
import searchIcon from '../public/images/search-icon.svg';
import menuIcon from '../public/images/menu-icon.svg';

function Header() {
  return (
    <header className={style.header}>
      <Image src={menuIcon} height={24} width={24} alt="menu icon" />

      <div className={style['youtube-logo-container']}>
        <Image
          src={youtubeLogo}
          height={120}
          width={552}
          alt="youtube logo"
          objectFit="contain"
        />
      </div>
      <div className={style['input-container']}>
        <form action="/results">
          <input type="text" placeholder="Search" />
          <button title="Search">
            <Image src={searchIcon} alt="search icon" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
