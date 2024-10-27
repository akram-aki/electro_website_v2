import { VerticalTimeline } from "react-vertical-timeline-component";
export default function Timeline({ children }) {
  return (
    <VerticalTimeline layout="1-column-left" className=" ">
      {children}
    </VerticalTimeline>
  );
}
