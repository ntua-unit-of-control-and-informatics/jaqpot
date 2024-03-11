import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from '../../jaqpot-client';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-pred-archive',
  templateUrl: './pred-archive.component.html',
  styleUrls: ['./pred-archive.component.css'],
})
export class PredArchiveComponent implements OnInit {
  @Input() modelId: string;

  datasets: Dataset[] = [];

  constructor(private datasetApi: DatasetService) {}

  ngOnInit() {
    console.log(this.modelId);
    let params = new HttpParams()
      .set('byModel', this.modelId)
      .set('existence', 'PREDICTED');
    this.datasetApi.getList(params).subscribe((datasets: Dataset[]) => {
      console.log(datasets);
    });
  }
}
