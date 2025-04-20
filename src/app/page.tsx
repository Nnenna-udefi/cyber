import { HomeComponent } from "./component/home";
import { Nav } from "./component/nav";
import { Services } from "./component/services";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeComponent />
      <Services />
    </div>
  );
}
