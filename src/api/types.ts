export type AuthResponse = {
  token: string;
  type: string;
};

export type AuthCredentials = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  id: string;
};
