import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: '[ngx-facebook-preset]',
  templateUrl: './facebook-preset.component.html',
  styleUrls: ['./facebook-preset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacebookPresetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
