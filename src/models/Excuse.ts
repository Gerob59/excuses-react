export default class Excuse {
  public httpCode: number;
  public tag: String;
  public message: String;

  constructor(httpCode: number, tag: String = "", message: String = "") {
    this.httpCode = httpCode;
    this.tag = tag;
    this.message = message;
  }
}
