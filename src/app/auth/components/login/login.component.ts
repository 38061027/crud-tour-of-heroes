import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Credentials } from '../../models/credential.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  form = this.fb.group({
    email: [{value:'tour0f.heroes', disabled: true},
    [Validators.email, Validators.required],
  ],
  password: ['', [Validators.required, Validators.minLength(10)]]
  })



  constructor(private authService: AuthService , private fb: FormBuilder){}

  onSubmit():void{

    if(this.form.valid){
       const email = this.form.value.email as string
       const password = this.form.value.password as string


       if(email && password){
         const credentials: Credentials = {email, password}
         this.authService.login(credentials)
       }


    }

  }




}
