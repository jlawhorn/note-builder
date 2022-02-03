import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../basics/Button';
import styles from './SelectionAddChoice.module.css';

export const SelectionAddChoice = ({ sectionText, parentCallback, ...props }) => {

  const [addDrawerIsOpen, setAddDrawerIsOpen] = useState(0);
  const [addText, setAddText] = useState('');

  return (
    <div className={styles["add-choice"]}>
        <Button
          customClass={`btn--toggle btn--icon-with-text ${addDrawerIsOpen ? "btn--minus" : "btn--plus"}`}
          label={`Add a new ${ sectionText }`}
          onClick={() => setAddDrawerIsOpen(!addDrawerIsOpen)}
        />
        <form
          className={`add-choice_form ${addDrawerIsOpen ? "" : "is-hidden"}`}
          onSubmit={
            (e) => {
              e.preventDefault();
              parentCallback(addText);
              setAddText('');
            }
          }
        >
            <fieldset className={styles["add-choice_fieldset"]}>
                <legend className={styles["add-choice_legend"]}><span className="sr-only">Add a { sectionText }</span></legend>
                <div className="field">
                  <label className="label" htmlFor="addChoice">{ sectionText } Contents</label>
                  <textarea
                    id="addChoice"
                    className="add-choice_input text-input text-input--full"
                    value={addText}
                    required="required"
                    onFocus={(e) => e.target.select()}
                    onChange={(e) => setAddText(e.target.value)}
                  ></textarea>
                </div>
                <Button customClass="btn--submit" isSubmit={true} label="Add choice to list" />
            </fieldset>
        </form>
    </div>
  );
};

SelectionAddChoice.propTypes = {
  sectionText: PropTypes.string.isRequired,
};

SelectionAddChoice.defaultProps = {
  sectionText: "Test",
};