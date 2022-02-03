import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../basics/Logo';
import styles from './Header.module.css';

export const Header = ({ siteName, ...props }) => {
  return (
    <header className={styles['site-header']}>
      <div className={styles['site-header_content']}>
        <Logo siteName={siteName} logoSrc="https://via.placeholder.com/120x70" />
        <h1 className={styles['site-title']}>{siteName}</h1>
      </div>
    </header>
  );
};

Header.propTypes = {
    siteName: PropTypes.string.isRequired,
};

Header.defaultProps = {
    siteName: 'Note Builder',
};
