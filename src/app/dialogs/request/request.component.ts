import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  message:string = ""

  canSend:boolean = false;

  constructor(
    public dialModalRef: MatDialogRef<RequestComponent>

  ) { }

  ngOnInit(): void {
  }

  messageChanged(){
    if(this.message.length > 3){
      this.canSend = true
    }else{
      this.canSend = false;
    }
  }


  onCancel(){
    this.dialModalRef.close()
  }

  onSend(){
    this.dialModalRef.close(this.message)
  }

}
