import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SelectionMenu } from '../components/SelectionMenu';
import { SelectionOutput } from '../components/SelectionOutput';
import tabData from '../../data/tabs.js';
import styles from './Home.module.css';

const productName = "Note Builder!";
const siteAuthors = "Joseph Lawhorn and Melchizedek Ntim";

export const Home = ({ ...props }) => {
  const [noteArray, setNoteArray] = useState([]);
  const [noteTextArray, setNoteTextArray] = useState([]);

  const buildNoteContent = (rawArray) => {
    const outputArray = [];
    const uniqueArray = Array.from(new Set(rawArray));

    uniqueArray.forEach(item => {
      const deconstructCurrentId = item[0].itemId.split('-');
      const levelTitle = tabData.tabs[deconstructCurrentId.length - 2].title;
      outputArray.push(`${levelTitle} : ${item[0].itemText}`);
    });

    return outputArray.join('\n');
  }

  const noteArrayUpdateCallback = (newItemId, newItemText, isEndOfLine) => {
    const newArray = noteArray;
    newArray.push([{
      "itemId" : newItemId,
      "itemText" : `${newItemText}${isEndOfLine ? '\n' : ''}`
    }]);
    setNoteArray(newArray);
    setNoteTextArray(buildNoteContent(newArray, newItemId));
  }

  return (
    <div className="page-wrapper">
        <Header siteName="Note Builder!" />
        <main className={styles['site-main']}>
            <SelectionMenu
              parentNoteArrayUpdateCallback={noteArrayUpdateCallback}
            />
            <SelectionOutput
              generatedNotesArray={noteTextArray}
            />
        </main>
        <Footer siteName={productName} authors={siteAuthors} />
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};
