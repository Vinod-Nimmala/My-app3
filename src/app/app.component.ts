import { Component } from '@angular/core';
import { DummyDisplayComponent } from './dummy-display/dummy-display.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { DummyDialogDisplayComponent } from './dummy-dialog-display/dummy-dialog-display.component';
import { Sort } from '@angular/material/sort';
import { FormControl, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';


//For Table

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app3';
  panelOpenState = false;

  // For Table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource : PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private _bottomSheet: MatBottomSheet, public _dialog: MatDialog) {}

  openBottomSheet(): void {
    this._bottomSheet.open(DummyDisplayComponent);
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(DummyDialogDisplayComponent, {
       width:'400px',
       height:'400px',
       disableClose:true,
      data: {name: 'abc', phone: '2345678'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);

    });
  }


  pageData(data:any){
   console.log(data);
  }


  sortData(sort: Sort) {
   console.log(sort);  
  }
}
