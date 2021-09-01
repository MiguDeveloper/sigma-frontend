import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  title = 'General';
  constructor() {}

  ngOnInit(): void {}

  onClickButton(typeButton: string) {
    console.log(`onClickButton: ${typeButton}`);
  }

  toggleAlertSuccess() {
    Swal.fire({
      title: 'Alert de prueba',
      text: 'Este es el texto del body',
      icon: 'success',
    });
  }

  toggleAlertConfirm() {
    Swal.fire({
      title: 'Estas Seguro de eliminar al usuario?',
      text: 'El cambio no podra ser recuperado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        Swal.fire('Eliminado', 'Se elimino correctamente', 'success');
      }
    });
  }

  toggleDialog() {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      text: 'Cambios guardados con éxito',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  toggleAlertCustom() {
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: '3em',
      background: '#fff',
      backdrop: `
        rgba(0,0,123,0.4)        
      `,
    });
  }
}
