function Ball(position, velocity, mass) {
	this.position = position || new Vector;
	this.velocity = velocity || new Vector;
	this.mass = mass || 0;
}

Ball.prototype = {
	move: function(dt, enumConns) {
		this.position.addUp(this.velocity.mul(dt * 0.5));
		const acc = calcSumAcc(this.position, enumConns);
		this.velocity.addUp(acc.mul(dt));
		this.position.addUp(this.velocity.mul(dt * 0.5));
	},
};

function calcSumAcc(pos, enumConns) {
	let acc = new Vector;
	enumConns(function(ball) {
		if (ball.mass == 0)
			return;
		let posp = ball.position;
		let R = posp.sub(pos); // for gravlike
		acc.addUp(calcAcc(R).mul(ball.mass));
	});
	return acc;
}

function calcAcc(R) {
	const r0 = 0.2;
	const k = 9.5;

	const r = R.lenSqr();
	if (r > 2.8 * r0 || r < 0.008 * r0) // aha
		return new Vector;
	const acc = R.mul(k * (1 - r0 / r));
	return acc;
}
