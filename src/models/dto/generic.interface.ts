export interface RequestContext {
  requestId: string;
  url: string;
  method: string;
  service: string;
  params: any;
  query: any;
  body: any;
}
enum userType {
  'admin' = 'admin',
  'user' = 'staff',
}

export interface LoginResponse {
  email: string;
  username?: string;
  name?: string;
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface BodyToken {
  id: string;
  email: string;
  username?: string;
  type: userType;
  date: Date;
}
