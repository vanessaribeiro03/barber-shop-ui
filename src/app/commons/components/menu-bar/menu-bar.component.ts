import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-menu-bar',
  standalone: true,  
  imports: [MatMenuModule, MatButtonModule, CommonModule],  
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  isSchedulePage = false;
  isClientPage = false;

  constructor(private readonly router: Router) {
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isSchedulePage = this.router.url.includes('/schedules');
      this.isClientPage = this.router.url.includes('/clients');
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}


