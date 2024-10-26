import { Base } from "../abstract";
import type { VotePayload, VoteResponse } from "../models";

export class VoteController extends Base {
  /**
   * Vote for user.
   * @param data {VotePayload} vote description in json
   * @returns single vote
   */
  async createVote(data: VotePayload | { random: string }): Promise<VoteResponse> {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY is not defined!");
    }

    const response = await this.request.post(
      `https://api.thecatapi.com/v1/votes`,
      {
        data,
        headers: {
          "x-api-key": process.env.API_KEY,
        },
      }
    );

    if (!response.ok()) {
      let errorMessage: string;

      const contentType = response.headers()["content-type"];

      if (contentType && contentType.includes("application/json")) {
        const errorResponse = await response.json();
        errorMessage = errorResponse.message;
      } else {
        errorMessage = await response.text();
      }
      throw new Error(errorMessage);
    }
    return response.json() as Promise<VoteResponse>;
  }
}
