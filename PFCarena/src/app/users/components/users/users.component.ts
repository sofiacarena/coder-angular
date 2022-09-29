import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from '../../../shared/models/user.model';
import { UsersState } from '../../../shared/models/users.state';
import { loadUsers } from '../../state/users.actions';
import { selectLoadingUsersState, selectLoadedUsersState } from '../../state/users.selectors';
import { UsersFormComponent } from '../users-form/users-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loading$!: Observable<boolean>;
  displayedColumns$!: Observable<string[]>;
  dataSource!: MatTableDataSource<User>;

  constructor(
    private store: Store<UsersState>,
    private dialog: MatDialog,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.loading$ = this.store.select(selectLoadingUsersState);
    this.store.select(selectLoadedUsersState).subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
    });
    this.displayedColumns$ = this.usersService.getUsersTableColumns();
  }

  @ViewChild(MatTable) usersTable!: MatTable<User>;

  addUser(){
    const dialogRef = this.dialog.open(UsersFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.usersService.addUser(res).subscribe(
          () => { this.store.dispatch(loadUsers()) }
        );
      }
    })
  }

  editUser(element: User){
    const dialogRef = this.dialog.open(UsersFormComponent, {
      width: '700px',
      data: element
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.usersService.editUser(res).subscribe(
          () => { this.store.dispatch(loadUsers()) }
        );
      }
    })
  }

  deleteUser(element: User){
    this.usersService.deleteUser(element.id).subscribe(() => {
      this.store.dispatch(loadUsers());
    });
  }
}
