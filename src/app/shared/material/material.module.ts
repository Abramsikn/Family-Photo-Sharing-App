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
    MatGridListModule, 
    MatSidenavModule,
    MatListModule,
    MatIconModule } from '@angular/material';

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
        MatGridListModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule
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
        MatGridListModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule
    ],
})

export class MaterialModule { }