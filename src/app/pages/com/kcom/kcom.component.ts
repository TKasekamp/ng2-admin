import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input} from '@angular/core';

import {KCom } from "../../../theme/services/com/kcom";
import {ComService} from "../../../theme/services/com/com.service";
import {AppState} from "../../../app.service";

@Component({
  selector: 'com-kcom',
  templateUrl: './kcom.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class KComComponent implements OnInit{

  public kcom: KCom;

  constructor(private _comService:ComService, private state: AppState) {
    this.kcom = new KCom(); // Dummy object
  }

  ngOnInit() {
    this._loadFeed();
  }

  private _loadFeed() {
    this._comService.getKCom()

      .subscribe(
        kcom => {this.kcom = kcom; console.log("now here", kcom);this.state.set('kcom', kcom);  },
        error => console.log("Loadfeed", error)
      );
  }

  getKcom() {
    return this._comService.getKCom()
  .do(res => this.state.set('kcom', res));
  }
}
