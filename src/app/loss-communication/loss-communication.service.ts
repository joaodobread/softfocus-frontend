import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { firstValueFrom } from 'rxjs';
import { ApiLossCommunicationResponse } from './entity/api-loss-communication-response';
import { LossCommunication } from './entity/loss-communication';
import { causeOfLossMapping } from './enum/couse-of-loss';

@Injectable({
  providedIn: 'root',
})
export class LossCommunicationService {
  private accessToken: string = '';
  private url: string =
    'https://softfocus-api.herokuapp.com/loss-communication';

  constructor(
    private readonly http: HttpClient,
    private readonly nbAuthService: NbAuthService
  ) {
    nbAuthService.getToken().subscribe((token) => {
      this.accessToken = token.getValue();
    });
  }

  getCouseOfLoss(couse: string) {
    return causeOfLossMapping[couse];
  }

  parseDefaultLoss(loss: ApiLossCommunicationResponse): LossCommunication {
    return <LossCommunication>{
      analyst: loss.analyst,
      analystsId: loss.analysts_id,
      couseOfLoss: this.getCouseOfLoss(loss.couse_of_loss),
      createdAt: loss.created_at,
      deleted: loss.deleted,
      farmerDocument: loss.farmer_document,
      farmerEmail: loss.farmer_email,
      farmerName: loss.farmer_name,
      harvestDate: loss.harvest_date,
      id: loss.id,
      location: loss.location,
    };
  }

  async findAll() {
    const response = await firstValueFrom<ApiLossCommunicationResponse[]>(
      this.http.get<ApiLossCommunicationResponse[]>(this.url, {
        headers: { authorization: `Bearer ${this.accessToken}` },
      })
    );
    return response.map((loss) => this.parseDefaultLoss(loss));
  }

  async findOne(id: string) {
    const response = await firstValueFrom<ApiLossCommunicationResponse>(
      this.http.get<ApiLossCommunicationResponse>(`${this.url}/${id}`, {
        headers: { authorization: `Bearer ${this.accessToken}` },
      })
    );
    return this.parseDefaultLoss(response);
  }
}
