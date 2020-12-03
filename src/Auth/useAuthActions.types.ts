export interface LoginInfo {
  identifier: string;
  password: string;
}

export interface RegisterInfo {
  username: string;
  email: string;
  password: string;
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
  attemptLogin: {
    call: (loginInfo: LoginInfo) => Promise<ResponseData>;
    loading: boolean;
  };
  register: {
    call: (registerInfo: RegisterInfo) => Promise<void>;
    loading: boolean;
  };
  logout: () => void;
}
