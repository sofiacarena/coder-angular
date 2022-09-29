import { User } from './user.model';

export interface UsersState {
  loading: boolean;
  users?: User[]
}
