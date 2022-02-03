import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../basics/Button';
import styles from './SelectionChoices.module.css';

export const SelectionChoices = ({
    arrCurrentList,
    parentInsertCallback,
    parentEditCallback,
    parentDeleteCallback,
    ...props
  }) => {

  const [editItemIsOpen, setEditItemIsOpen] = useState(null);
  const [editValue, setEditValue] = useState('');

  const onInsertClick = (itemKey, itemText) => {
    parentInsertCallback(itemKey, itemText);
  }

  const onEditClick = (itemKey, itemOriginalText) => {
    console.log(itemOriginalText);
    setEditItemIsOpen(itemKey);
    setEditValue(itemOriginalText);
  }

  const onEditCommitClick = (itemKey) => {
    console.log("Commit edit to ", itemKey);
    setEditItemIsOpen(null);
    parentEditCallback(itemKey, editValue);
  }

  const onEditRejectClick = (itemKey) => {
    console.log("Reject edit to ", itemKey);
    setEditItemIsOpen(null);
  }

  const onDeleteClick = (itemKey) => {
    parentDeleteCallback(itemKey);
  }

  return (
    <div className={styles["choice"]}>
        <ul className={styles["choice-list"]}>
          {
            arrCurrentList.map((item, index) => (
              <li key={item.itemId} data-id={item.itemId} className={styles["choice-list_item"]}>
                <div className={`button-list ${editItemIsOpen === item.itemId ? 'is-hidden' : ''}`}>
                  <Button
                    customClass="btn--blank primary-item btn-choice choice-list_insert"
                    label={item.text}
                    onClick={() => onInsertClick(item.itemId, item.text)}
                  />
                  <Button
                    customClass="btn--icon btn--edit choice-list_action"
                    label="Edit"
                    title={`Edit ${item.text}`}
                    onClick={() => onEditClick(item.itemId, item.text)}
                  />
                  <Button
                    customClass="btn--icon btn--delete choice-list_action"
                    label="Delete"
                    title={`Delete ${item.text}`}
                    onClick={() => onDeleteClick(item.itemId)}
                  />
                </div>
                <div className={`edit-list ${editItemIsOpen === item.itemId ? '' : 'is-hidden'}`}>
                  <input
                    type="text"
                    className="text-input primary-item"
                    defaultValue={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <Button
                    customClass="btn--icon btn--plus choice-list_action"
                    label="Commit Edit"
                    title="Commit Edit"
                    onClick={() => onEditCommitClick(item.itemId)}
                  />
                  <Button
                    customClass="btn--icon btn--clear choice-list_action"
                    label="Reject Edit"
                    title="Reject Edit"
                    onClick={() => onEditRejectClick(item.itemId)}
                  />
                </div>
              </li>
            ))
          }
        </ul>
    </div>
  );
};

SelectionChoices.propTypes = {
  arrCurrentList: PropTypes.array.isRequired,
};

SelectionChoices.defaultProps = {
  arrCurrentList: [],
};