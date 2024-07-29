import { Base } from "../abstract";
import type { VotePayload, VoteResponse } from "../models";

export class VoteController extends Base {
    /**
     * Vote for user.
     * @param data {VotePayload} vote description in json
     * @returns single vote
     */
    async voting(data: VotePayload): Promise<VoteResponse> {
        if (!process.env.API_KEY) {
            throw new Error('API_KEY is not defined!');
          }

        const response = await this.request.post(`https://api.thecatapi.com/v1/votes`,
            {
                data,
                headers: {
                    "x-api-key": process.env.API_KEY
                }
            }
        );
        return response.json() as Promise<VoteResponse>;
    }
}