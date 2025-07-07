export type UserInfoState = {
    user: null  
}

export interface LoggedInUser  {
  _id: string;
  name: string;
  email: string;
  dateOfBirth: string; 
  gender: 'male' | 'female';
  photo: string;
  createdAt: string;
}