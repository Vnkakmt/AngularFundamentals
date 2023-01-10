import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
posts:any;
private url ='https://jsonplaceholder.typicode.com/posts';

constructor(private http:HttpClient){
http.get(this.url)
.subscribe(response => {
  console.log(JSON.parse(JSON.stringify(response)));
  this.posts = JSON.parse(JSON.stringify(response));
})
}

createPost(input:HTMLInputElement){
  let post: any = {title:input.value}
  input.value = '';

  this.http.post(this.url, JSON.stringify(post))
  .subscribe(response => {
    post['id'] = JSON.parse(JSON.stringify(response)).id;
    this.posts.splice(0,0,post);
    console.log(response);
    //console.log(JSON.parse(JSON.stringify(response)));
  })
}
}

