import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LossCommunication } from '../entity/loss-communication';
import { LossCommunicationService } from '../loss-communication.service';

@Component({
  selector: 'app-list-all-loss-communication',
  templateUrl: './list-all-loss-communication.component.html',
  styleUrls: ['./list-all-loss-communication.component.css'],
})
export class ListAllLossCommunicationComponent implements OnInit {
  lossCommunication: LossCommunication[] = [];

  constructor(
    private readonly service: LossCommunicationService,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    this.lossCommunication = await this.service.findAll();
  }

  seeDetails(id: string) {
    this.router.navigate(['/dashboard', 'loss-communication-details', id]);
  }
}
