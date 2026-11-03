import React, { useState } from 'react';


export const QuantumGatePlayground: React.FC = () => {
  const [alpha, setAlpha] = useState(1.0); // Amplitude for |0>
  const [beta, setBeta] = useState(0.0);  // Amplitude for |1>


  const applyHadamard = () => {
    const invSqrt2 = 1 / Math.SQRT2;
    const newA = invSqrt2 * alpha + invSqrt2 * beta;
    const newB = invSqrt2 * alpha - invSqrt2 * beta;
    setAlpha(newA);
    setBeta(newB);
  };


  const applyPauliX = () => {
    setAlpha(beta);
    setBeta(alpha);
  };


  const prob0 = Math.min(100, Math.round(alpha * alpha * 100));
  const prob1 = Math.min(100, Math.round(beta * beta * 100));


  return (
    <div style={{ padding: 20, background: '#161b22', color: '#c9d1d9', borderRadius: 8 }}>
      <h3 style={{ color: '#bc8cff' }}>Single-Qubit Quantum Circuit Simulator</h3>
      <p>State: |&psi;&rang; = {alpha.toFixed(3)}|0&rang; + {beta.toFixed(3)}|1&rang;</p>
      <div style={{ margin: '16px 0' }}>
        <button onClick={applyHadamard} style={{ padding: '8px 16px', marginRight: 8 }}>Apply Hadamard (H)</button>
        <button onClick={applyPauliX} style={{ padding: '8px 16px', marginRight: 8 }}>Apply Pauli-X (NOT)</button>
        <button onClick={() => { setAlpha(1); setBeta(0); }} style={{ padding: '8px 16px' }}>Reset |0&rang;</button>
      </div>
      <div>
        <div>Probability |0&rang;: {prob0}%</div>
        <div style={{ background: '#30363d', height: 16, width: '100%', borderRadius: 4, margin: '4px 0 12px' }}>
          <div style={{ background: '#58a6ff', height: '100%', width: `${prob0}%`, borderRadius: 4 }} />
        </div>
        <div>Probability |1&rang;: {prob1}%</div>
        <div style={{ background: '#30363d', height: 16, width: '100%', borderRadius: 4, margin: '4px 0' }}>
          <div style={{ background: '#bc8cff', height: '100%', width: `${prob1}%`, borderRadius: 4 }} />
        </div>
      </div>
    </div>
  );
};
