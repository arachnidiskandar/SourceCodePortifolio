import { Component, OnInit, HostListener } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('mudarNavBar', [
      state('inicial', style({
        color: 'white',
        backgroundColor: 'transparent'
      })),
      state('final', style({
        color: ' #4168a3',
        backgroundColor: 'white'
      })),
      transition('inicial=>final', animate('200ms')),
      transition('final=>inicial', animate('200ms'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  estado = 'inicial';
  @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {
      window.pageYOffset > 560 ? this.estado = 'final' : this.estado = 'inicial';
  }
  constructor() { }

  ngOnInit() {
  }
  mudarEstado() {
    
  }
}
