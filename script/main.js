
// Here you only get to add things that are strictly necessary like instantiating classes and starting the game

layers.entity1.push(new Person({x: 320, y: 180}));

// Start the game
window.requestAnimationFrame(updateFrame);
window.requestAnimationFrame(renderFrame);