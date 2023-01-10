import { Component, Input, OnInit } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { PostService } from 'src/services/post.service';
import { AppError } from '../app-error';
import { badinput } from '../bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
posts:any;


constructor(private service:PostService){

}
  ngOnInit() {
    this.service.getPosts()
   .subscribe(response => {
    console.log(JSON.parse(JSON.stringify(response)));
    this.posts = JSON.parse(JSON.stringify(response));
  });
  }

createPost(input:HTMLInputElement){
  let post: any = {title:input.value}
  input.value = '';

  this.service.createPost(post)
  .subscribe(response => {
    post['id'] = JSON.parse(JSON.stringify(response)).id;
    this.posts.splice(0,0,post);
    console.log(response);
    //console.log(JSON.parse(JSON.stringify(response)));
  },
  (error:AppError)=> {
    if(error instanceof badinput){
   // this.form.setErrors(error.originalError);
    }
    else throw error;
  })
}

updatePost(post:HTMLInputElement){

  this.service.updatePost(post)
  .subscribe(response =>{
    console.log(response);
  });
  //this.http.put(this.url, JSON.stringify({isRead:true}))
}

deletePost(post:HTMLInputElement){
  this.service.deletePost(post.id)
  .subscribe(
    response => {
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
  }, 
  (error:AppError) => {
    if(error instanceof NotFoundError)
    alert('this post has already been deleted.');
    else throw error;
  })
}

deletePostTest(post:HTMLInputElement){
  this.service.deletePostTest(post.id)
  .subscribe(
    response => {
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
  }, 
  (error:AppError) => {
    if(error instanceof NotFoundError)
    alert('this post has already been deleted.');
    else throw error;
  })
}


}

