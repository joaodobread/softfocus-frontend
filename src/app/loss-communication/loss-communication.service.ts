import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { firstValueFrom } from 'rxjs';
import { AddLossConflict } from './contracts/service/add-loss-communication';
import { VerifyConflictsService } from './contracts/service/verify-conflicts';
import { ApiLossCommunicationResponse } from './entity/api-loss-communication-response';
import { LossCommunication } from './entity/loss-communication';
import { LossCommunicationConflic } from './entity/loss-communication-conflicts';
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

  async verifyConflictsOnLatLong(
    params: VerifyConflictsService.Params
  ): Promise<LossCommunicationConflic[]> {
    const response = await firstValueFrom(
      this.http.post<VerifyConflictsService.Response>(
        `${this.url}/find-location-conflict`,
        {
          location: params.location,
          couse_of_loss: params.couseOfLoss,
          harvest_date: params.harvestDate,
        },
        {
          headers: { authorization: `Bearer ${this.accessToken}` },
        }
      )
    );

    return response.map(
      (conflic) =>
        <LossCommunicationConflic>{
          couseOfLoss: conflic.couse_of_loss,
          farmerDocument: conflic.farmer_document,
          farmerEmail: conflic.farmer_email,
          farmerName: conflic.farmer_name,
          harvestDate: conflic.harvest_date,
          id: conflic.id,
          location: conflic.location,
        }
    );
  }

  async createLossConflic(params: AddLossConflict.Params) {
    const body: AddLossConflict.CreateLossCommunicationApiPayload = {
      couse_of_loss: params.couseOfLoss,
      farmer_document: params.farmerDocument,
      farmer_email: params.farmerEmail,
      farmer_name: params.farmerName,
      harvest_date: params.harvestDate,
      location: {
        lat: params.lat,
        long: params.long,
      },
    };
    const result = await firstValueFrom<AddLossConflict.Response>(
      this.http.post<AddLossConflict.Response>(this.url, body, {
        headers: { authorization: `Bearer ${this.accessToken}` },
      })
    );
    return result;
  }

  async delete(id: string) {
    await firstValueFrom(
      this.http.delete(`${this.url}/${id}`, {
        headers: { authorization: `Bearer ${this.accessToken}` },
      })
    );
  }
}
