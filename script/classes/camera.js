

class Camera extends Particle {
    constructor() {
        super({ x: canvas.width / 2, y: canvas.height / 2 })
        this.dest = pos

        this.baseSpeed = 10

        this.defineEventListeners();

        this.keys = {}

        this.free = true;
        this.target = undefined;
    }

    update() {
        if (this.free) {
            const speed = this.speedCalc();
            if (this.keys['w'] || this.keys['ArrowUp']) { this.dest.x -= speed; }
            if (this.keys['s'] || this.keys['ArrowDown']) { this.dest.x += speed; }
            if (this.keys['a'] || this.keys['ArrowLeft']) { this.dest.y -= speed; }
            if (this.keys['d'] || this.keys['ArrowRight']) { this.dest.y += speed; }
        }

        if (this.target) {
            this.dest.y = this.target.absolutePos.y + 50 * Math.cos(this.target.angle) * this.target.vel / 4;
            this.dest.x = this.target.absolutePos.x + 50 * Math.sin(this.target.angle) * this.target.vel / 4;
        }

        const dx = this.dest.y - this.pos.y;
        const dy = this.dest.x - this.pos.x;

        this.pos.y += dx / 10;
        this.pos.x += dy / 10;

        if (Math.abs(dx) < .1) { this.pos.y = this.dest.y; }
        if (Math.abs(dy) < .1) { this.pos.x = this.dest.x; }
    }

    debugRender() {
        // Draw camera
        ctx.fillStyle = "rgba(0, 0, 200, 0.2)";
        ctx.beginPath();
        ctx.arc(...addPos(world.center, this.pos), 5, 0, Math.PI * 2);
        ctx.fill();

        // Draw camera destination
        ctx.fillStyle = "rgba(200, 200, 0, 0.2)";
        ctx.beginPath();
        ctx.arc(...addPos(world.center, this.dest), 5, 0, Math.PI * 2);
        ctx.fill();
    }

    speedCalc() {
        return this.baseSpeed / (scale + .1)
    }

    follow(target) {
        this.free = false
        this.target = target
    }

    unfollow() {
        this.free = true
        this.target = undefined
    }

    defineEventListeners() {
        // Momentary Key-Triggers
        document.addEventListener('keydown', (event) => {
            if (event.key === "Tab") {
                event.preventDefault();
                scale = 1
            }
            if (event.key === "§") {
                event.preventDefault();
                debug = !debug;
            }
            if (event.ctrlKey && event.key.toLowerCase() === "f") {
                event.preventDefault();
                this.unfollow();
            }
            if (event.ctrlKey && event.key.toLowerCase() === "w") {
                event.preventDefault();
            }
            if (event.ctrlKey && event.key.toLowerCase() === "u") {
                event.preventDefault();
                const output = {
                    scale,
                    pos: this.pos,
                    dest: this.dest,
                }
                console.log(output);
                navigator.clipboard.writeText(JSON.stringify(output))
            }
        })

        // Key-State Tracker
        document.addEventListener('keydown', (event) => {
            this.keys[event.key.toLowerCase()] = true;
        });
        document.addEventListener('keyup', (event) => {
            this.keys[event.key.toLowerCase()] = false;
        });

        // Zoom
        canvas.addEventListener("wheel", (event) => {
            const deltaY = event.deltaY;
            if (deltaY < -1) {
                scale *= 1.04;
            } else if (deltaY > 1) {
                scale *= 0.96;
            }
        });

        // Move on drag
        let isDragging = false;
        let lastX = 0;
        let lastY = 0;
        canvas.addEventListener("mousedown", (event) => {
            isDragging = true;
            lastX = event.clientX;
            lastY = event.clientY;
        });
        canvas.addEventListener("mouseup", () => {
            isDragging = false;
        });
        canvas.addEventListener("mousemove", (event) => {
            if (isDragging) {
                const dx = (event.clientX - lastX) / scale;
                const dy = (event.clientY - lastY) / scale;

                this.pos.y -= dx;
                this.pos.x -= dy;
                this.dest = [this.pos.y, this.pos.x];

                lastX = event.clientX;
                lastY = event.clientY;
            }
        });

        // // Debug Point
        // document.addEventListener('mousedown', (event) => {
        //     if (!debug) return;

        //     const percentX = event.offsetX / canvas.offsetWidth;
        //     const percentY = event.offsetY / canvas.offsetHeight;

        //     const screenX = percentX * canvas.width
        //     const screenY = percentY * canvas.height

        //     const worldX = this.pos.y + (screenX - canvas.width / 2) / scale
        //     const worldY = this.pos.x + (screenY - canvas.height / 2) / scale

        //     const x = (Math.round(worldX / 100) * 100).toFixed(0)
        //     const y = (Math.round(worldY / 100) * 100).toFixed(0)
        //     let type = "arc"
        //     if (event.shiftKey) type = "straight"
        //     if (event.ctrlKey) type = "crossover"

        //     const output = `\n[${x}, ${y}, "${type}"],`
        //     console.log(output);
        //     navigator.clipboard.writeText(output)
        // })
    }
}