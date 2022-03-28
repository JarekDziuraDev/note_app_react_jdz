import React, { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';

import NoteList from './components/NotesList.js';
import Search from './components/Search.js';
import Header from './components/Header.js';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is my first notes',
      date: '28/03/2022',
    },
    {
      id: nanoid(),
      text: 'this is my second notes',
      date: '29/03/2022',
    },
    {
      id: nanoid(),
      text: 'this is my third notes',
      date: '30/03/2022',
    },
  ]);

  const [searchText, setSearchNote] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem(
      'react-notes-app-data'
    ));
    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes)
    );
  }, [notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    // console.log(newNote);
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    // console.log(id);
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchNote}/>
        <NoteList 
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
            )} 
            handleAddNote={addNote} 
            handleDeleteNote={deleteNote}
            />
      </div>
    </div>
  )
}

export default App;