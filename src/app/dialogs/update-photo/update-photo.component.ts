import { Component, OnInit, Optional, Inject } from '@angular/core';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { UserService } from '../../jaqpot-client/api/user.service';
import { ModelApiService } from '../../jaqpot-client/api/model.service';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styleUrls: ['./update-photo.component.css']
})
export class UpdatePhotoComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  loadImageFailed: any = '';
  cropperReady = false;


  datasetApi:DatasetService
  userApi:UserService
  modelApi:ModelApiService

  saveDisactivated = true;

  constructor(
    @Optional() public dialogRef: MatDialogRef<UpdatePhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public profPic: string
  ) { }

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
