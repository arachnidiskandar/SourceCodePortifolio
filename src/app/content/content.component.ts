import { Component, OnInit } from '@angular/core';
import { MEUS_PROJETOS } from '../shared/projetos';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  projetos = MEUS_PROJETOS;

  constructor() { }

  ngOnInit() {
  }
}
