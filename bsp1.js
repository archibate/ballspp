function calcAcc(R) {
	const r2 = R.lenSqr();
	const r = Math.sqrt(r2);
	const r3 = r * r2;
	const acc = R / r3;
	return acc;
}

function Ball(position, velocity, mass) {
	this.position = position || new Vector;
	this.velocity = velocity || new Vector;
	this.mass = mass || 0;
}

Ball.prototype = {
	move: function(dt) {
		const hvdt = this.velocity.mul(dt * 0.5);
		const adt = calcAcc(-this.position) * dt;
		this.position = this.position + hvdt;
		this.velocity = this.velocity + adt;
		this.position = this.position + hvdt;
	},
}
