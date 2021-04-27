import { CanvasJSChart } from "canvasjs-react-charts";
import { Card } from "react-bootstrap";

function History() {
  const options = {
    axisX: {
      gridThickness: 0,
      tickThickness: 0,
      lineThickness: 0,
      labelFormatter: function () {
        return " ";
      },
    },
    axisY: {
      gridThickness: 0,
      tickThickness: 0,
      lineThickness: 0,
      labelFormatter: function () {
        return " ";
      },
    },
    dataPointWidth: 10,
    data: [
      {
        type: "line",
        color: "#ff5e00",
        markerType: "none",
        dataPoints: [
          {
            label: "Mo",
            y: 25,
            indexLabel: "Goal",
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
        showInLegend: false,
        legendText: "Service Calls",
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
    <Card>
      <Card.Body>
        <h6 style={{ display: "flex", justifyContent: "space-between" }}>
          <span>SALES</span>
          <small>Week</small>
          <small>Month</small>
          <small>Year</small>
        </h6>
        <hr />
        <CanvasJSChart options={options} />
      </Card.Body>
    </Card>
  );
}

export default History;
