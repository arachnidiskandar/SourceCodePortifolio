import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private navbar = new BehaviorSubject<boolean>(false);
  navbarAparecendo = this.navbar.asObservable();

  constructor() { }

  updatedNavbar(data: boolean) {
    this.navbar.next(data);
  }
}
