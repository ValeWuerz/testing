import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { TestComponent } from './test/test.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: '/wrapper', pathMatch: 'full' },
  { path: 'testing/wrapper', component: WrapperComponent },
  { path: 'test', component: TestComponent },
  {path: 'nav' , component: NavComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
