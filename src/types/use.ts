export type AuthForm = {
  id: string;
  email: string;
  password: string;
};
export type UserInputs = Omit<AuthForm, "id">;
