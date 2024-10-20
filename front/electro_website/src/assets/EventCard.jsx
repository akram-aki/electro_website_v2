import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function EventCard({ title, subtitle, description, date, img }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{ background: "#393939", color: "#d9d9d9" }}
      contentrrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={date}
      iconStyle={{ background: "gray", color: "gray" }}
    >
      <div className="grid grid-cols-[2fr_1fr] ">
        <div>
          <h3 className="vertical-timeline-element-title text-4xl">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle text-xl">
            {subtitle}
          </h4>
          <p>{description}</p>
        </div>
        <div className="flex justify-end mr-5  w-[600px]">
          <img
            src={img}
            alt="img"
            className="aspect-video rounded-2xl size-80 border border-[1px]"
          />
        </div>
      </div>
    </VerticalTimelineElement>
  );
}
