export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  admin: boolean;
}

export interface LoginUser {
  username: string;
  password: string;
}
