
import { useState,useEffect, useRef } from "react";
import * as notesAPI from '../../utilities/notes-api';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
import NoteListItem from '../../components/NoteListItem/NoteListItem';

import "./NotesPage.css"

export default function NotesPage({ user }) {
    const [notes, setNotes] = useState([]);

    const date = new Date(user.createdAt);
    const newDate = date.toLocaleDateString()

    function addNote(note) {
        setNotes([...notes, note]);
    }

    const notesRef = useRef([]); //Maybe this is not need

    useEffect(function() {
        async function getNotes() {
        const newNote = await notesAPI.indexNotes()
        // console.log("NOTES from USE EFFECT fxn:", newNote)
        notesRef.current = [(newNote.map(note => note.text))];
        setNotes(newNote)
    }
    getNotes()
    }, []);

    return (
        <div className='NotesPage'>
            <h1>Notes Page</h1>

            <h1>{user.name} <br />
            {newDate}
                {/* {user.createdAt.toLocaleDateString()} <br /> */}
                {user.email}
                {/* <h1>Note    {user.notes.text} </h1> */}
                {user.note}
                {/* NOTE:  {user.notes.text} */}
                {/* NOTE:  {console.log("USER.NOTES.ID", user)} */}
                {/* NOTE:  {user.notes._id} */}

            </h1>
            <NewNoteForm user={user} addNote={addNote} />


            <ul className="NoteList padding-0">

                    <NoteListItem notes={notesRef.current} addNote={addNote} key={user.notes._id} noteItems={notes} />

            </ul>
        </div>

    )
}

