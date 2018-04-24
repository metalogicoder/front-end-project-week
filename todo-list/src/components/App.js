import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import '../styles/App.css';
import { dummyNotes } from '../notes';
import { NoteList } from './NoteList';
import { NoteView } from './NoteView';
import { NoteForm } from './NoteForm';
import { Modal } from './Modal';


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: [] }
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  }

  componentDidMount() {
    this.getNotes();
    console.log(this.state.notes);
  }

  getNotes = () => {
    const notes = localStorage.getItem('notes');
    this.setState({ notes: notes });
  }
  
  createNote = note => {
    // Take in note title and body as object
    // Grab parsed localStorage notes (array of objects)
    localStorage.


    console.log(this.state.notes);
    //this.setState({ });
  }

  editNote = (note, id) => {

  }

  deleteNote = id => {

  }

  render() {
    return (
      <div className="App">
        <div className="App_sideBar">
          <h3>Lambda<br/>Notes</h3>
          <Link to="/" className="App_button">View Your Notes</Link>
          <Link to="/create" className="App_button">+Create New Note</Link>
        </div>
        <div className="App_body">
          <Route exact path="/" render={() => 
            <NoteList notes={this.state.notes}/> 
          }/>
          <Route path="/view/:id" render={props => 
            <NoteView {...props} notes={this.state.notes}/> 
          }/>
          <Route path="/create" render={props => 
            <NoteForm {...props} formUse="Create New Note" useFunction={this.createNote}/> 
          }/>
          <Route path="/edit/:id" render={props => 
            <NoteForm {...props} formUse="Edit Note" useFunction={this.editNote}/> 
          }/>
          <Route path="/view/:id/delete" render={props => 
            <Modal {...props} deleteNote={this.deleteNote}/> 
          }/>
        </div>
      </div>
    );
  }
}
