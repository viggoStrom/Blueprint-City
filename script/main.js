
// !!!READ THIS!!!
// Here you only get to add things that are strictly necessary like instantiating classes and starting the game

new Office({ x: 0, y: 0, max: 30 });
new Person({ x: 320, y: 180 });

// Start the game
window.requestAnimationFrame(updateFrame);
window.requestAnimationFrame(renderFrame);