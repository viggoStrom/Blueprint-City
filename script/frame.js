
const updateFrame = () => {
    // Stat Trackers frame time tracker
    statTracker.upsFrame();

    time = (time + 1) % 288;

    // Gets the layers from the layers object in consts.js and updates each object in each layer

    Object.keys(layers).forEach(layer => {
        layers[layer].forEach(object => {
            object.update();
        });
    });


    window.requestAnimationFrame(updateFrame);
}

const renderFrame = () => {
    // Stat Trackers frame time tracker
    statTracker.fpsFrame();

    // Clears the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Renders each object in each layer
    Object.keys(layers).forEach(layer => {
        layers[layer]
            .filter(object => object.visible)
            .forEach(object => {
                object.render();
            });
    });


    window.requestAnimationFrame(renderFrame);
}

const debugRender = () => {
    // Stat Trackers frame time tracker
    statTracker.dpsFrame();

    if (debug) {
        Object.keys(layers).forEach(layer => {
            layers[layer]
                .filter(object => object.debugRender)
                .forEach(object => {
                    object.debugRender();
                });
        });
    };


    window.requestAnimationFrame(debugRender);
}