

class Camera extends Particle {
    constructor() {
        super({ x: canvas.width / 2, y: canvas.height / 2 })
        layers.ui.push(this);

        this.dest = { x: this.pos.x, y: this.pos.y }

        this.keys = {}

        this.makeEventListeners();
    }

    update() {
        if (this.keys["w"] || this.keys["ArrowUp"]) this.dest.y -= config.camera.moveDestSpeed;
        if (this.keys["a"] || this.keys["ArrowLeft"]) this.dest.x -= config.camera.moveDestSpeed;
        if (this.keys["s"] || this.keys["ArrowDown"]) this.dest.y += config.camera.moveDestSpeed;
        if (this.keys["d"] || this.keys["ArrowRight"]) this.dest.x += config.camera.moveDestSpeed;
    }

    render() { }

    debugRender() {
        ctx.fillStyle = "rgba(255,100,100,0.5)";
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    makeEventListeners() {
        window.addEventListener("keydown", (event) => {
            const key = event.key;
            this.keys[key] = true;
        });
        window.addEventListener("keyup", (event) => {
            const key = event.key;
            this.keys[key] = false;
        });
    }
}