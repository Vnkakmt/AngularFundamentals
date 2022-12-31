import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  title = "Authors List";
  authorsList;

  constructor(service:AuthorsService){
    this.authorsList = service.getAuthors();
  }
  

}
