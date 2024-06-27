
const updateFrame = () => {
    // Gets the layers from the layers object in consts.js and updates each object in each layer    
    Object.keys(layers).forEach(layer => {
        layers[layer].forEach(object => {
            object.update();
        });
    });

    window.requestAnimationFrame(updateFrame);
}

const renderFrame = () => {
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
    if (!debug) return;

    Object.keys(layers).forEach(layer => {
        layers[layer]
            .filter(object => object.debugRender)
            .forEach(object => {
                object.debugRender();
            });
    });

    window.requestAnimationFrame(debugRender);
}