import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    isSubmit,
    customClass,
    title,
    label,
    ...props
  }) => {
  return (
    <button
      title={title? title : label}
      className={`btn ${customClass}`}
      type={isSubmit? "submit" : "button"}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  customClass: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  customClass: 'btn-unset',
  title: "",
  label: "Button",
  isSubmit: false,
  onClick: undefined,
};
