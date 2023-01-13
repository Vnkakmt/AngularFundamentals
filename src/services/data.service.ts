import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, NotFoundError, Observable, of, throwError } from 'rxjs';
import { AppError } from 'src/app/app-error';
import { badinput } from 'src/app/bad-input';


export class DataService {
  private wrongUrl = 'https://jsonplaceholde.typicode.com/posts'

  constructor(private url:string, private http:HttpClient) { }

  getAll(){
   return this.http.get(this.url)
   .pipe(
    map(response => JSON.parse(JSON.stringify(response))),
    catchError(this.handleError)
   );
  }

  create(resource:any){
    return throwError(()=> new AppError('error')); //throw error purposefully

    // return this.http.post(this.url, JSON.stringify(resource))
    // .pipe(
    //     map(response => JSON.parse(JSON.stringify(response))),
    //   catchError((error:Response)=>{
    //     this.handleError;
    //     return throwError(()=> new AppError(error));
    //   })
    // );
  }

  update(resource:any){
    return this.http.patch(this.url +'/'+ resource.id, JSON.stringify({isRead:true}))
    .pipe(
        map(response => JSON.parse(JSON.stringify(response))),

      catchError(this.handleError))
  }

  delete(id:any){
    //return throwError(()=> new AppError('Error'));

    return this.http.delete(this.url + '/'+ id)
    .pipe(
        map(response => JSON.parse(JSON.stringify(response))),
      catchError(this.handleError))
    }

    deletePostTest(id:any){

      return this.http.delete(this.wrongUrl + '/'+ id)
      .pipe(
        map(response => JSON.parse(JSON.stringify(response))),
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
