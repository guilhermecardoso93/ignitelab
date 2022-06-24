import { ApolloProvider } from "@apollo/client";
import { Router } from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

export function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </div>
  );
}
