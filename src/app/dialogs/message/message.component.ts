import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public _message:string

  constructor(public dialogRef: MatDialogRef<MessageComponent>){
  }

  ngOnInit(): void {
      
  }

  onClose(){
      this.dialogRef.close(true);
  }

}
