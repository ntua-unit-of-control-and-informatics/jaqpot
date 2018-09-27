import { Component, OnInit, ViewChild } from '@angular/core';
import { AlgorithmService } from '../../jaqpot-client/api/algorithm.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Algorithm, Parameter } from '../../jaqpot-client';
// import { ParameterListComponent } from '../../base/components/parameterlist';
import { ParameterlistComponent } from '../../base/components/parameterlist/parameterlist.component';
import { ParameterstepsComponent } from '../../base/components/parametersteps/parametersteps.component';

@Component({
  selector: 'app-createhttkmodel',
  templateUrl: './createhttkmodel.component.html',
  styleUrls: ['./createhttkmodel.component.css']
})
export class CreatehttkmodelComponent implements OnInit {

  // parentMessage = "message from parent"
  species: string;


  public algo: Algorithm;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public parameters: Array<Parameter>;
  parametersFormGroup: FormGroup;
  speciesFormGroup: FormGroup;


  @ViewChild(ParameterlistComponent) parametersList;
  @ViewChild(ParameterstepsComponent) parameterSteps;

  constructor(
    private algoService:AlgorithmService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.parametersFormGroup = this._formBuilder.group({
    })

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    
    this.secondFormGroup = this._formBuilder.group({
      secCtrl: ['', Validators.required]
    });
    this.algoService.getAlgorithmById('httk')
    .subscribe(algoGot=>{
      this.algo = algoGot;
      // console.log(algoGot._id);
      this.parameters = algoGot.parameters
      console.log(algoGot.parameters)
      console.log(this.parameters)
      // this.parameters = this.parametersList.parameters
    })
  }

  ngAfterViewInit(){

  }


}
