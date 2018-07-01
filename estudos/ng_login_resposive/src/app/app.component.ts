import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loginForm: FormGroup;
  loginFormErrors: any;

  constructor(
      private formBuilder: FormBuilder,
  ) {
      this.loginFormErrors = {
          email   : {},
          password: {}
      };
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email   : ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });

      this.loginForm.valueChanges.subscribe(() => {
          this.onLoginFormValuesChanged();
      });
  }

  onLoginFormValuesChanged() {
      for ( const field in this.loginFormErrors ) {
          if ( !this.loginFormErrors.hasOwnProperty(field) ) {
              continue;
          }

          // Clear previous errors
          this.loginFormErrors[field] = {};

          // Get the control
          const control = this.loginForm.get(field);

          if ( control && control.dirty && !control.valid )  {
              this.loginFormErrors[field] = control.errors;
          }
      }
  }

}
