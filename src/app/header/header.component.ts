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
      transition('inicial=>final', animate('2ms')),
      transition('final=>inicial', animate('2ms'))
    ])
    // trigger('mostrarMenu', [
    //   state('inicial', style({
    //     top: '0vh'
    //   })),
    //   state('final', style({
    //     top: '8vh'
    //   })),
    //   transition('inicial=>final', animate('2000ms')),
    //   transition('final=>inicial', animate('2000ms'))
    // ])
  ]
})
export class HeaderComponent implements OnInit {
  estado = 'inicial';
  menu = false;

  @HostListener('window:scroll', ['$event'])
    onScroll(event) {
      window.pageYOffset > 560 ? this.estado = 'final' : this.estado = 'inicial';
  }
  constructor() { }

  ngOnInit() {
  }
  mudarEstilo() {
    if (this.estado === 'inicial') {
      return {
        color: 'white',
        borderBottom: 'white'
      };
    } else {
      return {
        color: '#4168a3',
        borderBottom: '#4168a3'
      };
    }
  }
  ativarMenu() {
    if (window.pageYOffset < 560) {
      this.estado = 'final';
    }
    this.menu ? this.menu = false : this.menu = true;
  }
}
