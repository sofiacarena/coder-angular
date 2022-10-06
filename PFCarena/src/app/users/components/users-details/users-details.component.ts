import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UsersState } from '../../../shared/models/users.state';
import { selectLoadedUsersState } from '../../state/users.selectors';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  selectedUser!: any;

  constructor(
    private store: Store<UsersState>,
    private dialogRef: MatDialogRef<UsersDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedUserId: number
  ) { }

  ngOnInit(): void {
    this.store.select(selectLoadedUsersState).subscribe((users) => {
      this.selectedUser = users?.find(user => user.id === this.selectedUserId);
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
