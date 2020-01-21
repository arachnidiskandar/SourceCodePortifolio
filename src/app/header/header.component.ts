import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
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
  ],
  encapsulation: ViewEncapsulation.None
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
    document.body.style.overflow = 'hidden';
    console.log(document.body.style.overflow);
    if (window.pageYOffset < 560) {
      this.estado = 'final';
    }
    this.menu ? this.menu = false : this.menu = true;
  }
}
