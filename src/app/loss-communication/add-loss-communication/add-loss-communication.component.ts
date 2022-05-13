import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CPFValidator } from '../../shared/validators/cpf-validator';

import { LossCommunicationConflic } from '../entity/loss-communication-conflicts';
import { LossCommunicationService } from '../loss-communication.service';

@Component({
  selector: 'app-add-loss-communication',
  templateUrl: './add-loss-communication.component.html',
  styleUrls: ['./add-loss-communication.component.css'],
})
export class AddLossCommunicationComponent implements OnInit {
  addLossCommunicationForm!: FormGroup;
  conflicts: LossCommunicationConflic[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private service: LossCommunicationService,
    private toastrService: NbToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addLossCommunicationForm = this.fb.group({
      farmerName: ['Carol', [Validators.required]],
      farmerEmail: ['carol@email.com', [Validators.required, Validators.email]],
      farmerDocument: ['261.891.930-05', [Validators.required]],
      harvestDate: [new Date('2022-05-11 01:46:14.356'), [Validators.required]],
      couseOfLoss: ['ray', [Validators.required]],
      long: [1, [Validators.required]],
      lat: [10, [Validators.required]],
    });
  }

  async verifyConflictsOnLatLong() {
    this.conflicts = await this.service.verifyConflictsOnLatLong({
      couseOfLoss: this.addLossCommunicationForm.controls['couseOfLoss'].value,
      harvestDate: this.addLossCommunicationForm.controls['harvestDate'].value,
      location: {
        lat: this.addLossCommunicationForm.controls['lat'].value,
        long: this.addLossCommunicationForm.controls['long'].value,
      },
    });

    return this.conflicts;
  }

  async sendForm() {
    if (!this.addLossCommunicationForm.valid) {
      this.toastrService.warning("Some fields aren't valid", 'Invalid Form', {
        icon: '',
      });
      return;
    }
    const isValidCPF = CPFValidator.validate(
      this.addLossCommunicationForm.controls['farmerDocument'].value
    );
    if (!isValidCPF) {
      this.toastrService.warning('Invalid CPF', 'Invalid Form', {
        icon: '',
      });
      return;
    }
    const { id } = await this.service.createLossConflic(
      this.addLossCommunicationForm.value
    );
    this.router.navigate(['/dashboard', 'loss-communication-details', id]);
  }

  async validateLocationAndSave() {
    const { length: conflicsLength } = await this.verifyConflictsOnLatLong();
    if (conflicsLength) {
      return;
    }
    this.sendForm();
  }
}
