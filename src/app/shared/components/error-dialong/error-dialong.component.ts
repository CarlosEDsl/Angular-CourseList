import { Component, Inject } from '@angular/core';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialong',
  standalone: false,
  templateUrl: './error-dialong.component.html',
  styleUrl: './error-dialong.component.scss'
})
export class ErrorDialongComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
