import { Component, OnInit } from '@angular/core';
import { NoteListService } from 'src/app/notes/note-list.service';
import { Note } from 'src/app/model/note';
import { ThrowStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  notes: Note[] = [];
  constructor(private noteService: NoteListService) { }

  getNotes() {
    this.notes.length = 0;
    this.noteService.getNotes()
      .snapshotChanges()
      .forEach(notesSp => {
        // TODO: Performance problem, always the same snapshot if clicking too many time ?
        this.notes = []
        notesSp.forEach(noteSp => {
          let item = noteSp.payload.toJSON();
          item['$key'] = noteSp.key;
          this.notes.push(item as Note);
        })
      });
  }

  updateFirstNote(){
    this.notes[0].content = "dasdasdas!"
    this.noteService.updateNote(this.notes[0])      
    this.getNotes();
  }

  deleteFirstNote(){
    this.noteService.deleteNote(this.notes[0].$key);
  }

  addNote(form: NgForm){
    this.noteService.addNote(form.value);
  }
}
