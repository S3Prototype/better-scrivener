import { ApolloClient, InMemoryCache } from "@apollo/client";
import { tsEndpoint, tsKey } from "/lib/config";

export const createApolloClient = () => {
  return new ApolloClient({
    uri: tsEndpoint,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${tsKey}`,
    },
  });
};
