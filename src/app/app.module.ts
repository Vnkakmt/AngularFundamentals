import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { AssignmentComponent } from './assignment/assignment.component';
import { assignmentPipe } from './assignment.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyInstructorComponent } from './udemy-instructor/udemy-instructor.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { AssignmentReactiveformsComponent } from './assignment-reactiveforms/assignment-reactiveforms.component';
import { PostsComponent } from './posts/posts.component';
import{HttpClientModule} from '@angular/common/http'
import { PostService } from 'src/services/post.service';
import { AppErrorHandler } from './app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    assignmentPipe,
    AssignmentComponent,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    UdemyInstructorComponent,
    SignupFormComponent,
    NewCourseComponent,
    AssignmentReactiveformsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    {provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
