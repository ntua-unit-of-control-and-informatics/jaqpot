import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelFeaturesComponent } from './model-features/model-features.component';
import { PredictValidateComponent } from './predict-validate/predict-validate.component';
import { ValidateComponent } from './validate/validate.component';
import { PredArchiveComponent } from './pred-archive/pred-archive.component';
import { ModelMetaComponent } from './model-meta/model-meta.component';
// import { ModelIdComponent } from './model-id/model-id.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModelMetaComponent]
})
export class ModelsModuleModule { }
