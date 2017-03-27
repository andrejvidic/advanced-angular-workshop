import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  template: `
    <p>
      activity-list Works!
    </p>
  `,
  styles: []
})
export class ActivityListComponent {

    activities: Observable<any>;
    
    constructor(http: Http) {
        this.activities =
            http.get('https://melbourne-things-to-do.firebaseio.com/activities.json')
            .map(res => res.json());
    }

  ngOnInit() {
  }

}
