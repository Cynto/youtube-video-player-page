import React from 'react';
import style from '../styles/Header.module.css';
import Image from 'next/image';
import youtubeLogo from '../public/images/YouTube-Logo-edited.wine.png';

function Header() {
  return (
    <header className={style.header}>
      <i className="fas fa-bars" />

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
        </form>
      </div>
    </header>
  );
}

export default Header;
