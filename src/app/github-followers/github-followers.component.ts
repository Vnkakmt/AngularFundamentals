import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from 'src/services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route:ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    //this is for getting required parameters
    this.route.paramMap
    .subscribe(param =>{
      
    });
    //let id = this.route.snapshot.paramMap.get('id');

    //this is for getting query parameters
    this.route.queryParamMap.subscribe();
    //let pageno = this.route.snapshot.queryParamMap.get('page');
    

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
