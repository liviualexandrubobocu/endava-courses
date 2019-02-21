import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesService } from './courses.service';

@NgModule({
    imports: [],
    declarations: [CourseListComponent],
    exports: [CourseListComponent],
    providers: [CoursesService]
})
export class CoursesModule {
}
