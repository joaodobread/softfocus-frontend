import { LossCommunication } from '../../entity/loss-communication';

export namespace UpdateLossConflict {
  export type Payload = {
    farmerName: string;
    farmerEmail: string;
    farmerDocument: string;
    harvestDate: Date;
    couseOfLoss: string;
    long: number;
    lat: number;
  };

  export type UpdateLossCommunicationApiPayload = {
    farmer_name: string;
    farmer_email: string;
    farmer_document: string;
    location: {
      long: number;
      lat: number;
    };
    harvest_date: Date;
    couse_of_loss: string;
  };

  export type Params = {
    id: string;
    payload: Payload;
  };

  export type Response = LossCommunication;
}
