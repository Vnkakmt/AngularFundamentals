import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';

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
  }, 
  (error) => {
    alert('an unexpected error occured.');
    console.log(error);
  })
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
  (error:Response)=> {
    if(error.status == 400){
   // this.form.setErrors(error.json());
    }
    else{
      alert("unexpected error occurred");
      console.log(error);
    }
  })
}

updatePost(post:HTMLInputElement){

  this.service.updatePost(post)
  .subscribe(response =>{
    console.log(response);
  }, 
  (error) => {
    alert("unexpected error occurred");
    console.log(error);
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
  (error:Response) => {
    if(error.status === 404)
    alert('this post has already been deleted.');
    else{
      alert("unexpected error occurred");
      console.log(error);
    }
  })
}

}

