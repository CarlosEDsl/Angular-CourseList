import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, first, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'assets/courses.json'

  constructor(private httpClient: HttpClient) {

   }

  listAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        delay(5000)
      )
  }

}
