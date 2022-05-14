import "../styles/globals.css";
import { tsKey, tsEndpoint } from "/lib/config";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";
import { AuthorizedApolloProvider } from "/lib/apollo";
// const client = new ApolloClient({
//   uri: tsEndpoint,
//   cache: new InMemoryCache(),
//   headers: {
//     Authorization: `Bearer ${tsKey}`,
//   },
// });

function MyApp({ Component, pageProps }) {
  return (
    <AuthorizedApolloProvider>
      <Component {...pageProps} />
    </AuthorizedApolloProvider>
  );
}

export default MyApp;
