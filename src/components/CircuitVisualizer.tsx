import React, { useEffect } from "react";
import * as d3 from "d3";

const CircuitVisualizer = () => {
  useEffect(() => {
    const svg = d3.select("#circuit-svg")
      .append("svg")
      .attr("width", 500)
      .attr("height", 200);

    svg.append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", 20)
      .style("fill", "blue");
  }, []);

  return <div id="circuit-svg"></div>;
};

export default CircuitVisualizer;
