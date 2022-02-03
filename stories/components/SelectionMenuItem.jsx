import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SelectionFilter } from './SelectionFilter';
import { SelectionAddChoice } from './SelectionAddChoice';
import { SelectionChoices } from './SelectionChoices';
import styles from './SelectionMenuItem.module.css';

export const SelectionMenuItem = ({
        activeLevel,
        currentDomainText,
        currentDomain,
        currentDiagnosis,
        currentIntervention,
        currentResponse,
        currentFilterText,
        currentFilteredOptions,
        parentChoiceChosenCallback,
        parentFilterChangeCallback,
        ...props
    }) => {

    const filterCallback = (filterText) => {
        console.log("Filter base on: ", filterText);
        parentFilterChangeCallback(filterText);
    }

    const addItemCallback = (itemText) => {
        console.log("Add item: ", itemText);
    }

    const insertItemCallback = (itemId, itemText) => {
        console.log("Insert item id: ", itemId);
        parentChoiceChosenCallback(itemId, itemText);
    }

    const editItemCallback = (itemId, editText) => {
        console.log(`Edit item id ${itemId} text to ${editText}`);
    }

    const deleteItemCallback = (itemId) => {
        console.log("Delete item id: ", itemId);
    }

    return (
        <section className={styles["selection-section"]}>
            <SelectionFilter
                currentFilterText={currentFilterText}
                parentCallback={filterCallback}
            />
            <SelectionChoices
                arrCurrentList={currentFilteredOptions}
                parentInsertCallback={insertItemCallback}
                parentEditCallback={editItemCallback}
                parentDeleteCallback={deleteItemCallback}
            />
            <SelectionAddChoice
                sectionText={currentDomainText}
                parentCallback={addItemCallback}
            />
        </section>
    );
};

SelectionMenuItem.propTypes = {
    activeLevel: PropTypes.number.isRequired,
    currentDomainText: PropTypes.string.isRequired,
    currentDomain: PropTypes.string,
    currentDiagnosis: PropTypes.string,
    currentIntervention: PropTypes.string,
    currentResponse: PropTypes.string
};

SelectionMenuItem.defaultProps = {
    activeLevel: 0,
    currentDomainText: 'Diagnosis',
    currentDomain: null,
    currentDiagnosis: null,
    currentIntervention: null,
    currentResponse: null
};
