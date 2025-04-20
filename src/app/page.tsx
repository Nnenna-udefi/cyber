import { HomeComponent } from "./component/home";
import { Nav } from "./component/nav";
import { Services } from "./component/services";
import { Members } from "./component/teamMembers";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeComponent />
      <Services />
      <Members />
    </div>
  );
}
