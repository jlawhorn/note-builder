import React from 'react';
import PropTypes from 'prop-types';

export const Logo = ({ logoSrc, siteName, ...props }) => {
  return (
    <div className="site-logo">
        <img
            src={logoSrc}
            alt={siteName}
            className="site-logo_image"
        />
    </div>
  );
};

Logo.propTypes = {
    siteName: PropTypes.string.isRequired,
    logoSrc: PropTypes.string.isRequired,
};

Logo.defaultProps = {
    siteName: 'Note Builder',
    logoSrc: 'https://via.placeholder.com/100x100',
};