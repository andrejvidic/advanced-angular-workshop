import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
