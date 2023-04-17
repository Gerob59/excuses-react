export default class Excuse {
  public httpCode: number;
  public tag: string;
  public message: string;

  constructor(httpCode: number, tag: string, message: string) {
    this.httpCode = httpCode;
    this.tag = tag;
    this.message = message;
  }

  /**
   * Temporaire jusqu'à temps que je trouve comment faire avec le JSON.stringify
   *
   * Contourne le JSON.stringify qui ne voulait pas passer 'httpCode' en 'http_code'
   * @returns le json pour que le back puisse recréer le même objet
   */
  toJSON(): any {
    return `{"http_code": ${this.httpCode},"tag": "${this.tag}","message": "${this.message}"}`;
  }
}
