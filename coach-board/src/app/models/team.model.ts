import { Player } from './player.model';

export interface Team {
  $key?: string;
  name: string;
  country: string;
  logoUrl?: string;
  players: Player[];
}
