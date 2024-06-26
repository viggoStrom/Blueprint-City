
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("main-display");

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

const layers = {
    background1: [],
    background2: [],
    entity1: [],
    entity2: [],
    foreground: [],
    ui: []
};