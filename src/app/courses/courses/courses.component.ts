import { Component } from '@angular/core';

import { Course } from './../model/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialongComponent } from '../../shared/components/error-dialong/error-dialong.component';



@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
  courses$:  Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService, public dialog: MatDialog) {
    this.courses$ = this.coursesService.listAll()
    .pipe(
      catchError(error => {
        this.onError('Erro no carregamento dos cursos');
        return of([]);
      })
    );

  }

  onError(errorMessage:string) {
    this.dialog.open(ErrorDialongComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {

  }
}
