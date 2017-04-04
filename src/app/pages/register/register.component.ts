import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import {Router} from "@angular/router";

import 'style-loader!./register.scss';

@Component({
  selector: 'register',
  templateUrl: './register.html',
})
export class Register {

  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;
  public af:AngularFire;

  public submitted:boolean = false;

  constructor(fb:FormBuilder, af: AngularFire, private router: Router) {
    this.af = af;

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  registerUser(email, password) {
    console.log(email)
    return this.af.auth.createUser({
      email: email,
      password: password
    });
  }

  saveUserInfoFromForm(uid, name, email) {
    return this.af.database.object('registeredUsers/' + uid).set({
      name: name,
      email: email,
    });
  }

  public onSubmit(values:Object, event):void {
    event.preventDefault();
    this.submitted = true;
    if (this.form.valid) {
      this.registerUser(values['email'], values['passwords']['password']).then((user) => {
        //console.log(user);
        //console.log(values);
        /*this.saveUserInfoFromForm(user.uid, values['name'], values['email']).then(() => {
          console.log(values);
          //this.router.navigate(['']);
        }).catch((error: any) => {
            console.log(error);
          });*/
      }).catch((error: any) => {
          console.log(error);
        }); 
    }
  }
}
