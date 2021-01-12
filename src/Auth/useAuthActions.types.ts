export interface LoginInfo {
  identifier: string;
  password: string;
}

export interface RegisterInfo {
  username: string;
  email: string;
  password: string;
  name: string;
  number: string;
  institute: string;
  educationalRole: string;
}

interface SuccessResponseData {
  success: true;
}

interface ErrorResponseData {
  success: false;
  message: string;
}

export type ResponseData = SuccessResponseData | ErrorResponseData;

export interface AuthActions {
  login: {
    call: (loginInfo: LoginInfo) => Promise<ResponseData>;
    loading: boolean;
  };
  register: {
    call: (registerInfo: RegisterInfo) => Promise<ResponseData>;
    loading: boolean;
  };
  logout: () => void;
}
