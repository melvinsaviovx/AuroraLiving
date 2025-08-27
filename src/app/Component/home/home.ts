import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {
  @ViewChild('heroCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private shapes: Shape[] = [];
  private numShapes = 50;
  private animationId: number = 0;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();

    // Initialize shapes
    for (let i = 0; i < this.numShapes; i++) {
      this.shapes.push(new Shape(canvas.width, canvas.height));
    }

    this.animate();
  }

  @HostListener('window:resize')
  public onResize() {
    this.resizeCanvas();

    // Reinitialize shapes on resize
    const canvas = this.canvasRef.nativeElement;
    this.shapes = [];
    for (let i = 0; i < this.numShapes; i++) {
      this.shapes.push(new Shape(canvas.width, canvas.height));
    }
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private animate = () => {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach(shape => {
      shape.update(canvas.width, canvas.height);
      shape.draw(this.ctx);
    });
    this.animationId = requestAnimationFrame(this.animate);
  }
}

// Shape class for triangles
class Shape {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(private canvasWidth: number, private canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 20 + 10;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.color = 'rgba(255,255,255,0.1)';
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvasWidth) this.speedX *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.speedY *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - this.size / 2);
    ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
    ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
