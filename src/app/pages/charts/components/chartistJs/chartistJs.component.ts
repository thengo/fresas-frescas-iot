import {Component} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {ChartistJsService} from './chartistJs.service';
import 'style-loader!./chartistJs.scss';

@Component({
  selector: 'chartist-js',
  templateUrl: './chartistJs.html',
})

export class ChartistJs {

  private _af: AngularFire;
  private firebaseData: any;
  data:any;

  constructor(private _chartistJsService:ChartistJsService, af: AngularFire) {
    this._af = af;
}

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
    this.getFirebaseData();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }

  getFirebaseData() {
      this._af.database.list('/data', { preserveSnapshot: true})
        .subscribe(snapshots => {
          snapshots.forEach(snapshot => {
            console.log(snapshot.key);
            console.log(snapshot.val());
          })
        })
  }
}
