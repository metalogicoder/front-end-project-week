import React from 'react';
//import { Link } from 'react-router-dom';

import '../styles/NoteList.css';
import { NoteCard } from './NoteCard';

export const NoteList = props => {
  return (
    <div className="NoteList">
      <h4>Your Notes:</h4>
      {/* If notes are empty then show filler message */}
      {props.notes.length ? props.notes.map(note => (
        <NoteCard key={note.id} note={note} /> )) : 
      <div className="NoteList_noNotesMessage">
        <p style={{marginTop: 0}}>There are currently no notes in your app</p>
        <p>Please click the button to the left to create one</p>
        <p>☜( ﾟヮﾟ☜)</p>
      </div>
    }
    </div>
  )
}