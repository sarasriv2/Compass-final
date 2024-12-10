import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HashtagNotesComponent } from './hashtag-notes/hashtag-notes.component';

export const routes: Routes = [
    { path: 'hashtag-notes', component: HashtagNotesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
