import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { HttpModule }           from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent}   from './hero-detail/hero-detail.component';
import { HeroSearchComponent}   from './hero-search/hero-search.component';

import { HeroService }          from './hero/hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent, 
    HeroesComponent, 
    HeroDetailComponent, 
    DashboardComponent ,
    HeroSearchComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [HeroService]
})
export class AppModule { }
