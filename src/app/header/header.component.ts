import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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
})
export class HeaderComponent implements OnInit {
  estado = 'inicial';
  menu = false;

  @ViewChild('opcoes', { static: false }) opcoes;

  @HostListener('window:scroll')
  onScroll() {
    window.pageYOffset > 560 ? this.estado = 'final' : this.estado = 'inicial';
  }

  @HostListener('document:click', ['$event.target'])
  clickOut(targetElement) {
    if (!this.eleRef.nativeElement.contains(targetElement) &&
      this.opcoes.nativeElement.classList.contains('ativa')) {
        this.mudarMenu(event);
    }
  }

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

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
  mudarMenu($event) {
    $event.stopPropagation();
    this.gerenciarBody();
    if (window.pageYOffset < 560) {
      this.estado === 'final' ? this.estado = 'inicial' : this.estado = 'final';
    }
    this.menu ? this.menu = false : this.menu = true;
  }
  gerenciarBody() {
    document.body.style.overflow === 'hidden' ?
    this.renderer.setStyle(document.body, 'overflow', 'auto') :
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
}
