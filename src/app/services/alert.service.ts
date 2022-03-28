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
      imageUrl: `../../assets/img/${_medalType}-medal.png`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Medal',
      confirmButtonText: 'Continuar',
      timer: 2500
    });
  }

}
