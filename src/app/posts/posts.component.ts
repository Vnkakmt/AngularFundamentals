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
    this.service.getAll()
   .subscribe(response => this.posts = response);
  }

createPost(input:HTMLInputElement){
  let post: any = {title:input.value}
  this.posts.splice(0,0,post); //optimistic update:- before server confirms creation

  input.value = '';

  this.service.create(post)
  .subscribe(newpost => {
    post['id'] = JSON.parse(JSON.stringify(newpost)).id;
    //this.posts.splice(0,0,post); //pessimistic updatet:- after server confirms creation
  },
  (error:AppError)=> {
    this.posts.splice(0,1); //remove if optimistic update fails

    if(error instanceof badinput){
   // this.form.setErrors(error.originalError);
    }
    else throw error;
  })
}

updatePost(post:HTMLInputElement){

  this.service.update(post)
  .subscribe(response =>{
    console.log(response);
  });
  //this.http.put(this.url, JSON.stringify({isRead:true}))
}

deletePost(post:HTMLInputElement){
  let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

  this.service.delete(post.id)
  .subscribe(
    () => {
      console.log('inside delete')
    //let index = this.posts.indexOf(post);
    //this.posts.splice(index,1);
  }
  ,
  (error:AppError) => {
    console.log('inside error:-')
    this.posts.splice(index,0,post);

    if(error instanceof NotFoundError)
    alert('this post has already been deleted.');
    else throw error;
  })
}

deletePostTest(post:HTMLInputElement){
  this.service.deletePostTest(post.id)
  .subscribe(
    () => {
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

