export interface ApiLossCommunicationResponse {
  id: string;
  analysts_id: string;
  farmer_name: string;
  farmer_email: string;
  farmer_document: string;
  harvest_date: Date;
  couse_of_loss: string;
  created_at: Date;
  deleted: boolean;
  location: Location;
  analyst: Analyst;
}

interface Location {
  type: string;
  coordinates: number[];
}

interface Analyst {
  id: string;
  email: string;
  name: string;
}
