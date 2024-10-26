import { expect } from "@playwright/test";
import { baseFixture } from "../../fixtures";
const payload = {
  image_id: "60d5f9f4c2b9b6c5a77e9c0d",
  sub_id: "VP-02367",
  value: 1,
};

baseFixture.describe("API tests for Vote Service", async () => {
  baseFixture("should add positive vote", async ({ Api }) => {
    const response = await Api.vote.createVote({ ...payload });

    expect(response).toMatchObject({
      ...payload,
      message: "SUCCESS",
    });
  });

  baseFixture("should add negatvie vote", async ({ Api }) => {
    const response = await Api.vote.createVote({ ...payload, value: -1 });

    expect(response).toMatchObject({
      ...payload,
      message: "SUCCESS",
      value: -1,
    });
  });

  baseFixture("should not let post data without required field 'image_id'", async ({ Api }) => {
      try {
        await Api.vote.createVote({ random: "asd" });
      } catch (error) {
        const typedError = error as Error;
        expect(typedError.message).toContain('"image_id" is required');
      }
    }
  );
});
