import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/container/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from './shared/guards/Auth/auth-guard.guard';
import { InitialAuthGuard } from './shared/guards/InitialAuth/initial-auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [InitialAuthGuard],
    component: HomeComponent,
  },
  {
    path: 'images',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/images/images.module').then((m) => m.ImagesModule),
  },
  {
    path: 'notFound',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/notFound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
