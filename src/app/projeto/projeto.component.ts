import { Component, OnInit, Input } from '@angular/core';
import { Projeto } from '../shared/projetos';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent implements OnInit {
  @Input() projeto: Projeto;
  constructor() { }

  ngOnInit() {
  }

}
