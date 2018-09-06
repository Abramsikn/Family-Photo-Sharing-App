import { ValidatorFn, AbstractControl } from "@angular/forms";

export function passwordMatch(): ValidatorFn { /* ValiadtorFn - explains to the system that this a validato */
    return (repeatPass: AbstractControl): {[key: string]: any} => {
        const formGrp = repeatPass.parent;
        if (formGrp) { 
            const passwrd = formGrp.get('password');
            return passwrd.value !== repeatPass.value ? {'no-match': {value: repeatPass.value}}: null;
        }
        return null;
    }
}