import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MENU } from './interfaces/constants';
import { MenuOption } from './interfaces/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './shared/styles/styles.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoFinanzas';
  menuOptions!: MenuOption[];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.menuOptions = [...MENU];
  }

  OnClickMenuOption(_option: MenuOption, _drawer: MatDrawer): void {
    _drawer.toggle();
    this.router.navigateByUrl(_option.redirectTo);
  }

  ShowMenu(): boolean{
    switch (this.router.url) {
      case '/':
      case '/login':
      case '/register':
        return false;
    
      default:
        return true;
    }
  }
}
