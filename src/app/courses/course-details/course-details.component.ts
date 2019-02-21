// External
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Internal
import { Course } from '../../shared/entities/course';
import { CoursesService } from '~/app/courses/courses.service';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

    course: Course;
    courseId: number;
    title = 'Endava Courses';

    constructor(
        private coursesService: CoursesService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.setCourseParameter();
    }

    ngOnInit() {
        this.course = this.coursesService.Courses.find((course) => course.id === +this.courseId);
    }

    onTap() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/']);
    }

    private setCourseParameter() {
        this.activatedRoute.params.subscribe(params => {
            this.courseId = params['id'];
        });
    }

}
