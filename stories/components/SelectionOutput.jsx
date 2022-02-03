import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectionOutput.module.css';

export const SelectionOutput = ({
    generatedNotesArray,
    ...props }
  ) => {

  return (
    <aside className={styles["selection-output"]}>
        <h1 className={styles["selection-output_title"]}>Generated Notes</h1>
        <textarea className={styles['text-output']} defaultValue={generatedNotesArray}></textarea>
    </aside>
  );
};

SelectionOutput.propTypes = {
  noteArray: PropTypes.array.isRequired,
};

SelectionOutput.defaultProps = {
  noteArray: [],
};