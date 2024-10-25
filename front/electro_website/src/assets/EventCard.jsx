import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function EventCard({ title, subtitle, description, date, img }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{ background: "#393939", color: "#d9d9d9" }}
      contentrrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={date}
      iconStyle={{ background: "#77C02E", color: "#F4CE14" }}
    >
      <div className="grid relative lg:grid-cols-2 sm:grid-cols-1 lg:gap-0 sm:gap-5">
        <div className=" w-fit">
          <h3 className="vertical-timeline-element-title text-ELECT text-4xl">
            {title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-gray-400 text-xl">
            {subtitle}
          </h4>
          <p className="text-justify ">{description}</p>
        </div>
        <div className="flex lg:justify-end   lg:absolute sm:static right-0 overflow-hidden  sm:justify-center mr-5  ">
          <img
            src={img}
            alt="img"
            className="aspect-video rounded-2xl lg:size-72 sm:size-fit border "
          />
        </div>
      </div>
    </VerticalTimelineElement>
  );
}
