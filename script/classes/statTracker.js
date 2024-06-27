
class StatTracker {
    constructor() {
        this.ups = document.querySelector("#ups-fps-dps #ups");
        this.fps = document.querySelector("#ups-fps-dps #fps");
        this.dps = document.querySelector("#ups-fps-dps #dps");

        this.frameStats = { ups: [], fps: [], dps: [] };

        this.upsCount = 0;
        this.fpsCount = 0;
        this.dpsCount = 0;

        this.avgOverN = 10

        setInterval(() => {
            this.updateUPSdisplay(this.average(this.frameStats.ups, this.avgOverN).toFixed(0));
            this.updateFPSdisplay(this.average(this.frameStats.fps, this.avgOverN).toFixed(0));
            this.updateDPSdisplay(this.average(this.frameStats.dps, this.avgOverN).toFixed(0));

            if (this.frameStats.ups.length > 100) this.frameStats.ups = this.frameStats.ups.slice(-this.avgOverN);
            if (this.frameStats.fps.length > 100) this.frameStats.fps = this.frameStats.fps.slice(-this.avgOverN);
            if (this.frameStats.dps.length > 100) this.frameStats.dps = this.frameStats.dps.slice(-this.avgOverN);
        }, 500);
    }

    average(array, avgOverN) {
        // Will take the avg of the last n elements in the array where n is avgOverN 
        return array.slice(-avgOverN).reduce((a, b) => a + b, 0) / avgOverN;
    }

    updateUPSdisplay(ups) {
        this.ups.innerHTML = ups;
    }

    updateFPSdisplay(fps) {
        this.fps.innerHTML = fps;
    }

    updateDPSdisplay(dps) {
        this.dps.innerHTML = dps;
    }

    upsFrame() {
        if (this.upsCount === 0) {
            this.upsStart = performance.now();
            this.upsCount++;
            return
        }

        if (this.upsCount >= 10) {
            this.upsCount = 0;
            this.frameStats.ups.push(10000 / (performance.now() - this.upsStart));
            return
        }

        this.upsCount++;
    }

    fpsFrame() {
        if (this.fpsCount === 0) {
            this.fpsStart = performance.now();
            this.fpsCount++;
            return
        }

        if (this.fpsCount >= 10) {
            this.fpsCount = 0;
            this.frameStats.fps.push(10000 / (performance.now() - this.fpsStart));
            return
        }

        this.fpsCount++;
    }

    dpsFrame() {
        if (this.dpsCount === 0) {
            this.dpsStart = performance.now();
            this.dpsCount++;
            return
        }

        if (this.dpsCount >= 10) {
            this.dpsCount = 0;
            this.frameStats.dps.push(10000 / (performance.now() - this.dpsStart));
            return
        }

        this.dpsCount++;
    }
}