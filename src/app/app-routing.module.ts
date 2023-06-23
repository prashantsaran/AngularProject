import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/home/main/main.component';
import { CartComponent } from './pages/home/cart/cart.component';
import { IteminfoComponent } from './pages/home/iteminfo/iteminfo.component';
import { SearchPageComponent } from './pages/home/search-page/search-page.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'home',component:MainComponent},
  {path:'cart',component:CartComponent},
  {path:'iteminfo',component:IteminfoComponent},
  {path: 'search-page', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
