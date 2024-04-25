import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NotesPage from '../NotesPage/NotesPage';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NewNoteForm from '../NewNoteForm/NewNoteForm';


export default function App() {
  const [user, setUser] = useState(getUser())
  const [notes, setNewNotes] = useState([
    { text: "" },

  ]);
  function addNote(note) {
    setNewNotes([...notes, note]);
  }

  return (
    <main className="App">
      {user ?
        <>
          {notes.length ? (
            <h2>No Notes Yet!</h2>
          ) : (
            <ul>
              {notes.map(note => (
                <li key={note._id}>{note.text}</li>
              ))}
            </ul>
          )}
          <hr />
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes" element={<NotesPage user={user} notes={notes} addNote={addNote} />} />
          </Routes>
          <NewNoteForm user={user} addNote={addNote} />
        </>
        : <AuthPage setUser={setUser} />}
    </main>
  );
}



