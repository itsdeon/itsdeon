export interface Hazard {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}


export class LaneHazards {
  public hazards: Hazard[] = [];
  private laneCount = 4;
  public startY = 320; // Bottom half of 640px screen
  public laneHeight = 64;


  constructor() {
    for (let i = 0; i < this.laneCount; i++) {
      const speed = (i % 2 === 0 ? 1 : -1) * (1.5 + i * 0.7);
      this.hazards.push({
        x: (i * 180) % 640,
        y: this.startY + i * this.laneHeight + 12,
        width: 60,
        height: 40,
        speed
      });
      this.hazards.push({
        x: ((i * 180) + 320) % 640,
        y: this.startY + i * this.laneHeight + 12,
        width: 60,
        height: 40,
        speed
      });
    }
  }


  public update() {
    for (const h of this.hazards) {
      h.x += h.speed;
      if (h.speed > 0 && h.x > 640) h.x = -h.width;
      if (h.speed < 0 && h.x < -h.width) h.x = 640;
    }
  }


  public checkCollision(px: number, py: number, pSize: number): boolean {
    for (const h of this.hazards) {
      if (px < h.x + h.width && px + pSize > h.x && py < h.y + h.height && py + pSize > h.y) {
        return true;
      }
    }
    return false;
  }


  public render(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.laneCount; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#161b22' : '#0d1117';
      ctx.fillRect(0, this.startY + i * this.laneHeight, 640, this.laneHeight);
    }
    ctx.fillStyle = '#f0883e';
    for (const h of this.hazards) {
      ctx.fillRect(h.x, h.y, h.width, h.height);
      ctx.fillStyle = '#ffa657';
      ctx.fillRect(h.x + 4, h.y + 4, h.width - 8, h.height - 8);
      ctx.fillStyle = '#f0883e';
    }
  }
}
