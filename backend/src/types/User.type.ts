interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  avatar: string;
  addresses: string[];
  role: string;
  cart: string[];
  loginAttempts: number;
  locked?: Date;
}

export default UserType;
