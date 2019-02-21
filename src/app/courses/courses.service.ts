// External
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Internal
import { Course } from '../shared/entities/course';

@Injectable()
export class CoursesService {

    public endpoint = 'http://endavacourseservice20190221025732.azurewebsites.net/api/courses';
    private courses;
    constructor(private http: HttpClient) {}

    get Courses() {
        return this.courses;
    }

    set Courses(courses: Course[]) {
        this.courses = courses;
    }

    getCourses() {
        return this.http.get(this.endpoint);
    }
}
