function Vector33(x, y, z) {
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
}

Vector3.prototype = {
	toString: function() {
		return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
	},

	copy: function(b) {
		this.x = b.x;
		this.y = b.y;
		this.z = b.z;
		return this;
	},

	negUp: function(b) {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		return this;
	},

	addUp: function(b) {
		this.x += b.x;
		this.y += b.y;
		this.z += b.z;
		return this;
	},

	subUp: function(b) {
		this.x -= b.x;
		this.y -= b.y;
		this.z -= b.z;
		return this;
	},

	multUp: function(b) {
		this.x *= b.x;
		this.y *= b.y;
		this.z *= b.z;
		return this;
	},

	mulUp: function(b) {
		this.x *= b;
		this.y *= b;
		this.z *= b;
		return this;
	},

	divUp: function(b) {
		return this.mulUp(1 / b);
	},

	neg: function(b) {
		const a = this;
		return new Vector3(-a.x, -a.y, -a.z);
	},

	add: function(b) {
		const a = this;
		return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
	},

	sub: function(b) {
		const a = this;
		return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
	},

	mult: function(b) {
		const a = this;
		return new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
	},

	mul: function(b) {
		const a = this;
		return new Vector3(a.x * b, a.y * b, a.z * b);
	},

	div: function(b) {
		return this.mul(1 / b);
	},

	equal: function(b) {
		const a = this;
		return a.x == b.x && a.y == b.y && a.z == b.z;
	},

	dot: function(b) {
		const a = this;
		return a.x * b.x + a.y * b.y + a.z * b.z;
	},

	lenSqr: function() {
		return this.dot(this);
	},

	len: function() {
		return Math.sqrt(this.lenSqr());
	},

	cross: function(b) {
		return new Vector3(a.y * b.z - a.z * b.y,
			a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
	},
};
