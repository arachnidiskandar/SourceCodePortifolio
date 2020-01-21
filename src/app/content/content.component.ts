import { Component, OnInit } from '@angular/core';
import { MEUS_PROJETOS } from '../shared/projetos';
import { NavbarService } from '../shared/services/navbar.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  projetos = MEUS_PROJETOS;
  aparecendoMenu: boolean;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.navbarAparecendo.subscribe(data => this.aparecendoMenu = data);
  }
}
