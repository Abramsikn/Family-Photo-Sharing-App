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
    MatIconModule, 
    MatFormFieldModule} from '@angular/material';

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
        MatIconModule,
        MatFormFieldModule
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