// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
// import { filter, map, Subscription } from 'rxjs';
// import { CardHeaderComponent } from './commons/components/card-header/card-header.component';
// import { MenuBarComponent } from './commons/components/menu-bar/menu-bar.component';
// import { NavbarComponent } from './commons/components/navbar/navbar.component';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, CardHeaderComponent, MenuBarComponent, NavbarComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent implements OnInit, OnDestroy {
//   title = 'barber-shop-ui';

//   private routeSubscription?: Subscription;

//   constructor(
//     private readonly router: Router,
//     private readonly activatedRoute: ActivatedRoute
//   ) { }

//   ngOnDestroy(): void {
//     if (this.routeSubscription) {
//       this.routeSubscription.unsubscribe()
//     }
//   }

//   ngOnInit(): void {
//     this.routeSubscription = this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd),
//       map(() => this.getRouteTitle(this.activatedRoute))
//     ).subscribe(title => this.title = title)
//   }

//   private getRouteTitle(route: ActivatedRoute): string {
//     let child = route;
//     while (child.firstChild) {
//       child = child.firstChild;
//     }
//     // return child.snapshot.data['title'] || 'Default Title';

//         return child.snapshot.data['title'];

    
//   }

// }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';
import { CardHeaderComponent } from './commons/components/card-header/card-header.component';
import { MenuBarComponent } from './commons/components/menu-bar/menu-bar.component';
import { NavbarComponent } from './commons/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardHeaderComponent, MenuBarComponent, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = ''; // Inicializando como string vazia para evitar a faixa em branco
  private routeSubscription?: Subscription;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.routeSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.getRouteTitle(this.activatedRoute))
    ).subscribe(title => this.title = title);
  }

  private getRouteTitle(route: ActivatedRoute): string {
    let child = route;
    while (child.firstChild) {
      child = child.firstChild;
    }

    // Retorna um título apenas se não for a rota da home ("/")
    if (child.snapshot.url.length === 0) {
      return ''; // Para a home, não há título
    }

    return child.snapshot.data['title'] || ''; // Retorna o título definido nas rotas ou vazio
  }
}


