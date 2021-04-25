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
    axisY2: {
      gridThickness: 0,
      tickThickness: 0,
    },
    data: [
      {
        type: "line",
        color: "#63666a",
        markerType: "none",
        dataPoints: [
          {
            label: "Mo",
            y: 25,
            indexLabel: "Leads Goal",
            indexLabelOrientation: "vertical",
          },
          { label: "Tu", y: 25 },
          { label: "We", y: 25 },
          { label: "Th", y: 25 },
          { label: "Fr", y: 25 },
        ],
      },
      {
        type: "line",
        color: "#ff5e00",
        markerType: "none",
        axisYType: "secondary",
        dataPoints: [
          {
            label: "Mo",
            y: 5,
          },
          { label: "Tu", y: 5 },
          { label: "We", y: 5 },
          { label: "Th", y: 5 },
          {
            label: "Fr",
            y: 5,
            indexLabel: "Opportunities Goal",
            indexLabelOrientation: "vertical",
          },
        ],
      },
      {
        type: "column",
        color: "#63666a",
        showInLegend: true,
        legendText: "Leads",
        dataPoints: [
          { label: "Mo", y: 10 },
          { label: "Tu", y: 15 },
          { label: "We", y: 25 },
          { label: "Th", y: 30 },
          { label: "Fr", y: 28 },
        ],
      },
      {
        type: "column",
        color: "#c4d600",
        showInLegend: true,
        legendText: "Opportunities",
        axisYType: "secondary",
        dataPoints: [
          { label: "Mo", y: 5 },
          { label: "Tu", y: 5 },
          { label: "We", y: 6 },
          { label: "Th", y: 9 },
          { label: "Fr", y: 7 },
        ],
      },
    ],
  };
  return (
    <div>
      <h4>My Progress</h4>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default History;
