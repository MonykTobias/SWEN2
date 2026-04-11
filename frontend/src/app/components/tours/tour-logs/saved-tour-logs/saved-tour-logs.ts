import {Component, inject, signal} from '@angular/core';
import {TourLogsStore} from '../../../../states/tour-logs.store';
import {Difficulty} from '../../../../models/tour-log.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-saved-tour-logs',
  imports: [],
  templateUrl: './saved-tour-logs.html',
  styleUrl: './saved-tour-logs.css',
  standalone: true
})
export class SavedTourLogs {
  tourLogsStore = inject(TourLogsStore);
  router = inject(Router)

  activeTourLogId = signal<number | null>(null);
  tourlogs = this.tourLogsStore.allTours;
  tourId: number | null = null;

  constructor(route: ActivatedRoute){
    this.tourId = Number(route.snapshot.params['id']);
  }

  // sets activeTourLogId to specified id or set to null if already selected
  selectTourLog(id:number){
    if(this.activeTourLogId() === id){
      this.activeTourLogId.set(null);
    }else{
      this.activeTourLogId.set(id);
    }
  }

  editTourLog(id:number){
    this.router.navigate(['/tours', 'tourlogs', 'edit', id]);
  }

  protected readonly Difficulty = Difficulty;

  protected newTourLog() {
    if(this.tourId){
      this.router.navigate(['/tours', 'tourlogs', 'create', this.tourId]);
    }else{
      console.error("Error! no active tour");
      this.router.navigate(['/tours']);
    }
  }

  protected back() {
    this.router.navigate(['/tours']);
  }
}
