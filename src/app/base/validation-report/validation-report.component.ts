import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../../jaqpot-client';

@Component({
  selector: 'app-validation-report',
  templateUrl: './validation-report.component.html',
  styleUrls: ['./validation-report.component.css'],
})
export class ValidationReportComponent implements OnInit {
  @Input() report: Report;

  constructor() {}

  ngOnInit() {}
}
