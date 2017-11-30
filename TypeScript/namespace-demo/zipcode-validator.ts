///<reference path="./validation.ts" />
namespace Validation {
    const numberRegexp: RegExp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(str: string): boolean {
            return str.length === 5 && numberRegexp.test(str);
        }
    }

}