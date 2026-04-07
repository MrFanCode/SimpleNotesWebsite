from fastapi import APIRouter, HTTPException
from database.db import NoteManager
from schemas import NoteCreate


router = APIRouter(prefix="/notes", tags=["Notes"])

db = NoteManager()


@router.get("/")
async def getNotes():
    return db.getAllNotes()



@router.post("/add-note")
def addNote(note: NoteCreate):
    db.addNote(note.title, note.context)

    return {"Message": "Note Added!"}



@router.post("/edit-note/{note_id}")
def editNote(note_id, note: NoteCreate):
    db.updateNote(note_id, note.title, note.context)

    return {"Message": "Note updated"}



@router.post("/delete-note/{note_id}")
def deleteNote(note_id):
    db.deleteNote(note_id)

    return {"Message": "Note Deleted!"}


