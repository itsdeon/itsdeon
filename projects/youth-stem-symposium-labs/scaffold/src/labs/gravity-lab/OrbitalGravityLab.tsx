import React, { useRef, useEffect } from 'react';


export const OrbitalGravityLab: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;


    let x = 300, y = 100, vx = 2.4, vy = 0;
    const sunX = 300, sunY = 250, sunM = 2000;
    let animId: number;


    const loop = () => {
      const dx = sunX - x;
      const dy = sunY - y;
      const distSq = dx * dx + dy * dy;
      const dist = Math.sqrt(distSq);
      const f = sunM / Math.max(distSq, 100);
      vx += (dx / dist) * f * 0.05;
      vy += (dy / dist) * f * 0.05;
      x += vx;
      y += vy;


      ctx.fillStyle = 'rgba(13, 17, 23, 0.2)';
      ctx.fillRect(0, 0, 600, 500);


      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.arc(sunX, sunY, 16, 0, Math.PI * 2);
      ctx.fill();


      ctx.fillStyle = '#58a6ff';
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();


      animId = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(animId);
  }, []);


  return (
    <div style={{ padding: 20, background: '#161b22', borderRadius: 8 }}>
      <h3 style={{ color: '#58a6ff' }}>Orbital Gravity Mechanics Lab</h3>
      <canvas ref={canvasRef} width={600} height={500} style={{ border: '1px solid #30363d', borderRadius: 4 }} />
    </div>
  );
};
