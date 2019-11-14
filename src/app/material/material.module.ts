import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
];

@NgModule({
  exports: [ MaterialComponents ],
  imports: [ MaterialComponents ]
})
export class MaterialModule { }
