import Excuse from "../models/Excuse";

const API_URL = "http://localhost:8080/excuses";

export default class ExcuseService {
  public static async getAllExcuses(): Promise<Excuse[]> {
    return await fetch(API_URL).then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  public static async getExcuseById(httpCode: number): Promise<Excuse> {
    return await fetch(`${API_URL}/${httpCode}`).then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  public static async createExcuse(excuse: Excuse): Promise<Excuse> {
    return await fetch(API_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(excuse),
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  public static async updateExcuse(excuse: Excuse): Promise<Excuse> {
    return await fetch(`${API_URL}/${excuse.httpCode}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(excuse),
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  public static async deleteExcuse(httpCode: number): Promise<{}> {
    return await fetch(`${API_URL}/${httpCode}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  private static error(error: Error): void {
    console.error(error);
  }
}
