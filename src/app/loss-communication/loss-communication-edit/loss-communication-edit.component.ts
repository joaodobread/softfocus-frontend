import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LossCommunication } from '../entity/loss-communication';
import { LossCommunicationService } from '../loss-communication.service';

@Component({
  selector: 'app-loss-communication-edit',
  templateUrl: './loss-communication-edit.component.html',
  styleUrls: ['./loss-communication-edit.component.css'],
})
export class LossCommunicationEditComponent implements OnInit {
  addLossCommunicationForm!: FormGroup;
  loading: boolean = true;
  lossCommunication!: LossCommunication;
  lossCommunicationId!: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly location: Location,
    private readonly fb: FormBuilder,
    private service: LossCommunicationService
  ) {
    this.route.params.subscribe(
      (params) => (this.lossCommunicationId = params['id'])
    );
    if (!this.lossCommunicationId) this.router.navigate(['/dashboard']);
    this.addLossCommunicationForm = this.fb.group({
      farmerName: ['', [Validators.required]],
      farmerEmail: ['', [Validators.required, Validators.email]],
      farmerDocument: ['', [Validators.required]],
      harvestDate: [new Date(), [Validators.required]],
      couseOfLoss: ['', [Validators.required]],
      long: [0, [Validators.required]],
      lat: [0, [Validators.required]],
    });
  }

  async ngOnInit() {
    try {
      this.lossCommunication = await this.service.findOne(
        this.lossCommunicationId
      );
      this.loading = false;
    } catch (error) {
      this.router.navigate(['/dashboard']);
    }
    this.addLossCommunicationForm = this.fb.group({
      farmerName: [this.lossCommunication.farmerName, [Validators.required]],
      farmerEmail: [
        this.lossCommunication.farmerEmail,
        [Validators.required, Validators.email],
      ],
      farmerDocument: [
        this.lossCommunication.farmerDocument,
        [Validators.required],
      ],
      harvestDate: [this.lossCommunication.harvestDate, [Validators.required]],
      couseOfLoss: [this.lossCommunication.couseOfLoss, [Validators.required]],
      long: [
        this.lossCommunication.location.coordinates[0],
        [Validators.required],
      ],
      lat: [
        this.lossCommunication.location.coordinates[1],
        [Validators.required],
      ],
    });
  }

  goBack() {
    this.location.back();
  }

  async sendForm() {
    const response = await this.service.update({
      id: this.lossCommunicationId,
      payload: this.addLossCommunicationForm.value,
    });
    this.router.navigate([
      '/dashboard',
      'loss-communication-details',
      response.id,
    ]);
  }
}
