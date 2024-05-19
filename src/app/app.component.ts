import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DownfooterComponent } from './downfooter/downfooter.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriComponent } from './inscri/inscri.component';
import { PersonnaliserComponent } from './personnaliser/personnaliser.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Accueil2Component } from './accueil2/accueil2.component';
import { Accueilpart1Component } from './accueilpart1/accueilpart1.component';
import { Accueilpart2Component } from './accueilpart2/accueilpart2.component';
import { Accueilpart3Component } from './accueilpart3/accueilpart3.component';
import { Accueilpart4Component } from './accueilpart4/accueilpart4.component';
import { Accueilpart5Component } from './accueilpart5/accueilpart5.component';
import { Accueilpart6Component } from './accueilpart6/accueilpart6.component';
import { Accueilpart7Component } from './accueilpart7/accueilpart7.component';
import { Accueilpart8Component } from './accueilpart8/accueilpart8.component';
import { Accueilpart9Component } from './accueilpart9/accueilpart9.component';
import { PersoComponent } from './perso/perso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, DownfooterComponent, InscriptionComponent, InscriComponent, HeaderComponent, PersonnaliserComponent, AccueilComponent, Accueil2Component, Accueilpart1Component, Accueilpart2Component, Accueilpart3Component, Accueilpart4Component, Accueilpart5Component, Accueilpart6Component, Accueilpart7Component, Accueilpart8Component, Accueilpart9Component, PersoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
