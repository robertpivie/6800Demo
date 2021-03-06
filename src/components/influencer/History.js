import { CanvasJSChart } from "canvasjs-react-charts";

function History() {
  const options = {
    axisX: {
      gridThickness: 0,
      tickThickness: 0,
    },
    axisY: {
      gridThickness: 0,
      tickThickness: 0,
    },
    data: [
      {
        type: "line",
        color: "#ff5e00",
        markerType: "none",
        dataPoints: [
          {
            label: "Mo",
            y: 25,
            indexLabel: "Influence Goals",
            indexLabelOrientation: "vertical",
          },
          { label: "Tu", y: 25 },
          { label: "We", y: 25 },
          { label: "Th", y: 25 },
          { label: "Fr", y: 25 },
        ],
      },
      {
        type: "column",
        color: "#00b5e2",
        showInLegend: true,
        legendText: "Influences",
        dataPoints: [
          { label: "Mo", y: 10 },
          { label: "Tu", y: 15 },
          { label: "We", y: 25 },
          { label: "Th", y: 30 },
          { label: "Fr", y: 28 },
        ],
      },
    ],
  };
  return (
    <div>
      <h6>My Progress</h6>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default History;
