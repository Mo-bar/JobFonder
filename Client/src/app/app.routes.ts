import { Routes } from '@angular/router';
import { ActualiteComponent } from "./actualite/actualite.component"
import { ReseauComponent} from "./reseau/reseau.component";
import {OffresComponent} from "./offres/offres.component";

export const routes: Routes = [
  { path : "actualites" , component : ActualiteComponent },
  { path : "reseau", component  : ReseauComponent},
  {path : "offres", component : OffresComponent}
];
