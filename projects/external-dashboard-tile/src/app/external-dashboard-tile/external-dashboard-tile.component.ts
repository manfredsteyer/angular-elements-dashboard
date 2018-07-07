import { Component, Input, ChangeDetectorRef, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

class Stats {
  constructor(
    readonly a: number,
    readonly b: number,
    readonly c: number
  ) { }
}

@Component({
  templateUrl: './external-dashboard-tile.component.html',
  styleUrls: ['./external-dashboard-tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalDashboardTileComponent implements OnInit {

  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  private statsSubject = new BehaviorSubject<Stats>(null);
  public stats$ = this.statsSubject.asObservable();

  // constructor(private cd: ChangeDetectorRef) {
  // }

  ngOnInit(): void {
    this.statsSubject.next(new Stats(this.a, this.b, this.c));
  }

  more(): void {
    this.a = Math.round(Math.random() * 100);
    this.b = Math.round(Math.random() * 100);
    this.c = Math.round(Math.random() * 100);

    // this.cd.markForCheck();
    this.statsSubject.next(new Stats(this.a, this.b, this.c));
  }

}


