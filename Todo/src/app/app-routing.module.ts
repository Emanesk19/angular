import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BackgroundimageComponent } from './backgroundimage/backgroundimage.component';

const routes: Routes = [
  {path:' ',component:AppComponent},
  {path:'bakgroundImage ',component:BackgroundimageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
