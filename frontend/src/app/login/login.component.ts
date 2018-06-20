import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DisplayMessage } from '../shared/models/display-message';
import { UserService} from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { UserxService } from '../_user/userx.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  title = 'Login';
  githubLink = 'https://github.com/integraldominio';
  form: FormGroup;
  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;
  /**
   * Notification message from received
   * form request or router
   */
  notification: DisplayMessage;
  returnUrl: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userApiService: UserxService,
    private authenticationService: AuthenticationService
  ) { }


  ngOnInit() {
    this.route.params
    .takeUntil(this.ngUnsubscribe)
    .subscribe((params: DisplayMessage) => {
      this.notification = params;
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onResetCredentials() {
/*     this.userService.resetCredentials()
    .takeUntil(this.ngUnsubscribe)
    .subscribe(res => {
      if (res.result === 'success') {
        alert('Password has been reset to 123 for all accounts');
      } else {
        alert('Server error');
      }
    });
 */  }

  repository() {
    window.location.href = this.githubLink;
  }

  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined;
    this.submitted = true;


    this.authenticationService.login(this.form.value.username, this.form.value.password)
    .delay(1000)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
           // this.error = error;
           // this.loading = false;
           this.submitted = false;
           this.notification = { msgType: 'error', msgBody: 'Incorrect username or password.' };
        });



/*     this.authService.login(this.form.value)
    // show me the animation
    .delay(1000)
    .subscribe(data => {
      this.userService.getMyInfo().subscribe();
      this.router.navigate([this.returnUrl]);
    },
    error => {
      this.submitted = false;
      this.notification = { msgType: 'error', msgBody: 'Incorrect username or password.' };
    }); */

  }


}
