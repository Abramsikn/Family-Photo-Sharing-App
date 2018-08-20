import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule,
    MatSidenavModule
  ],
  declarations: [ AlbumsListComponent ]
})
export class AlbumsModule { }
