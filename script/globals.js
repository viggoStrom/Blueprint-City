
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("main-display");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

const layers = {
    background1: [], // Landscapes, backgrounds, etc.
    background2: [], // Roads, buildings, etc.
    entity1: [], // Player, vehicles, etc.
    entity2: [], // Entities that need to be above entity1
    foreground: [], // Planes flying in the sky, weather, etc.
    ui: [], // UI elements 
};

let scale = 1;
let debug = true; // DEBUGGING ONLY make false when deploying
let time = 0;


const workplaces = [];
const homes = [];
