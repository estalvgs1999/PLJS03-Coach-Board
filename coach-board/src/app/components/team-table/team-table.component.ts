import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {

  public teams$: Observable<Team[]>;

  constructor(private teamService: TeamService) { }

  // Rigth place to make requests
  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams();
    this.teamService.getTeams().pipe(take(1)).subscribe(teams => {
      if (teams.length === 0) {
        const team: Team = {
          name: 'All Stars Team',
          logoUrl: '/coach-board/src/assets/img.png',
          players: []
        };
      }
    });
  }

}
