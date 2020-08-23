import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Note } from '../model/note';


@Injectable({
  providedIn: 'root'
})
export class NoteListService {
  private noteCollection: AngularFireList<any>;
  private noteCloudFirestoreCollection: AngularFirestoreCollection<any>;
  constructor(private firebase: AngularFireDatabase, private firestore: AngularFirestore) {
    this.noteCollection = this.firebase.list("realtime-notes")
    this.noteCloudFirestoreCollection = this.firestore.collection('cloud-firestore-notes');
  }

  getNotes = () => this.noteCollection;
  addNote = (note: Note) => this.noteCollection.push(note);
  deleteNote = ($key: string) => this.noteCollection.remove($key);

  updateNote(note: Note) {
    let $key = note.$key;
    delete note.$key;
    this.noteCollection.update($key, note);
  }


  getNotesFromCloudFirestore = () => this.noteCloudFirestoreCollection;
  addNoteToCloudFirestore = (note: Note) => {
    note.isUrgent = !!note.isUrgent;
    this.noteCloudFirestoreCollection.add(note);
  }

  updateNoteOnCloudFirestore(note: Note) {
    let $key = note.$key;
    delete note.$key;
    this.noteCloudFirestoreCollection.doc($key).update(note);
  }
  deleteNoteOnCloudFirestore = ($key: string) => {
    this.noteCloudFirestoreCollection.doc($key).delete();
  }
}
