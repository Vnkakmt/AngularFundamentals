import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {

    //WHEN USER MAY CHOOSE TO NAVIGATE TO OTHER PAGE AND NEED NOT RETURN BACK REINITALIZE THE COMPONENT EVERY TIME
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    console.log("GitHub profile oninit")
    //WHEN USER MAY CHOOSE TO GO BACK AND FORTH THROUGH PAGES, COMPONENTS NEED TO BE INITIALIZED EVERY TIME

    // this.route.paramMap
    // .subscribe(params =>{
    //   console.log(params.get('id'));
      //let id = params.get('id');
      //console.log(id);
    //})
  }

  submit(){
    console.log('worked!')
    this.router.navigate(['/followers'], {
      queryParams:{ page: 1, order:'newest'}
    });
  }

}
