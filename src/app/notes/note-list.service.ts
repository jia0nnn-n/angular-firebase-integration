import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Note } from '../model/note';


@Injectable({
  providedIn: 'root'
})
export class NoteListService {
  private noteCollection: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) {
    this.noteCollection = this.firebase.list("realtime-notes")
  }

  getNotes = () => this.noteCollection;
  addNote = (note: Note) => this.noteCollection.push(note);
  deleteNote = ($key: string) => this.noteCollection.remove($key);

  updateNote(note: Note) {
    let $key = note.$key;
    delete note.$key;
    this.noteCollection.update($key, note);
  }
}
