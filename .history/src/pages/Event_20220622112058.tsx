import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  return (
    <>
      <Header />
      <main>
        <Video />
        <Sidebar />
      </main>
    </>
  );
}
