import { Component, OnInit } from '@angular/core';
import { MEUS_PROJETOS } from '../shared/projetos';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
  projetos = MEUS_PROJETOS;
  constructor() { }

  ngOnInit() {
  }

}
