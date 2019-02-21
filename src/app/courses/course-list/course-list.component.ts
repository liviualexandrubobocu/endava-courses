// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// Internal
import { Course } from '../../shared/entities/course';
import { CoursesService } from '~/app/courses/courses.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

    courses: Course[];
    descriptionShort = 'List Of Courses Today';

    constructor(
        private router: Router,
        private coursesService: CoursesService
    ) {}

    ngOnInit() {
        this.coursesService.getCourses().subscribe((courses: Course[]) => {
            this.coursesService.Courses = courses;
            this.courses = this.coursesService.Courses;
        });
    }

    onTap(id: number) {
        this.navigateToDetails(id);
    }

    private navigateToDetails(id: number) {
        this.router.navigate(['courses', id]);
    }

}
