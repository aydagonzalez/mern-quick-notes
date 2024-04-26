// import "./SkillListItem.css";

// export default function NoteListItem({ notes }) {
//   return (
//     <li className="NoteListItem padding-0">
//       {notes}
//       {/* {notes.join(', ')} */}
//       {console.log("NORE:",notes)}
//     </li>
//   );
// }

export default function NoteListItem({ noteItems }) {
  const notes = noteItems.map(note =>
    <li >
      {note.text}
      {(note.createdAt)}
      {console.log("noteCat:", note)}
    </li>
  );
  return (
    <div className="">
      {notes}
    </div>
  );
}
