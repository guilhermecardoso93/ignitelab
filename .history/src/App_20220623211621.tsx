import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Router } from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

export function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}
