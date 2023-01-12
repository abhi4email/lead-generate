import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadGenerateComponent } from './lead-generate/lead-generate.component';
import { StepFirstComponent } from './lead-generate/step-first/step-first.component';
import { StepSecondComponent } from './lead-generate/step-second/step-second.component';
import { StepThirdComponent } from './lead-generate/step-third/step-third.component';
import { SidebarComponent } from './lead-generate/sidebar/sidebar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    LeadGenerateComponent,
    StepFirstComponent,
    StepSecondComponent,
    StepThirdComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
