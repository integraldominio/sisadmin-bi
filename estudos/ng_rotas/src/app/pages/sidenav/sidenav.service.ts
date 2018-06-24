import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';

@Injectable()
export class SidenavService {

    // controle do sidenav com classe de servico
    // this.sidenavService.setSidenav(this.sidenav);
    // this.router.events
    // .subscribe(event => {
    // if (event instanceof NavigationStart || event instanceof  ResolveStart   ) {
    //    this.sidenavService.close().then(() => { });
    //  }
    // });


  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open(): Promise<MatDrawerToggleResult> {
    return this.sidenav.open();
  }
  public close(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }

  public toggle(isOpen?: boolean): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle(isOpen);
  }

}
