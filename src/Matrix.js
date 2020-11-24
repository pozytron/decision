import React, { useEffect, useState } from "react";
import { default_matrices as matrices } from "./defaults";
import DecisionMatrix from "./DecisionMatrix";

const Matrix = ({ order }) => {
  const [selected, setSelected] = useState(null);
  const [decision, setDecision] = useState(null);
  const [logs, setLogs] = useState([]);
  const [matrix, setMatrix] = useState(null);
  console.log(`Zamówienie ${order.fba_order} --------------------------------`);
  useEffect(() => {
    if (selected !== null) {
      // console.log(selected);
      let newMatrix = new DecisionMatrix(
        [...selected.countries],
        [...selected.weights],
        selected.nst_vendor_code,
        selected.multi_from
      );
      setMatrix(newMatrix);
    }
  }, [selected, order]);

  useEffect(() => {
    if (matrix !== null) {
      // console.log(order);
      const determinedVendor = matrix.decide(order);
      const logs = matrix.getLogs();
      setLogs(logs);
      setDecision(determinedVendor);
    }
  }, [matrix]);
  return (
    <div>
      <h2>Select matrix for a client</h2>
      <div className="matrices">
        {matrices.map((matrix) => {
          return (
            <div
              className="matrix"
              key={matrix.id}
              onClick={() => setSelected(matrix)}
            >
              {matrix.display_name}
            </div>
          );
        })}
      </div>
      <p>{!selected && "wybierz matrycę"}</p>
      <div className="decision">{decision}</div>
      <div className="decision">
        {logs.map((log, i) => (
          <p key={i}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default Matrix;
