import { Player } from './player.model';

export interface Team {
  $key?: string;
  name: string;
  logoUrl?: string;
  players: Player[];

  addPlayer: (player: Player) => void;
  removePlayer: (player: Player) => boolean;
}
