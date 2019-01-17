// import { Injectable } from '@angular/core';
// import { TaskApiService } from '../jaqpot-client/api/task.service';
// import { Subject, interval } from 'rxjs';
// import { Task } from '../jaqpot-client';
// import { startWith, switchMap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskHandlerService {

//   observeTaskId:string
//   observe: Subject<Task> = new Subject();


//   constructor(
//     taskId:string,
//     private _taskApi:TaskApiService
//   ) { 
//     this.observeTaskId = taskId
    
//   }


//   public startObserving(){
    
//     this.observe.subscribe((task:Task) =>{
//       console.log(task)
//     })

//   }

//   getTask(){
//     interval(10000).pipe(
//             startWith(0),
//             switchMap(() => this._taskApi.getWithIdSecured(this.observeTaskId))
//           ).subscribe((taskGot:Task) => {
//             if(taskGot.status.toString() === 'QUEUED' || taskGot.status.toString() === 'RUNNING'){
//               this.observe.next(taskGot);
//             }else{
//               this.observe.unsubscribe();
//             }
//             console.log(taskGot)
//           })

//   }
  

// }
