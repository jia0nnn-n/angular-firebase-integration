import { Component, OnInit } from '@angular/core';
import { NoteListService } from 'src/app/notes/note-list.service';
import { Note } from 'src/app/model/note';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];
  showRaw: boolean = true;
  constructor(private noteService: NoteListService) { }

  ngOnInit() {
    this.getNotes();
  }

  addNote(form: NgForm) {
    this.noteService.addNote(form.value);
  }

  updateFirstNote() {
    this.notes[0].content = 'CUSTOMIZED';
    this.noteService.updateNote(this.notes[0]);
  }

  getNotes() {
    this.notes.length = 0;
    this.noteService.getNotes()
      .snapshotChanges()
      .forEach(notesSp => {
        this.notes = []
        notesSp.forEach(noteSp => {
          let item = noteSp.payload.toJSON();
          item['$key'] = noteSp.key;
          this.notes.push(item as Note);
        })
      });
  }

  deleteLastNote() {
    this.noteService.deleteNote(this.notes[this.notes.length - 1].$key);
  }
}