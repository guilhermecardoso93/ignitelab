import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";

export function App() {
  return (
    <div>
      <Header />
      <Lesson />
      <Sidebar />
      <Video />
    </div>
  );
}
