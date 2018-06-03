let canvas = document.getElementById('canvas');

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');
setupCtxDrawingFunctions(ctx);

let dt = 0.015;
let interval = 20;
setInterval(function() {
	world.move(dt);
	renderBalls(world.balls, ctx);
}, interval);
