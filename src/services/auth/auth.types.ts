export type TLoginValues = {
  phone: string;
  password: string;
};

export type TAuthResponse = {
  data: {
    token: string;
  };
};
