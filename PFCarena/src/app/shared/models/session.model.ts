import { User } from "./user.model";


export interface Session{
  activeSession: boolean,
  activeUser?: User
}
