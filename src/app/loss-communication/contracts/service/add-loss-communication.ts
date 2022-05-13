import { LossCommunication } from '../../entity/loss-communication';

export namespace AddLossConflict {
  export type Params = {
    farmerName: string;
    farmerEmail: string;
    farmerDocument: string;
    harvestDate: Date;
    couseOfLoss: string;
    long: number;
    lat: number;
  };

  export type CreateLossCommunicationApiPayload = {
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

  export type Response = LossCommunication;
}
