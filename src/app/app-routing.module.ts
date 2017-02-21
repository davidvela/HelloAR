import { AppComponent } from './app.component';
import { AppWebcamComponent } from './Components/app-webcam/app-webcam.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
const routes: Routes = [
      { path: '',  redirectTo: '/webCam', pathMatch: 'full'  },
      { path: 'webCam',  component: AppWebcamComponent },
     /* { path: 'angularjs',  component: HeroAngularComponent },
      { path: 'heroes',     component: HeroesComponent },
      { path: 'detail/:id', component: HeroDetailComponent } */
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}