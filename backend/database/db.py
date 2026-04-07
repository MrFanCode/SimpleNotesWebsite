import sqlite3
from uuid import uuid4
from datetime import datetime


class NoteManager:
    def __init__(self):
        """Initialize the database manager with a specific database file."""
        self.db_name = "development.db"
        self._createTable()
    

    def _createTable(self):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS notes(
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                context TEXT NOT NULL,
                date DATETIME DEFAULT CURRENT_TIMESTAMP
            )
            """)
        
        conn.commit()
        conn.close()

        return True
    

    def addNote(self, title, context):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        
        uid  = str(uuid4())
        current_date = datetime.now()

        cursor.execute(
            """INSERT INTO notes (id, title, context, date) VALUES (?, ?, ?, ?)""", (uid, title, context, current_date)
        )
        conn.commit()
        conn.close()

        return "Note Added"
    

    def getAllNotes(self):
        conn = sqlite3.connect(self.db_name)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        cursor.execute(
            """SELECT * FROM notes"""
        )        
        notes = cursor.fetchall()
        conn.close()
        return [dict(row) for row in notes] # Return dict in a list
    

    def getNote(self, note_id):
        conn = sqlite3.connect(self.db_name)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        cursor.execute(
            """SELECT * FROM notes WHERE id=?""", (note_id,)
        )
        note = cursor.fetchone()
        conn.close()

        return dict(note) if note else None # Return an dictionary
    

    def updateNote(self, note_id, title, context):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        current_date = datetime.now()
        cursor.execute(
            """UPDATE notes SET title = ?, context = ?, date = ? WHERE id = ?""", (title, context, current_date, note_id)
        )
        conn.commit()
        conn.close()

        return "Note Updated"
    

    def deleteNote(self, note_id):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        cursor.execute(
            "DELETE FROM notes WHERE id = ?", (note_id,)
        )
        conn.commit()
        conn.close()

        return "Note Deleted"





