import Hero from "./assets/Hero";
import Who from "./assets/WhoAreWe";
import Numbers from "./assets/MembersComponent/Numbers";
import Timeline from "./assets/TimelineComponent/Timeline";
import Projects from "./assets/ProjectsComponent/Projects";
export default function IndexPage() {
  return (
    <div className="sm:mx-8 lg:mx-24">
      <Hero />
      <Who />
      <Numbers />
      <Timeline />
      <Projects />
    </div>
  );
}
