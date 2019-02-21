// External
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

// Internal
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesService } from './courses.service';

const routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent}
];

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailsComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
  ],
  bootstrap: [CourseListComponent],
  exports: [CourseListComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoursesModule { }
