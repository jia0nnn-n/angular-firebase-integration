import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';

const appRoutes: Routes = [
  { path: 'notes', component: NotesComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
