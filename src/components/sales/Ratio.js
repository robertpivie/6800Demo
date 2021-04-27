import { CanvasJSChart } from "canvasjs-react-charts";

function Ratio({ ratioId, data }) {
  console.log(ratioId);
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
      chartContainerId={ratioId}
      containerProps={{
        height: "100px",
      }}
      options={options}
    />
  );
}

export default Ratio;
