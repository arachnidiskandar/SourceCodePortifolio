import { Component, OnInit, Input } from '@angular/core';
import { Projeto } from '../shared/projetos';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss'],
  animations: [
    trigger('mostrarDetalhesProjeto', [
      state('inicial', style({
        top: '100%',
      })),
      state('final', style({
        top: '0',
      })),
      transition('inicial=>final', animate('300ms')),
      transition('final=>inicial', animate('300ms'))
    ])
  ]
})
export class ProjetoComponent implements OnInit {
  @Input() projeto: Projeto;
  estado = 'inicial';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mudarEstado() {
    this.estado = this.estado === 'inicial' ? 'final' : 'inicial';
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
