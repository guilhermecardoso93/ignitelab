import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERRY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

export function App() {
  const { data } = useQuery(GET_LESSONS_QUERRY);

  return <h1 className="text">Oi</h1>;
}
