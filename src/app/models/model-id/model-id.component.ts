import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../session/session.service';
import { ModelApiService } from '../../jaqpot-client/api/model.service';

@Component({
  selector: 'app-model-id',
  templateUrl: './model-id.component.html',
  styleUrls: ['./model-id.component.css']
})
export class ModelIdComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private sessionService:SessionService,
    private modelApi:ModelApiService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id
  }

}
