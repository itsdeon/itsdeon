import React, { useRef, useEffect } from 'react';


export const VectorAsteroidLab: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;


    let px = 300, py = 250, angle = 0, vx = 0, vy = 0;
    const keys: Record<string, boolean> = {};


    const onKeyDown = (e: KeyboardEvent) => { keys[e.key] = true; };
    const onKeyUp = (e: KeyboardEvent) => { keys[e.key] = false; };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);


    let animId: number;
    const loop = () => {
      if (keys['ArrowLeft']) angle -= 0.05;
      if (keys['ArrowRight']) angle += 0.05;
      if (keys['ArrowUp']) {
        vx += Math.cos(angle) * 0.1;
        vy += Math.sin(angle) * 0.1;
      }
      px = (px + vx + 600) % 600;
      py = (py + vy + 500) % 500;
      vx *= 0.99; vy *= 0.99;


      ctx.clearRect(0, 0, 600, 500);
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(angle);
      ctx.strokeStyle = '#58a6ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(15, 0);
      ctx.lineTo(-10, -10);
      ctx.lineTo(-5, 0);
      ctx.lineTo(-10, 10);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();


      animId = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      cancelAnimationFrame(animId);
    };
  }, []);


  return (
    <div style={{ padding: 20, background: '#161b22', borderRadius: 8 }}>
      <h3 style={{ color: '#7ee787' }}>Newtonian 2D Vector Asteroid Propulsion Lab</h3>
      <canvas ref={canvasRef} width={600} height={500} style={{ border: '1px solid #30363d', borderRadius: 4 }} />
    </div>
  );
};
