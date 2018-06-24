import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { SidenavService } from './sidenav.service';
import { NavigationStart, ResolveStart, Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenaveComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor (
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private sidenavService: SidenavService
  ) {}

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  ngOnInit(): void {
    // controle do sidenav com classe de servico
    // this.sidenavService.setSidenav(this.sidenav);
    // this.router.events
    // .subscribe(event => {
    // if (event instanceof NavigationStart || event instanceof  ResolveStart   ) {
    //    this.sidenavService.close().then(() => { });
    //  }
    // });
  }

}

