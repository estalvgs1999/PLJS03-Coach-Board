export interface Player {
  $key?: string;
  name: string;
  lastName: string;
  pictureUrl?: string;
  position: Positions;
  weight: number;
  height: number;
  country: string; // Country Code ISO 3166-alpha-3
  team: string;
  jersey: string;
}

export enum Positions {
  F = "Forward",
  G = "Guard",
  C = "Center",
  PG = "Point Guard",
  SG = "Shooting Guard",
  SF = "Small Forward",
  PF = "Power Forward"
}