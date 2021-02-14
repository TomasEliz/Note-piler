import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
import '../css/notes-container.css'

const NotesContainer = () => {
    const notes = useSelector(state => state.notesReducer)

    return (
        <section className="notes-container">
            {notes.map(note => <Note key={note.id} note={note} />)}
        </section>
    )
}

export default NotesContainer