
// !!!READ THIS!!!
// Here you only get to add things that are strictly necessary like instantiating classes and starting the game

// Required classes
const statTracker = new StatTracker();
const camera = new Camera();


// Class instanciation
new Office({ x: 500, y: 40 }, 5);
new Person({ x: 320, y: 180 });

// Start the game
window.requestAnimationFrame(updateFrame);
window.requestAnimationFrame(renderFrame);
window.requestAnimationFrame(debugRender);