import { Base } from "../abstract";
import type { PossibleVotePayload, VoteResponse } from "../models";

export class VoteController extends Base {
  /**
   * Create vote.
   * @param data {VotePayload} vote description in json
   * @returns single vote
   */
  async createVote(data: PossibleVotePayload): Promise<VoteResponse> {
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

  /**
   * Get vote
   * @param data {VotePayload} vote description in json
   * @returns single vote
   */
  async getVote(sub_id?: string): Promise<VoteResponse | VoteResponse[]> {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY is not defined!");
    }
    const params = new URLSearchParams();
    if (sub_id) params.append("sub_id", sub_id);

    try {
      const response = await this.request.get(
        `https://api.thecatapi.com/v1/votes?${params.toString()}`,
        {
          headers: {
            "x-api-key": process.env.API_KEY,
          },
        }
      );
      return response.json();
    } catch (error) {
      const typedError = error as Error;
      throw new Error(`Error in GET /v1/votes?${params.toString()} - ${typedError.message}`);
    }
  }
}
