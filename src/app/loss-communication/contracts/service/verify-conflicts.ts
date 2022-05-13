import { CouseOfLoss } from '../../enum/couse-of-loss';

export namespace VerifyConflictsService {
  type Location = {
    lat: number;
    long: number;
  };

  export type Params = {
    location: Location;
    harvestDate: Date;
    couseOfLoss: CouseOfLoss;
  };

  type LocationApiResponse = {
    type: string;
    coordinates: number[];
  };

  export type LossCommunicationConflicResponse = {
    id: string;
    farmer_name: string;
    location: LocationApiResponse;
    farmer_document: string;
    harvest_date: Date;
    couse_of_loss: string;
    farmer_email: string;
  };

  export type Response = LossCommunicationConflicResponse[];
}
