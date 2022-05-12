import { CouseOfLoss } from '../enum/couse-of-loss';

interface Location {
  type: string;
  coordinates: number[];
}

interface Analyst {
  id: string;
  email: string;
  name: string;
}

export interface LossCommunication {
  id: string;
  analystsId: string;
  farmerName: string;
  farmerEmail: string;
  farmerDocument: string;
  harvestDate: Date;
  couseOfLoss: CouseOfLoss;
  createdAt: Date;
  deleted: boolean;
  location: Location;
  analyst: Analyst;
}
