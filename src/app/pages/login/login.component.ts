import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Router} from "@angular/router";

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public af:AngularFire;

  constructor(fb:FormBuilder, af: AngularFire, private router: Router ) {
    this.af = af;
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  loginWithEmail(email, password) {
    return this.af.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if(this.form.valid) {
      this.loginWithEmail(values['email'], values['password']).then(() => {
        console.log(values);
        this.router.navigate(['']);
      }).catch((error: any) => {
        if (error) {
          console.log(error);
        }
      });
    }
  }
}
