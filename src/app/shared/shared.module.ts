import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../helper/material/material.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule, 
    MatIconModule
  ], 
  declarations: [ 
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ],
})
export class SharedModule { }
