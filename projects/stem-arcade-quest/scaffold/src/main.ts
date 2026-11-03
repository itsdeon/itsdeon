import { TileMap } from './maze/TileMap';
import { PatrolAI } from './maze/PatrolAI';
import { LaneHazards } from './engine/LaneHazards';
import { ChiptuneSynth } from './audio/ChiptuneSynth';
import { STEM_QUESTIONS, StemQuestion } from './questions/StemBank';


export class StemArcadeQuestGame {
  private canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
  private ctx = this.canvas.getContext('2d')!;
  private scoreEl = document.getElementById('score-val')!;
  private zoneEl = document.getElementById('zone-val')!;
  private livesEl = document.getElementById('lives-val')!;
  private modalEl = document.getElementById('stem-modal')!;
  private modalQuestion = document.getElementById('modal-question')!;
  private modalOptions = document.getElementById('modal-options')!;


  private map = new TileMap();
  private patrol = new PatrolAI(32, 160);
  private hazards = new LaneHazards();
  private synth = new ChiptuneSynth();


  private playerX = 32;
  private playerY = 600;
  private playerSize = 24;
  private speed = 4;
  private score = 0;
  private energy = 3;
  private isPaused = false;


  constructor() {
    window.addEventListener('keydown', (e) => this.handleInput(e));
    requestAnimationFrame(() => this.loop());
  }


  private handleInput(e: KeyboardEvent) {
    if (this.isPaused) return;
    if (e.key === 'ArrowUp' && this.playerY - this.speed >= 0) this.playerY -= this.speed;
    if (e.key === 'ArrowDown' && this.playerY + this.playerSize + this.speed <= 640) this.playerY += this.speed;
    if (e.key === 'ArrowLeft' && this.playerX - this.speed >= 0) this.playerX -= this.speed;
    if (e.key === 'ArrowRight' && this.playerX + this.playerSize + this.speed <= 640) this.playerX += this.speed;
  }


  private triggerCheckpoint() {
    this.isPaused = true;
    const q: StemQuestion = STEM_QUESTIONS[Math.floor(Math.random() * STEM_QUESTIONS.length)];
    this.modalQuestion.textContent = `[${q.category}] ${q.prompt}`;
    this.modalOptions.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = `${idx + 1}. ${opt}`;
      btn.onclick = () => {
        if (idx === q.correctIndex) {
          this.synth.playSuccess();
          this.score += 500;
        } else {
          this.synth.playHazard();
          this.energy--;
        }
        this.modalEl.style.display = 'none';
        this.isPaused = false;
      };
      this.modalOptions.appendChild(btn);
    });
    this.modalEl.style.display = 'block';
  }


  private loop() {
    if (!this.isPaused) {
      this.update();
      this.render();
    }
    requestAnimationFrame(() => this.loop());
  }


  private update() {
    this.patrol.update(this.map);
    this.hazards.update();
    if (this.hazards.checkCollision(this.playerX, this.playerY, this.playerSize)) {
      this.synth.playHazard();
      this.energy--;
      this.playerX = 32; this.playerY = 600;
    }
    this.scoreEl.textContent = this.score.toString().padStart(5, '0');
    this.livesEl.textContent = this.energy.toString();
    this.zoneEl.textContent = this.playerY < 320 ? 'MAZE CORE' : 'HAZARD LANES';
  }


  private render() {
    this.ctx.clearRect(0, 0, 640, 640);
    this.map.render(this.ctx);
    this.hazards.render(this.ctx);
    this.patrol.render(this.ctx);
    this.ctx.fillStyle = '#39d353';
    this.ctx.fillRect(this.playerX, this.playerY, this.playerSize, this.playerSize);
  }
}
new StemArcadeQuestGame();
