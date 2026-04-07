# Simple Notes Website

## Backend
### FastAPI

`GET "/" => getNotes()` => This returns all the available notes from the database
`POST "/add-note" => addNote(note: NoteCreate)` => This will create a note in the database
`POST "/editNot" => editNote(note_id, note: NoteCreate)` => This will update the existing note
`POST "/delete-note/{note_id}" => deleteNote(note_id)` => This will delete selected note


## Frontend
- React JS
