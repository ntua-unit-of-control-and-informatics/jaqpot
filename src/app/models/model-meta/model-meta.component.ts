import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-model-meta',
  templateUrl: './model-meta.component.html',
  styleUrls: ['./model-meta.component.css'],
})
export class ModelMetaComponent implements OnInit {
  @Input() trainedMeta: Object;

  constructor() {}

  ngOnInit(): void {}
}
