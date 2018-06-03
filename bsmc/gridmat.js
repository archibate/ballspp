let grid = new Array(WIDTH * HEIGHT);

function initGrid() {
	for (let i = 0; i < WIDTH * HEIGHT; i++) {
		grid[i] = new Vaccam();
	}
	grid[1] = new Fengda();
}

function Vaccam() {
	this.fillStyle = '#000000';
}

function Fengda() {
	this.fillStyle = '#000000';
}
Fengda.prototype = {
	evaluate: function(around) {
		for (let i in around) {
			around.fillStyle = '#ff8800';
		}
	},
};

function addrOf(x, y) {
	if (y <= 0) y = HEIGHT - 1;
	if (x <= 0) x = HEIGHT - 1;
	if (y > HEIGHT) y = 0;
	if (x > WIDTH) x = 0;

	let addr = y * WIDTH + x;
	return addr;
}

function pixAt(x, y) {
	return grid[addrOf(x, y)];
}
