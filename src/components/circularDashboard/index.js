/* eslint-disable react/jsx-no-undef */
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

const value = 0.66;

<CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;


const dashboards = () => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Example label="Stroke width">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        strokeWidth={5}
      />
      </Example>
    </div>
  );
}
export default dashboards;
function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

//CircularProgressbarWithChildren, buildStyles