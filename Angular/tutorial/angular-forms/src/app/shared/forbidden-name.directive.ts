import { Directive,Input } from '@angular/core';
import { Validator,ValidatorFn,AbstractControl, NG_VALIDATORS } from '@angular/forms';

export function forbiddenNameValidator(nameReg: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameReg.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  }
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true}]
})
export class ForbiddenNameDirective implements Validator {
  @Input() forbiddenName: string;

  constructor() { }
  validate(control: AbstractControl): { [key: string]: any } {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }
}
