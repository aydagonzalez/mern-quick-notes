// import "./SkillListItem.css";

export default function NoteListItem({ note }) {
  return (
    <li className="NoteListItem padding-0">
      {note.text}
    </li>
  );
}
