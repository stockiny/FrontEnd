import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from 'src/app/core/helpers/routes';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit{
  public routes = routes;
  password = '';
  show = false;

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private appService: AppService, private storage: WebstorgeService) {}

  ngOnInit() {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }

  submit() {
    if (this.form.valid) {
      const username = this.form.value.username;
      const password = this.form.value.password;

      this.appService.login(username, password).subscribe(
        (response) => {
          if (response.success) {
            this.storage.login();  
            console.log('succees')
          } else {
            console.error(response.error_message);
            console.log('erreur')
          }
        },
        (error) => {
          console.error('Error during login:', error);
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
