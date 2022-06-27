import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AppCardResourceComponent } from './components/AppCardResource/card-resource.component';

@NgModule({
  declarations: [
    HomeComponent, 
    AppCardResourceComponent
  ],
  imports: [SharedModule, HomeRoutingModule]
})

export class HomeModule {}