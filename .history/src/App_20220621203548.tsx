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

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  const { data } = useQuery(GET_LESSONS_QUERRY);

  return (
    <ul>
      {data.lessons.map((lesson: Lesson) => {
        return <li>{lesson.title}</li>;
      })}
    </ul>
  );
}
