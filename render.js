function renderBalls(balls, ctx) {
	let scrn = ctx.canvas;

	ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
	ctx.fillRect(0, 0, scrn.width, scrn.height);

	for (let i in balls) {
		renderBallPos3d(balls[i].position, ctx);
	}
}

function renderBallPos3d(pos3d, ctx) {
	function pos2scrn(pos) {
		let scrn = ctx.canvas;
		const x = (pos.x + 1) * scrn.width * 0.5;
		const y = (pos.y + 1) * scrn.height * 0.5;
		return {x: x, y: y};
	}

	return renderBallPos(pos2scrn(pos3d), ctx);
}

function renderBallPos(pos, ctx) {
	ctx.fillStyle = '#ff8000';
	ctx.pathCircle(pos.x, pos.y, 6);
	ctx.fill();
}

function setupCtxDrawingFunctions(ctx) {
	ctx.pathCircle = function(x, y, r) {
		this.beginPath();
		this.arc(x, y, r, 0, 2 * Math.PI, true);
		this.closePath();
	};
}
