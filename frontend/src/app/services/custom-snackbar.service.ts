import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../components/custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {
  constructor(private snackBar: MatSnackBar) {}
  public openSnackBar(message: string) {


    this.snackBar.openFromComponent(CustomSnackbarComponent, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass:['green-snackbar'],
      data: { message: message }
    });
  }
}