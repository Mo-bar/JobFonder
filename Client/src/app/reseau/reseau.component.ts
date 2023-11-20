import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reseau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reseau.component.html',
  styleUrl: './reseau.component.css'
})
export class ReseauComponent implements OnInit {
  posts! : Array<any>;
  constructor() {
  }
  ngOnInit(): void {
    this.posts = [
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      },
      {
        poster : "John Doe",
        job : "Software Engineer",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nulla ac tristique blandit. Curabitur auctor libero sit amet luctus efficitur. Integer quis ex vitae leo euismod varius."
      }
    ];
  }
}
