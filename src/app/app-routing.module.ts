import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepFirstComponent } from './lead-generate/step-first/step-first.component';
import { StepSecondComponent } from './lead-generate/step-second/step-second.component'
import { StepThirdComponent } from './lead-generate/step-third/step-third.component'

const routes: Routes = [
  {path: 'lead-generate/step-first', component: StepFirstComponent},
  {path: '', redirectTo: 'lead-generate/step-first', pathMatch: 'full'}, 
  {path:'lead-generate/step-second', component: StepSecondComponent},
  {path:'lead-generate/step-third', component: StepThirdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
    )
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
