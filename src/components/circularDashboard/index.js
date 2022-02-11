/* eslint-disable react/jsx-no-undef */
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

const valueRpm = 50.00;
const value = 70.00;

<CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;


const Dashboards = () => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Example label="RPM">
      <CircularProgressbar
        value={valueRpm}
        text={`${valueRpm}%`}
        strokeWidth={5}
      />
      </Example>
      <Example label="Velocidade de avanço">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        strokeWidth={5}
      />
      </Example>

    </div>
    
  );
}
export default Dashboards;
function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "650%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

//CircularProgressbarWithChildren, buildStyles