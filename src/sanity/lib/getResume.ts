import { client } from "./client";
import { RESUME_QUERY } from "./queries";

export async function getResumeUrl() {
    const data = await client.fetch(RESUME_QUERY);
    return data?.url;
}