import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
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
    private readonly route: ActivatedRoute,
    private readonly dialogService: NbDialogService,
    private readonly router: Router
  ) {
    this.route.params.subscribe(
      (params) => (this.lossCommunicationId = params['id'])
    );
    if (!this.lossCommunicationId) this.router.navigate(['/dashboard']);
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
  }

  openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  confirmDelete(dialog: any) {
    dialog.close();
    this.service.delete(this.lossCommunicationId);
    this.router.navigate(['/dashboard']);
  }

  edit() {
    this.router.navigate([
      '/dashboard',
      'loss-communication-edit',
      this.lossCommunicationId,
    ]);
  }
}
