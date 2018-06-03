function Ball(position, velocity, mass) {
	this.position = position || new Vector;
	this.velocity = velocity || new Vector;
	this.mass = mass || 0;
}

Ball.prototype = {
	move: function(dt, balls, i) {
		this.position.addUp(this.velocity.mul(dt * 0.5));
		const acc = calcSumAcc(this.position, balls, i);
		this.velocity.addUp(acc.mul(dt));
		this.position.addUp(this.velocity.mul(dt * 0.5));
	},
};

function calcSumAcc(pos, balls, i) {
	let acc = new Vector;
	for (j in balls) if (j != i && balls[j].mass != 0) {
		let posp = balls[j].position;
		let R = posp.sub(pos); // for gravlike
		acc.addUp(calcAcc(R).mul(balls[j].mass));
	}
	return acc;
}

function calcAcc(R) {
	const r2 = R.lenSqr();
	const r = Math.sqrt(r2);
	const r3 = r * r2;
	const acc = R.div(r3);
	return acc;
}
