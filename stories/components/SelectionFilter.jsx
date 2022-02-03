import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../basics/Button';

export const SelectionFilter = ({ parentCallback, ...props }) => {

  return (
    <div className="filter">
      <div className="field">
          <input
            type="search"
            className="filter_control text-input text-input--search text-input--full"
            placeholder="Filter Choices"
            onChange={(e) => {
              parentCallback(e.target.value);
            }}
            onKeyUp={(e) => {
              parentCallback(e.target.value);
            }}
          />
      </div>
    </div>
  );
};

SelectionFilter.propTypes = { };

SelectionFilter.defaultProps = { };
