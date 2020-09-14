import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RestCallComponent } from './rest-call/rest-call.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'rest', component: RestCallComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
