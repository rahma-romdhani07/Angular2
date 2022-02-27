import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule ,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from'@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { AccueilOphtalmologueComponent } from './Ophtalmologue/accueil-ophtalmologue/accueil-ophtalmologue.component';
import { AjoutAvisComponent } from './Ophtalmologue/ajout-avis/ajout-avis.component';
import { InfosPatientComponent } from './Ophtalmologue/infos-patient/infos-patient.component';
import { LoginOphtalmologueComponent } from './Ophtalmologue/login-ophtalmologue/login-ophtalmologue.component';
import { RegistreOphtalmologueComponent } from './Ophtalmologue/registre-ophtalmologue/registre-ophtalmologue.component';
import { RepondreAvis1Component } from './Ophtalmologue/repondre-avis1/repondre-avis1.component';
import { SecondPageComponent } from './Ophtalmologue/second-page/second-page.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import GLightbox from 'glightbox';
import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatIconModule} from '@angular/material';
import { ImageComponent } from './image/image.component';
import { HistoriqueAvisComponent } from './Ophtalmologue/historique-avis/historique-avis.component';
import { FormPageComponent } from './Ophtalmologue/form-page/form-page.component';
import { ConsultationComponent } from './Ophtalmologue/historique-avis/consultation/consultation.component';
import { OphtalmologueComponent } from './Ophtalmologue/ophtalmologue.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccueilOphtalmologueComponent,
    AjoutAvisComponent,
    InfosPatientComponent,
    LoginOphtalmologueComponent,
    RegistreOphtalmologueComponent,
    RepondreAvis1Component,
    SecondPageComponent,
    TestComponent,
    Test2Component,
    ImageComponent,
    HistoriqueAvisComponent,
    FormPageComponent,
    OphtalmologueComponent,
    ConsultationComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatStepperModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule
    
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
