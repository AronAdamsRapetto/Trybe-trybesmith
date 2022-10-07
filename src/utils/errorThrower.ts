export class HttpException extends Error {
  statusCode: number;

  message: string;

  constructor(status:number, message:string) {
    super(message);
    this.statusCode = status;
    this.message = message;
  }
}

export const errorThrower = (statusCode: number, message: string): Error => {
  const error = { statusCode, message };
  throw error as HttpException;
};