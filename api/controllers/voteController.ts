import { Base } from "../abstract";
import type { VotePayload, VoteResponse } from "../models";

export class VoteController extends Base {
  /**
   * Vote for user.
   * @param data {VotePayload} vote description in json
   * @returns single vote
   */
  async createVote(data: VotePayload): Promise<VoteResponse | null> {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY is not defined!");
    }
    try {
      const response = await this.request.post(
        `https://api.thecatapi.com/v1/votes`,
        {
          data,
          headers: {
            "x-api-key": process.env.API_KEY,
          },
        }
      );
      return response.json() as Promise<VoteResponse>;
    } catch (error) {
      console.log(`Error in POST /v1/votes - ${error}!`);
      return null;
    }
  }
}
