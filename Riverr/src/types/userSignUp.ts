export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
};

export type UserErr = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
};

export type User2 = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  avatar: string;
  skill: string[];
  certification: string[];
  bookingJob: []
};
