'use strict'
'bpo enable'

class Vector {
	x = 0;
	y = 0;
	z = 0;

	constructor(_x, _y, _z) {
		if(_x) this.x = _x;
		if(_y) this.y = _y;
		if(_z) this.y = _z;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
	}

	negate(b) {
		const a = this;
		return new Vector(-a.x, -a.y, -a.z);
	}

	operatorAdd(b) {
		const a = this;
		return new Vector(a.x + b.x, a.y + b.y, a.z + b.z);
	}

	operatorSub(b) {
		const a = this;
		return new Point(a.x - b.x, a.y - b.y, a.z - b.z);
	}

	operatorMul(b) {
		const a = this;
		return new Vector(a.x * b, a.y * b, a.z * b);
	}

	operatorDiv(b) {
		return this.operatorMul(1 / b);
	}

	operatorEqual(b) {
		const a = this;
		return a.x == b.x && a.y == b.y && a.z == b.z;
	}

	dot(b) {
		return a.x * b.x + a.y * b.y + a.z * b.z;
	}

	lengthSquared() {
		return this.dot(this);
	}

	length() {
		return Math.sqrt(this.lengthSquared());
	}

	cross(b) {
		return new Vector(a.y * b.z - a.z * b.y,
			a.z * b.x - a.x * b.z, a.x * b.z - a.z * b.x);
	}
}

function calcAcc(R) {
	const r2 = R.lengthSquared();
	const r = Math.sqrt(r2);
	const r3 = r * r2;
	const acc = R / r3;
	return acc;
}

class Ball {
	position = new Vector();
	velocity = new Vector();
	mass = 0;

	constructor(_position, _velocity, _mass) {
		if(_position) this.position = _position;
		if(_velocity) this.velocity = _velocity;
		if(_mass) this.mass = _mass;
	}

	move(dt) {
		const hvdt = this.velocity * (dt * 0.5);
		const adt = calcAcc(-this.position) * dt;
		this.position = this.position + hvdt;
		this.velocity = this.velocity + adt;
		this.position = this.position + hvdt;
	}

	render() {
		ctx.fillStyle = 'rgba' + color.toString();
		ctx.pathCircle(position.x, position.y, radius);
		ctx.fill();
	}
}

function render(ctx) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
	ctx.fillRect(0, 0, size.x, size.y);
	for (var i in world) {
		world[i].render(ctx);
	}
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let size = {x: canvas.width, y: canvas.height};

ctx.prototype.pathCircle = function(x, y, r) {
	this.beginPath();
	this.arc(x, y, r, 0, 2 * Math.PI, true);
	this.closePath();
};

setInterval(function() {
	render();
}, 100);
