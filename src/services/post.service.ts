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
  private wrongUrl = 'https://jsonplaceholde.typicode.com/posts'

  constructor(private http:HttpClient) { }

  getPosts(){
   return this.http.get(this.url)
   .pipe(
    catchError(this.handleError)
   );
  }

  createPost(post:any){
    return this.http.post(this.url, JSON.stringify(post))
    .pipe(
      catchError((error:Response)=>{
        this.handleError;
        return throwError(()=> new AppError(error));
      })
    );
  }

  updatePost(post:any){
    return this.http.patch(this.url +'/'+ post.id, JSON.stringify({isRead:true}))
    .pipe(
      catchError(this.handleError))
  }

  deletePost(id:any){
    return this.http.delete(this.url + '/'+ id)
    .pipe(
      catchError(this.handleError))
    }

    deletePostTest(id:any){
      return this.http.delete(this.wrongUrl + '/'+ id)
      .pipe(
        catchError(this.handleError))
      }

      private handleError(error:Response){
        
        if(error.status === 400)
        return throwError(()=> new badinput(error.json()))

        if(error.status == 404)
          return throwError(()=> new Error('Not Found'));
        return throwError(()=> new AppError(error));
      }
}
