/// <reference path="./validation.ts"/>
namespace Validation {
    const lettersRegexp: RegExp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(str: string): boolean {
            return lettersRegexp.test(str);
        }
    }
}