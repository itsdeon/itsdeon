import { TileMap } from './TileMap';


export class PatrolAI {
  public x: number;
  public y: number;
  public speed = 1.8;
  public dirX = 1;
  public dirY = 0;


  constructor(startX: number, startY: number) {
    this.x = startX;
    this.y = startY;
  }


  public update(map: TileMap) {
    const nextX = this.x + this.dirX * this.speed;
    const nextY = this.y + this.dirY * this.speed;
    const col = Math.floor(nextX / map.tileSize);
    const row = Math.floor(nextY / map.tileSize);


    if (map.isWall(col, row)) {
      const dirs = [
        { x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }
      ];
      const valid = dirs.filter(d => !map.isWall(Math.floor((this.x + d.x * map.tileSize) / map.tileSize), Math.floor((this.y + d.y * map.tileSize) / map.tileSize)));
      if (valid.length > 0) {
        const chosen = valid[Math.floor(Math.random() * valid.length)];
        this.dirX = chosen.x;
        this.dirY = chosen.y;
      } else {
        this.dirX = -this.dirX;
        this.dirY = -this.dirY;
      }
    } else {
      this.x = nextX;
      this.y = nextY;
    }
  }


  public render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#ff7b72';
    ctx.beginPath();
    ctx.arc(this.x + 16, this.y + 16, 12, 0, Math.PI * 2);
    ctx.fill();
  }
}
