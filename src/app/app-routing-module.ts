import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {StatisticsComponent} from "./statistics/statistics.component";

const routes: Routes = [{ path: 'home', component: HomepageComponent },
  { path: 'statistic', component: StatisticsComponent },
  { path: '', redirectTo: 'home',pathMatch:'full' }];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
