import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SelectionMenuItem } from './SelectionMenuItem';
import tabData from '../../data/tabs.js';
import structureData from '../../data/structure.js';
import styles from './SelectionMenu.module.css';

export const SelectionMenu = ({
    parentNoteArrayUpdateCallback,
    ...props
  }) => {

  const [activeLevel, setActiveLevel] = useState(0);
  const [currentDomainText, setCurrentDomainText] = useState("Diagnosis");
  const [currentDomain, setCurrentDomain] = useState('0');
  const [currentDiagnosis, setCurrentDiagnosis] = useState();
  const [currentIntervention, setCurrentIntervention] = useState();
  const [currentResponse, setCurrentResponse] = useState();
  const [filterText, setFilterText] = useState('');

  const resetCurrentNoteChunk = () => {
    console.log('Reset');
    setActiveLevel(0);
    setCurrentDomainText("Diagnosis");
    setCurrentDomain('0');
    setCurrentDiagnosis('');
    setCurrentIntervention('');
    setCurrentResponse('');
    setFilterText('');
  }

  const filterToLevel = () => {
    let newArray = [];
    if(activeLevel === 0) {
        structureData[currentDomain].choices.forEach(element => newArray.push(element));
    } else if(activeLevel === 1) {
      newArray = structureData[currentDomain].choices.filter(diagnosis => diagnosis.itemId === `${currentDomain}-${currentDiagnosis}`)[0].choices;
    } else if(activeLevel === 2) {
      newArray = structureData[currentDomain].choices.filter(diagnosis => diagnosis.itemId === `${currentDomain}-${currentDiagnosis}`)[0].choices;
      newArray = newArray.filter(intervention => intervention.itemId === `${currentDomain}-${currentDiagnosis}-${currentIntervention}`)[0].choices;
    } else {
      console.error('Filter level error');
    }
    return newArray;
  }

  const filterList = (filterTerm) => {
    if(activeLevel !== 3) {
      const arrSet = filterToLevel();
      if(filterTerm) {
          if(activeLevel === 0) {
              return arrSet.diagnosis.filter(word => word.toLowerCase().includes(filterTerm.toLowerCase()));
          }
      }
      return arrSet;
    }
  }

  const filterSetCallback = (filterText) => {
    setFilterText(filterText);
  }

  const choiceChosenCallback = (currentItemId, currentItemText) => {
    const deconstructCurrentId = currentItemId.split('-');
    let resetFlag = false;
    if(deconstructCurrentId.length >= 1) {
      setCurrentDomain(deconstructCurrentId[0]);
      if(deconstructCurrentId.length >= 2) {
        setCurrentDiagnosis(deconstructCurrentId[1]);
        if(deconstructCurrentId.length >= 3) {
          setCurrentIntervention(deconstructCurrentId[2]);
          if(deconstructCurrentId.length >= 4) {
            setCurrentResponse(deconstructCurrentId[3]);
            resetFlag = true;
          }
        }
      }
    }
    parentNoteArrayUpdateCallback(currentItemId, currentItemText, resetFlag);
    setActiveLevel(deconstructCurrentId.length - 1);
    if(activeLevel <= 1) {
      setCurrentDomainText(tabData.tabs[deconstructCurrentId.length - 1].title);
    }
    if(resetFlag) {
      resetCurrentNoteChunk();
    }
  }

  const rollProcessBack = (toTab) => {
    if (toTab < activeLevel) {
      setActiveLevel(toTab);
    }
  }

  return (
    <nav className={styles["selection-menu"]}>
      <div className={styles["tabs"]}>
        {
          tabData.tabs.map((tabInstance, index) => (
            <button
              type="button"
              className={`btn btn--blank ${styles["tab"]} ${activeLevel === index ? styles["tab--active"] : '' }`}
              key={index}
              data-level={index + 1}
              data-domain={tabInstance.title}
              disabled={activeLevel <= index}
              onClick={() => rollProcessBack(index)}
            >
              <span className={styles["tab-title"]}>{tabInstance.title}</span>
            </button>
          ))
        }
      </div>
      <SelectionMenuItem
        activeLevel={activeLevel}
        currentDomainText={currentDomainText}
        currentDomain={currentDomain}
        currentDiagnosis={currentDiagnosis}
        currentIntervention={currentIntervention}
        currentResponse={currentResponse}
        currentFilterText={filterText}
        currentFilteredOptions={filterList(filterText)}
        parentChoiceChosenCallback={choiceChosenCallback}
        parentFilterChangeCallback={filterSetCallback}
      />
    </nav>
  );
};

SelectionMenu.propTypes = { };

SelectionMenu.defaultProps = { };
