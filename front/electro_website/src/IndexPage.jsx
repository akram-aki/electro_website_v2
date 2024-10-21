import Description from "./assets/Description";
import Who from "./assets/Who";
import Numbers from "./assets/Numbers";
import Timeline from "./assets/Timeline";
import Projects from "./assets/Projects";
export default function IndexPage() {
  return (
    <div className="mx-24">
      <Description />
      <Who />
      <Numbers />
      <Timeline />
      <Projects />
    </div>
  );
}
