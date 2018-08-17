import { NgModule } from '@angular/core';
import { MatCheckboxModule, 
    MatInputModule, 
    MatButtonModule, 
    MatDividerModule,
    MatCardModule, 
    MatToolbarModule, 
    MatProgressSpinnerModule, 
    MatProgressBarModule, 
    MatSnackBarModule, 
    MatMenuModule, 
    MatGridListModule } from '@angular/material';

@NgModule({
    imports: [
        MatCheckboxModule,
        MatInputModule, 
        MatButtonModule, 
        MatDividerModule,
        MatCardModule, 
        MatToolbarModule, 
        MatProgressSpinnerModule, 
        MatProgressBarModule, 
        MatSnackBarModule, 
        MatMenuModule, 
        MatGridListModule
    ],
    exports: [
        MatCheckboxModule,
        MatInputModule, 
        MatButtonModule, 
        MatDividerModule,
        MatCardModule, 
        MatToolbarModule, 
        MatProgressSpinnerModule, 
        MatProgressBarModule, 
        MatSnackBarModule, 
        MatMenuModule, 
        MatGridListModule
    ],
})

export class MaterialModule { }