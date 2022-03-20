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

}
