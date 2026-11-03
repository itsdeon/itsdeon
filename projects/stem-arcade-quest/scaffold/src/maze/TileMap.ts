export class TileMap {
  public readonly tileSize = 32;
  public readonly cols = 20;
  public readonly rows = 10;


  // 0: empty, 1: wall, 2: stem-orb
  public grid: number[][] = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 1, 0, 2, 0, 0, 1, 1, 0, 0, 2, 0, 1, 0, 0, 2, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 2, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];


  public isWall(col: number, row: number): boolean {
    if (col < 0 || col >= this.cols || row < 0 || row >= this.rows) return true;
    return this.grid[row][col] === 1;
  }


  public render(ctx: CanvasRenderingContext2D) {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const tile = this.grid[r][c];
        const x = c * this.tileSize;
        const y = r * this.tileSize;
        if (tile === 1) {
          ctx.fillStyle = '#1f6feb';
          ctx.fillRect(x, y, this.tileSize, this.tileSize);
          ctx.strokeStyle = '#388bfd';
          ctx.strokeRect(x + 2, y + 2, this.tileSize - 4, this.tileSize - 4);
        } else if (tile === 2) {
          ctx.fillStyle = '#ffd700';
          ctx.beginPath();
          ctx.arc(x + this.tileSize / 2, y + this.tileSize / 2, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }
}
