import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './maps.routing';
import { Maps } from './maps.component';
import { GoogleMaps } from './components/googleMaps/googleMaps.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Maps,
    GoogleMaps
  ]
})
export class MapsModule {}
