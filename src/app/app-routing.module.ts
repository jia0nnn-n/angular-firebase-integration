import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { NoteCloudStoreComponent } from './components/note-cloud-store/note-cloud-store.component';

const appRoutes: Routes = [
  { path: 'realtime-database', component: NotesComponent },
  { path: 'cloud-firebase', component: NoteCloudStoreComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
