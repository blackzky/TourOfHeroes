import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes/heroes.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';

import { HeroService } from './hero/hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent, 
    HeroesComponent, 
    HeroDetailComponent, 
    DashboardComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers:    [HeroService]
})
export class AppModule { }
