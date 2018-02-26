import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: 'inventory-app-form-with-validations-explicit',
  templateUrl: './form-with-validations-explicit.component.html',
  styleUrls: ['./form-with-validations-explicit.component.css']
})
export class FormWithValidationsExplicitComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
    });
    this.sku = this.myForm.controls['sku'];

    /* watch for value changing */
    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changes to:', value);
    });
    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changes to:', form);
    })

  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log("you submitted value:", value);
  }

  /* costom validations */
  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalidSku: true };
    }
  }
}
