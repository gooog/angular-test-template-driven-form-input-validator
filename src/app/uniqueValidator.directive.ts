import {AbstractControl, FormControl, Validator, ValidatorFn, NG_VALIDATORS} from '@angular/forms';
import {Directive} from '@angular/core';
import {NameService} from './name.service';

function uniqueValidatorFactory(nameServiceRef): ValidatorFn {
    return (c: AbstractControl) => {
        if (nameServiceRef.isUnique(c.value)) {
            return null;
        } else {
            return { error: true };
        }
    };
}

@Directive({
    selector: '[appUnique][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: UniqueValidatorDirective, multi: true }
    ]
})
export class UniqueValidatorDirective implements Validator {
    validator: ValidatorFn;

    constructor(private nameService: NameService) {
        this.validator = uniqueValidatorFactory(this.nameService);
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}
