import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImageComponent } from './image/image.component';
import { AccueilOphtalmologueComponent } from './Ophtalmologue/accueil-ophtalmologue/accueil-ophtalmologue.component';
import { AjoutAvisComponent } from './Ophtalmologue/ajout-avis/ajout-avis.component';
import { FormPageComponent } from './Ophtalmologue/form-page/form-page.component';
import { HistoriqueAvisComponent } from './Ophtalmologue/historique-avis/historique-avis.component';
import { InfosPatientComponent } from './Ophtalmologue/infos-patient/infos-patient.component';
import { LoginOphtalmologueComponent } from './Ophtalmologue/login-ophtalmologue/login-ophtalmologue.component';
import { RegistreOphtalmologueComponent } from './Ophtalmologue/registre-ophtalmologue/registre-ophtalmologue.component';
import { RepondreAvis1Component } from './Ophtalmologue/repondre-avis1/repondre-avis1.component';
import { SecondPageComponent } from './Ophtalmologue/second-page/second-page.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { ConsultationComponent } from './Ophtalmologue/historique-avis/consultation/consultation.component';
const routes: Routes = [
  {path:"" , component:HomePageComponent} ,
  { path:"ophtalmologue" , component:SecondPageComponent} ,
  { path:"" , component:HomePageComponent},
  { path:"pgRegistre" , component:RegistreOphtalmologueComponent},
  { path:"pageLogin" , component:LoginOphtalmologueComponent},
  { path:"accueil" , component:AccueilOphtalmologueComponent},
  { path:"repondreAvis" , component:RepondreAvis1Component},
  { path:"AjoutAvis" , component:AjoutAvisComponent},
  { path:"infosPatient" , component:InfosPatientComponent},
  {path:"historique" , component:HistoriqueAvisComponent},
  { path:"test" , component:TestComponent},
  { path:"test1" , component:Test2Component},
  { path:"1" , component:ImageComponent},
  {path:"0" , component:FormPageComponent},

  {path:"consultation" , component: ConsultationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
