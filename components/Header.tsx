import React from 'react';
import style from '../styles/Header.module.css';
import Image from 'next/image';
import youtubeLogo from '../public/images/YouTube-Logo-edited.wine.png';
import searchIcon from '../public/images/search-icon.svg';
import menuIcon from '../public/images/menu-icon.svg';
import voiceIcon from '../public/images/voice-input-icon.svg';
import createIcon from '../public/images/create-icon.svg';
import appsIcon from '../public/images/apps-icon.svg';
import notificationsIcon from '../public/images/notifications-icon.svg';

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
      <div className={style['search-input-container']}>
        <form action="/results">
          <input type="text" placeholder="Search" />
          <button title="Search">
            <Image src={searchIcon} alt="search icon" />
          </button>
        </form>
      </div>
      <div className={style['voice-input-container']}>
        <button title="Search with your voice">
          <Image src={voiceIcon} alt="mic icon" />
        </button>
      </div>
      <div className={style['create-icon-container']}>
        <Image src={createIcon} alt="create new video icon" />
      </div>
      <div className={style['apps-icon-container']}>
        <Image src={appsIcon} alt="apps icon" />
      </div>
      <div className={style['notifications-icon-container']}>
        <Image src={notificationsIcon} alt="notifications icon" />
      </div>
      .{style}>Image[src={notificationsIcon}] /

    </header>
  );
}

export default Header;
