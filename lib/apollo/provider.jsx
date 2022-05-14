import { ApolloProvider } from "@apollo/client";
import { tsKey, tsEndpoint } from "/lib/config";
import { createApolloClient } from "./client";

export const AuthorizedApolloProvider = ({ uri, children }) => {
  const client = createApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
