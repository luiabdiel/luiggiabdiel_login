export interface IUser {
  id?: number;
  fullName: string;
  userName: string;
  password: string;
  email: string;
  isTeacher: boolean;
  createdAt: Date;
  updatedAt: Date;
}
