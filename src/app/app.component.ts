import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { StorageVariables } from './enum/enums';
import { MENU } from './interfaces/constants';
import { MenuOption } from './interfaces/menu';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './shared/styles/styles.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoFinanzas';
  menuOptions!: MenuOption[];
  imgUrl: string = "./assets/img/#IMG#.png"
  imgButton!: string;
  toggleBtnImg: boolean = false;

  constructor(private router: Router,
              private localStorage: LocalstorageService){}

  ngOnInit(): void {
    this.menuOptions = [...MENU];
    this.imgButton = this.imgUrl.replace("#IMG#", "basic_exam");
  }

  OnClickMenuOption(_option: MenuOption, _drawer: MatDrawer): void {
    _drawer.toggle();
    this.onOpenMenuClick(_drawer, false);
    if(_option.redirectTo === "/logout") this.localStorage.RemoveStorageVariable(StorageVariables.SESSION);
    this.router.navigateByUrl(_option.redirectTo);
  }

  onOpenMenuClick(drawer: MatDrawer, activateDrawer: boolean = true): void
  {
    if(activateDrawer) drawer.toggle();

    this.toggleBtnImg = !this.toggleBtnImg;

    if(this.toggleBtnImg){
      this.imgButton = this.imgUrl.replace("#IMG#", "menu_button_click");
    }
    else
    {
      this.imgButton = this.imgUrl.replace("#IMG#", "basic_exam");
    }
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
