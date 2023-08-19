import "./self.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

export default function Self() {
  return (
    <div className="self">
    <div className="top">
    <p>Wrong with self-improvement & how we're fixing it.</p>
    <h1 className="heading">Self-improvement. Ugh.
    <span>🌟</span></h1></div>
      <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "14px"}}
          icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">Motivation</h3>
        <p>
          Cultivate a positive mindset and stay motivated to achieve your
          goals. Embrace challenges as opportunities for growth.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "14px" }}
          icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">Habits</h3>
        <p>
          Develop positive habits that align with your goals. Consistency in
          small actions can lead to big results over time.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "14px" }}
          icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">Mindfulness</h3>
  <p>
    Practice mindfulness to stay present and reduce stress. Connect with your
    thoughts and emotions without judgment.
  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "14px" }}
          icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">Goal Setting</h3>
        <p>
          Set clear and achievable goals to drive your personal and professional
          growth. Break them down into actionable steps.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid #7f00ff" }}
          iconStyle={{ background: "#7f00ff", color: "#fff", fontSize: "14px" }}
          icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">Productivity</h3>
        <p>
          Boost your productivity by managing your time effectively and eliminating
          distractions. Focus on high-priority tasks.
        </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
