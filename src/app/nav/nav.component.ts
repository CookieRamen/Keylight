import {Component, Inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface NewPostData {
  body: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isLogin = true;
  appTitle = environment.appTitle;
  logo = environment.logo;
  body: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
  }

  openNew(): void {
    const dialogRef = this.dialog.open(DialogOverviewPostDialog, {
      width: '640px',
      data: {body: this.body}
    });

    dialogRef.afterClosed().subscribe(result => {
      // result
      this.body = result;
    });
  }

}


@Component({
  selector: 'dialog-overview-post-dialog',
  templateUrl: '../dialogs/dialog-overview-post-dialog.html',
})
export class DialogOverviewPostDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewPostDialog>,
    @Inject(MAT_DIALOG_DATA) public data: NewPostData) {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
