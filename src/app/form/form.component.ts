import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, FormControlName, Validators, AbstractControl} from '@angular/forms'

@Component({
    selector:'login-form',
    templateUrl: './form.component.html'
})

export class  FormComponent implements OnInit {
    private formGroup: FormGroup;
    constructor(
        private fb:FormBuilder
    ){};

     public ngOnInit(): void {
        this.formGroup = this.fb.group({
            firstName:['', [Validators.required, Validators.minLength(4),  this.forbiddenNameValidator]],
            lastName:[''],
            age:['']
        })
        console.log(this.formGroup);
     //this.formGroup.valueChanges
      //.subscribe((data: FormGroup) => console.log(this.formGroup));

      console.log(this.formGroup.get('firstName'));
     }

     public forbiddenNameValidator(control: AbstractControl):{[key:string]:any} | null  {
        if((control.value.trim()).tolowerCase() === 'vikram'){
            //return {'firstNameErr':false};
            return null;
        }else{
            return {'firstNameErr':true}
        }
     }

     //required(control: AbstractControl): ValidationErrors | null;
     
}
