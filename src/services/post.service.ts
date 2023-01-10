import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, NotFoundError, Observable, of, throwError } from 'rxjs';
import { AppError } from 'src/app/app-error';
import { badinput } from 'src/app/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url ='https://jsonplaceholder.typicode.com/posts';
  private wrongUrl = 'https://jsonplaceholde  .typicode.com/posts'

  constructor(private http:HttpClient) { }

  getPosts(){
   return this.http.get(this.url);
  }

  createPost(post:any){
    return this.http.post(this.url, JSON.stringify(post))
    .pipe(
      catchError((error:Response)=>{
        if(error.status === 400)
        return throwError(()=> new badinput(error.json()))
        else
        return throwError(()=> new Error(JSON.stringify(error.json())))
      })
    );
  }

  updatePost(post:any){
    return this.http.patch(this.url +'/'+ post.id, JSON.stringify({isRead:true}));
  }

  deletePost(id:any){
    return this.http.delete(this.url + '/'+ id)
    .pipe(
      catchError((error:Response) =>{
        console.log(error);

        if(error.status === 404)
        return throwError(()=> new Error(JSON.stringify(error.json())));
        else
        return throwError(()=> new AppError(error))
      }
      ))
    }

    deletePostTest(id:any){
      return this.http.delete(this.wrongUrl + '/'+ id)
      .pipe(
        catchError((error:Response) =>{
          console.log(error);
  
          if(error.status === 404)
          return throwError(()=> new Error(JSON.stringify(error.json())));
          else
          return throwError(()=> new AppError(error))
        }
        ))
      }

}
