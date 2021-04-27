import { CanvasJSChart } from "canvasjs-react-charts";

function History() {
  const options = {
    animationEnabled: true,
    axisX: {
      gridThickness: 0.5,
      tickThickness: 0,
      lineThickness: 0,
    },
    axisY: {
      gridThickness: 0,
      tickThickness: 0,
      lineThickness: 0,
    },
    data: [
      {
        type: "line",
        color: "#63666a",
        showInLegend: true,
        legendText: "Open",
        dataPoints: [
          { label: "Jan", y: 15 },
          { label: "Feb", y: 25 },
          { label: "Mar", y: 30 },
          { label: "Apr", y: 28 },
        ],
      },
      {
        type: "line",
        color: "#c4d600",
        showInLegend: true,
        legendText: "Closed",
        dataPoints: [
          { label: "Jan", y: 5 },
          { label: "Feb", y: 6 },
          { label: "Mar", y: 9 },
          { label: "Apr", y: 7 },
        ],
      },
      {
        type: "line",
        color: "#bbbcbc",
        showInLegend: true,
        legendText: "Escalated",
        dataPoints: [
          { label: "Jan", y: 5 },
          { label: "Feb", y: 3 },
          { label: "Mar", y: 2 },
          { label: "Apr", y: 2 },
        ],
      },
    ],
  };
  return (
    <div>
      <h6>Cases Report</h6>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default History;
