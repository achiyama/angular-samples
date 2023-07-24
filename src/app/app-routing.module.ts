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
  {
    path: 'standalone-components',
    loadChildren: () =>
      import('./standalone-components/standalone-components.module').then(
        (m) => m.StandaloneComponentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
