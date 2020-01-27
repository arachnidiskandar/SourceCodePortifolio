import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('mudarNavBar', [
      state('inicial', style({
        color: '#fcfcfc',
        backgroundColor: 'transparent'
      })),
      state('final', style({
        color: ' #4168a3',
        backgroundColor: '#fcfcfc'
      })),
      transition('inicial=>final', animate('200ms')),
      transition('final=>inicial', animate('200ms'))
    ])
  ],
})
export class HeaderComponent implements OnInit {
  estado = 'inicial';
  menu = false;

  @HostListener('window:scroll')
  onScroll() {
    window.pageYOffset > window.innerHeight * 0.9 ? this.estado = 'final' : this.estado = 'inicial';
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  mudarEstilo() {
    if (this.estado === 'inicial') {
      return {
        color: '#fcfcfc',
        borderBottom: '#fcfcfc',
        font: '#fcfcfc'
      };
    } else {
      return {
        color: '#4168a3',
        borderBottom: '#4168a3',
        font: '#4168a3'
      };
    }
  }
  mudarMenu() {
    this.gerenciarBody();
    this.menu ? this.menu = false : this.menu = true;
    if (window.pageYOffset < window.innerHeight * 0.9) {
      this.estado === 'inicial' ? this.estado = 'final' : this.estado = 'inicial';
    }
  }
  gerenciarBody() {
    document.body.style.overflow === 'hidden' ?
    this.renderer.setStyle(document.body, 'overflow', 'auto') :
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
}
