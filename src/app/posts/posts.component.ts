import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
posts:any;
private url ='https://jsonplaceholder.typicode.com/posts';

constructor(private http:HttpClient){

}
  ngOnInit() {
    this.http.get(this.url)
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

updatePost(post:HTMLInputElement){

  this.http.patch(this.url +'/'+ post.id, JSON.stringify({isRead:true}))
  .subscribe(response =>{
    console.log(response);
  })
  //this.http.put(this.url, JSON.stringify({isRead:true}))
}

deletePost(post:HTMLInputElement){
  this.http.delete(this.url + '/'+ post.id)
  .subscribe(response => {
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
  })
}

}

