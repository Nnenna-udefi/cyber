import { HomeComponent } from "./component/home";
import { Nav } from "./component/nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeComponent />
    </div>
  );
}
