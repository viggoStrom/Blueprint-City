
const updateFrame = () => {
    // Gets the layers from the layers object in consts.js
    Object.keys(layers).forEach(layer => {
        layers[layer].forEach(object => {
            object.update();
        });
    });
}

const renderFrame = () => {

}