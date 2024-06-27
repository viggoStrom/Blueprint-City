
class StatTracker {
    constructor() {
        this.ups = document.querySelector("#ups-fps-dps #ups");
        this.fps = document.querySelector("#ups-fps-dps #fps");
        this.dps = document.querySelector("#ups-fps-dps #dps");

        setInterval(() => {
            this.updateUPS(this.average(frameStats.ups, 10));
            this.updateFPS(this.average(frameStats.fps, 10));
            this.updateDPS(this.average(frameStats.dps, 10));
        }, 500);
    }

    updateUPS(ups) {
        this.ups.innerHTML = ups;
    }

    updateFPS(fps) {
        this.fps.innerHTML = fps;
    }

    updateDPS(dps) {
        this.dps.innerHTML = dps;
    }

    average(array, avgOverN) {
        // Will take the avg of the last n elements in the array where n is avgOverN 
        return array.slice(-avgOverN).reduce((a, b) => a + b, 0) / avgOverN;
    }

    startUPSframe() {
        this.upsStart = performance.now();
    }

    endUPSframe() {
        frameStats.ups.push(1000 / (performance.now() - this.upsStart));
    }
    
    startFPSframe() {
        this.fpsStart = performance.now();
    }

    endFPSframe() {
        frameStats.fps.push(1000 / (performance.now() - this.fpsStart));
    }

    startDPSframe() {
        this.dpsStart = performance.now();
    }

    endDPSframe() {
        frameStats.dps.push(1000 / (performance.now() - this.dpsStart));
    }
}