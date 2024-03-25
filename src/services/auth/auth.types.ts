export type TLoginValues = {
  phone: string;
  password: string;
};

export type TAuthResponse = {
  data: {
    token: string;
  };
};

export type TGetMe = {
  success: true;
  data: TGetMeData;
};

export type TGetMeData = {
  id: number;
  name: string;
  role_id: number;
  phone: string;
};
