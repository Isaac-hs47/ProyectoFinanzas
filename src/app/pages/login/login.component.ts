import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageVariables } from 'src/app/enum/enums';
import { User } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../shared/styles/styles.css']
})
export class LoginComponent implements OnInit {

  users!: User[];
  loginForm!: FormGroup;

  constructor(private router: Router,
              private localStorageSevice: LocalstorageService,
              private fb: FormBuilder,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.users = this.localStorageSevice.GetStorageVariable(StorageVariables.USERS, []);
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  GoRegisterPage(): void{
    this.router.navigateByUrl('/register');
  }

  OnLogin(): void{
    let username: string = this.loginForm.get("username")?.value;
    let password: string = this.loginForm.get("password")?.value;

    let user: User | undefined = this.users.find(u => u.Username === username);
   
    if(!user || user.Username !== username && user.Password !== password)
    {
      this.alertService.Alert("error", "Usuario y/o contraseña incorrectos");
      return;
    }

    this.router.navigateByUrl("/home");
  }

}
