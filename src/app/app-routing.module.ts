import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular-after-turotial',
    loadChildren: () =>
      import('./angular-after-tutorial/angular-after-tutorial.module').then(
        (m) => m.AngularAfterTutorialModule
      ),
  },
  {
    path: 'tour-of-heroes',
    loadChildren: () =>
      import('./tour-of-heroes/tour-of-heroes.module').then(
        (m) => m.TourOfHeroesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
