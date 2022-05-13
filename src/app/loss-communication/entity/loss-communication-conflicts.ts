interface Location {
  type: string;
  coordinates: number[];
}

export interface LossCommunicationConflic {
  id: string;
  farmerName: string;
  farmerDocument: string;
  harvestDate: Date;
  couseOfLoss: string;
  farmerEmail: string;
  location: Location;
}
