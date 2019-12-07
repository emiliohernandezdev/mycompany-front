import { Component, NgZone } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  navs = [
    {
      icon: 'home', text: 'Dashboard'
    },
    {
      icon: 'attach_money', text: 'Ingresos'
    }
  ];
  mode: string = 'side'
  open = 'true';
  width;
  height;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }


      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private ngZone: NgZone) {
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.changeMode();
      })
    }

  }

  changeMode() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (this.width <= 800) {
      this.mode = 'over';
      this.open = 'false';
    }
    if (this.width > 800) {
      this.mode = 'side';
      this.open = 'true';
    }
  }

}

