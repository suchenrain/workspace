import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'inventory-app-fomr-ng-model',
  templateUrl: './fomr-ng-model.component.html',
  styleUrls: ['./fomr-ng-model.component.css']
})
export class FomrNgModelComponent implements OnInit {

  myForm: FormGroup;
  product: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value:', value);
  }
}
