import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export const Footer = ({ siteName, authors, ...props }) => {
  return (
    <footer className={styles['site-footer']}>
      <div className="page-width-wrapper">
        <span className={styles['site-footer_content']}>
        {siteName} &copy; { authors } { currentYear }
        </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
    siteName: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    siteName: 'Note Builder',
    authors: 'Mel and Joseph',
};
