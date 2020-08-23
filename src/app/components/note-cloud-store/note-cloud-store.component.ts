import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteListService } from 'src/app/notes/note-list.service';
import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-note-cloud-store',
  templateUrl: './note-cloud-store.component.html',
  styleUrls: ['./note-cloud-store.component.scss']
})
export class NoteCloudStoreComponent implements OnInit {

  notes: Note[] = [];
  showRaw: boolean = true;
  constructor(private noteService: NoteListService) { }
  ngOnInit() {
    this.getNotes();
  }
  getNotes() {
    this.notes.length = 0;
    this.noteService.getNotesFromCloudFirestore()
      .snapshotChanges()
      .forEach(actions => {
        console.log('snap cloud', actions)
        this.notes = []
        actions.forEach(action => {
          let item = action.payload.doc;
          var data = item.data();
          data['$key'] = item.id;
          this.notes.push(data as Note);
        })
      });
  }

  deleteFirstNote() {
    console.log(this.notes[0].$key)
    this.noteService.deleteNoteOnCloudFirestore(this.notes[0].$key);
  }

  addNote(form: NgForm) {
    this.noteService.addNoteToCloudFirestore(form.value);
  }

}
