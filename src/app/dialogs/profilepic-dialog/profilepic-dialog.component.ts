import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageCropperModule } from 'ngx-image-cropper';

@Component({
  selector: 'app-profilepic-dialog',
  templateUrl: './profilepic-dialog.component.html',
  styleUrls: ['./profilepic-dialog.component.css']
})
export class ProfilepicDialogComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  loadImageFailed: any = '';
  cropperReady = false;

  saveDisactivated = true;

  constructor(@Optional() public dialogRef: MatDialogRef<ProfilepicDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public profPic: string){

  }

  ngOnInit() {
 
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCroppedBase64(image: string) {
      this.croppedImage = image;
      this.saveDisactivated = false;
  }

  imageLoaded() {
    this.cropperReady = true;
  }
  
  imageLoadFailed () {
    console.log('Load failed');
  }

  onCloseConfirm() {
    
    this.dialogRef.close(this.croppedImage);
  }

}
