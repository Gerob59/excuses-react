export default class Excuse {
  public httpCode: number;
  public tag: string;
  public message: string;

  constructor(httpCode: number, tag: string, message: string) {
    this.httpCode = httpCode;
    this.tag = tag;
    this.message = message;
  }
}
