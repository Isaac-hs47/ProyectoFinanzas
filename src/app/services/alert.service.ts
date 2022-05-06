import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertPosition, SweetAlertResult } from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  Alert(_sweetAlertIcon: SweetAlertIcon, _text: string, _toast: boolean = false, _position: SweetAlertPosition = "center"): void{
    Swal.fire({
      icon: _sweetAlertIcon,
      text: _text,
      toast: _toast,
      showConfirmButton: !_toast,
      position: _position,
      timer: _toast ? 3000 : undefined,
      width: 400,
      padding: 10
    });
  }

  BadgeAlert(_medalType: string, _badgeDescription: string): void{
    Swal.fire({
      title: 'Felicitaciones!!!',
      text: _badgeDescription,
      imageUrl: `./assets/img/${_medalType}-medal.png`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Medal',
      confirmButtonText: 'Continuar',
      timer: 2500
    });
  }

  NewLavelObteined(_text: string): void
  {
    Swal.fire({
      title: 'Felicitaciones!!!',
      text: _text,
      imageUrl: `./assets/img/level_up.png`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Medal',
      confirmButtonText: 'Continuar',
      timer: 2500
    });
  }

  BadResponse(_text: string): void
  {
    Swal.fire({
      title: _text,
      imageUrl: `./assets/img/bad_answer.gif`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'bad',
      showConfirmButton: false,
      timer: 1000
    });
  }

  GoodResponse(_text: string): void{
    Swal.fire({
      title: _text,
      imageUrl: `./assets/img/good_answer.gif`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'good',
      showConfirmButton: false,
      timer: 1000
    });
  }

}
