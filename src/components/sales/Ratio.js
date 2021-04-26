import { CanvasJSChart } from "canvasjs-react-charts";

function Ratio({ data }) {
  const options = {
    animationEnabled: true,

    axisX: {
      gridThickness: 0,
      tickThickness: 0,
    },
    data: [data],
  };
  return (
    <CanvasJSChart
      id={new Date().getTime()}
      containerProps={{
        height: "100px",
      }}
      options={options}
    />
  );
}

export default Ratio;
