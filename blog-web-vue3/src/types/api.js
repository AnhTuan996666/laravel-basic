export interface SuccessDataInterface {
  success: boolean;
  data: unknown;
  message: string;
  otherData: unknown;
}

export interface SuccesResponseInterface {
  success: boolean;
  data: unknown;
  message: string;
  otherData: unknown;
}

export interface ErrorDataInterface {
  data: ErrorDataInterface;
  message: string;
  code: number;
  status: number;
  responseCode: number;
  errors?: object;
}

export interface ErrorResponseInterface {
  message: string;
  code: number;
  responseCode: number;
  error: boolean;
  errors?: ValidationErrorMessageInterface[];
}

export interface ErrorBaseResponseInterface {
  message: string;
  code: number;
  responseCode: number;
  error: boolean;
  response: ErrorDataInterface;
  errors?: object;
}

export interface OptionInterface {
  url: string;
  method: string;
  params?: object;
  data?: object;
}

export interface ValidationErrorMessageInterface {
  field: string;
  messages: string[];
}
