import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { LossCommunication } from '../entity/loss-communication';
import { causeOfLossMapping } from '../enum/couse-of-loss';
import { LossCommunicationService } from '../loss-communication.service';

@Component({
  selector: 'app-loss-communication-details',
  templateUrl: './loss-communication-details.component.html',
  styleUrls: ['./loss-communication-details.component.css'],
})
export class LossCommunicationDetailsComponent implements OnInit {
  loading: boolean = true;
  lossCommunication!: LossCommunication;
  lossCommunicationId!: string;

  constructor(
    private readonly service: LossCommunicationService,
    private readonly route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (params) => (this.lossCommunicationId = params['id'])
    );
  }

  async ngOnInit() {
    this.lossCommunication = await this.service.findOne(
      this.lossCommunicationId
    );
    this.loading = false;
  }
}
