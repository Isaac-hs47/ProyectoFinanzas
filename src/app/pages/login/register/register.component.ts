import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageVariables } from 'src/app/enum/enums';
import { User } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../../../shared/styles/styles.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder,
              private alertService: AlertService,
              private localStorage: LocalstorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      repeatPassword: new FormControl("", Validators.required)
    });
  }

  RegisterUser(): void{

    let users: User[] = this.localStorage.GetStorageVariable<User[]>(StorageVariables.USERS, []);
    
    let existUser: boolean = users.map(u => u.Id).length > 0;

    let IDs: number[] = existUser ?  users.map(u => u.Id) : [-1];

    let nextID: number = Math.max(...IDs) + 1;

    let user: User = {
      FullName: this.registerForm.get("name")?.value,
      Username: this.registerForm.get("username")?.value,
      Password: this.registerForm.get("password")?.value,
      Badges: [],
      Id: nextID,
      Level: {
        CurrentLevel: 0,
        CurrentXP: 0,
        NeededXP: 200
      },
      ProfilePicturePath: "defaultProfilePicture"
    }

    users.push(user);

    this.localStorage.SetStorageVariable(StorageVariables.USERS, users);

    this.alertService.Alert('success', "Usuario registrado correctamente", true, "top-right")
  }

  DisableRegisterButton(): boolean{
    return this.registerForm.invalid;
  }

  AddRepeatPasswordValidation(): void{
    let password: string = this.registerForm.get("password")?.value;

    let pattern: RegExp = new RegExp(`^${password}$`, 'g');

    this.registerForm.get("repeatPassword")?.addValidators(Validators.pattern(pattern));
  }

  GoToLogin(): void{
    this.router.navigateByUrl("login");
  }
}
