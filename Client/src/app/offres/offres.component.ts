import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offres.component.html',
  styleUrl: './offres.component.css'
})
export class OffresComponent implements OnInit {
  posts! : Array<any>;
  constructor() {
  }
  ngOnInit(): void {
    this.posts = [
      {
        poster : "Nom de l'etntreprise",
        job : "offre d'emploi",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "Nom de l'etntreprise",
        job : "offre d'emploi",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "Nom de l'etntreprise",
        job : "offre d'emploi",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "Nom de l'etntreprise",
        job : "offre d'emploi",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "Nom de l'etntreprise",
        job : "offre d'emploi",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "Nom de l'etntreprise",
        job : "offre d'emploi",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "Nom de l'etntreprise",
        job : "offre d'emploi",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "Nom de l'etntreprise",
        job : "offre d'emploi",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "Nom de l'etntreprise",
        job : "offre d'emploi",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      }
    ];
  }

}
