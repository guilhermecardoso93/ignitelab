import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4orc0220r0201xnfce43eoi/master",
  cache: new InMemoryCache()
});
