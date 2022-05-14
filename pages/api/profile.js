// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { tsEndpoint, tsKey } from "../../lib/config";

const GetProfile = `
  query {
    getProfile(_id: "f121efe0-34f9-4f94-86b0-94891236dc7a") {
      username
      projects {
        contents {
          __typename
          ... on Note {
            _id
            title
            position
          }
          ... on Folder {
            _id
            title
            position
          }
        }
      }
    }
  }
`;

export default async function handler(req, res) {
  try {
    const result = await fetch(tsEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tsKey}`,
      },
      body: JSON.stringify({
        query: GetProfile,
      }),
    });
    const resultJSON = await result.json();
    return res.status(200).json(resultJSON);
  } catch (error) {
    console.log("Failed to fetch from takeshape", error);
  }

  res.status(200).json({ name: "John Doe" });
}
