const API_URL = "http://localhost:8080/labels";

export default class LabelService {
  public static async getAllLabels(): Promise<string[]> {
    return await fetch(API_URL).then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  private static error(error: Error): void {
    console.error(error);
  }
}
