import { test, expect } from "@playwright/test";
import { API } from "../../api";

test("should check experience form", async ({ request }) => {
    const Api = new API(request);
    const payload = {
        image_id: "60d5f9f4c2b9b6c5a77e9c0d",
        sub_id: "VP-02367",
        value: 1
    }

    const response = await Api.vote.voting({
        "image_id": payload.image_id,
        "sub_id": payload.sub_id,
        "value": payload.value
    });
    expect(response).toMatchObject({
        message: 'SUCCESS',
        image_id: payload.image_id,
        sub_id: payload.sub_id,
        value: payload.value,
    });
});