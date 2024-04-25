// import * as usersService from '../../utilities/users-service';
// import { useState } from "react";
// import NewNoteForm from "../NewNoteForm/NewNoteForm"
import NoteListItem from '../../components/NoteListItem/NoteListItem';
import "./NotesPage.css"

export default function NotesPage({ user, notes }) {

    return (
        <div className='NotesPage'>
            <h1>Notes Page</h1>

            <h1>{user.name} <br />
                {user.createdAt} <br />
                {user.email}
                {user.note}
            </h1>


            <ul className="NoteList padding-0">
                {notes.map((n, idx) => (
                    <NoteListItem index={idx} note={n} key={idx} />
                ))}
            </ul>
        </div>

    )
}

