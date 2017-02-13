import {Component, OnInit} from '@angular/core';

import {KCom } from "../../../theme/services/com/kcom";
import {ComService} from "../../../theme/services/com/com.service";

@Component({
  selector: 'com-kcom',
  templateUrl: './kcom.component.html'
})
export class KComComponent implements OnInit{
  public kcom: KCom;

  constructor(private _comService:ComService) {
  }

  ngOnInit() {
    this._loadFeed();
  }

  private _loadFeed() {
    this._comService.getKCom()

      .subscribe(
        kcom => this.kcom = kcom,
        error => console.log("Loadfeed", error)
      );
  }
}
