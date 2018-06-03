initGrid();

function render() {
	for (let i = 0; i < grid.length; i++) {
		let px = i % WIDTH;
		let py = Math.floor(i / WIDTH);
		let x = px * PIXSIZE;
		let y = py * PIXSIZE;

		ctx.fillStyle = grid[i].fillStyle;

		ctx.fillRect(x, y, PIXSIZE, PIXSIZE);
	}
}

const YP = 1;
const YM = 2;
const XP = 3;
const XM = 4;
const PP = 5;
const PM = 6;
const MP = 7;
const MM = 8;

function evaluate() {
	for (let i = 0; i < grid.length; i++) {
		let x = i % WIDTH;
		let y = Math.floor(i / WIDTH);
		let around = [
			grid[addrOf(x, y)],
			grid[addrOf(x, y+1)],
			grid[addrOf(x, y-1)],
			grid[addrOf(x+1, y)],
			grid[addrOf(x-1, y)],
			grid[addrOf(x+1, y+1)],
			grid[addrOf(x+1, y-1)],
			grid[addrOf(x-1, y-1)],
			grid[addrOf(x-1, y-1)],
		];
		around[0].evaluate(around);
	}
}

let interval = 100;
setInterval(function() {
	evaluate();
	render();
}, interval);
