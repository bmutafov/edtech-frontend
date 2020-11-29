export interface LoginInfo {
  identifier: string;
  password: string;
}

export interface RegisterInfo {
  username: string;
  email: string;
  password: string;
}

export interface AuthActions {
  attemptLogin: {
    call: (loginInfo: LoginInfo) => Promise<void>;
    loading: boolean;
  };
  register: {
    call: (registerInfo: RegisterInfo) => Promise<void>;
    loading: boolean;
  };
  logout: () => void;
}
