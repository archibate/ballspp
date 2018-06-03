function Vector(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vector.prototype = {
	toString: function() {
		return '(' + this.x + ', ' + this.y + ')';
	},

	copy: function(b) {
		this.x = b.x;
		this.y = b.y;
		return this;
	},

	negUp: function(b) {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	},

	addUp: function(b) {
		this.x += b.x;
		this.y += b.y;
		return this;
	},

	subUp: function(b) {
		this.x -= b.x;
		this.y -= b.y;
		return this;
	},

	multUp: function(b) {
		this.x *= b.x;
		this.y *= b.y;
		return this;
	},

	mulUp: function(b) {
		this.x *= b;
		this.y *= b;
		return this;
	},

	divUp: function(b) {
		return this.mulUp(1 / b);
	},

	neg: function(b) {
		const a = this;
		return new Vector(-a.x, -a.y);
	},

	add: function(b) {
		const a = this;
		return new Vector(a.x + b.x, a.y + b.y);
	},

	sub: function(b) {
		const a = this;
		return new Vector(a.x - b.x, a.y - b.y);
	},

	mult: function(b) {
		const a = this;
		return new Vector(a.x * b.x, a.y * b.y);
	},

	mul: function(b) {
		const a = this;
		return new Vector(a.x * b, a.y * b);
	},

	div: function(b) {
		return this.mul(1 / b);
	},

	equal: function(b) {
		const a = this;
		return a.x == b.x && a.y == b.y;
	},

	dot: function(b) {
		const a = this;
		return a.x * b.x + a.y * b.y;
	},

	lenSqr: function() {
		return this.dot(this);
	},

	len: function() {
		return Math.sqrt(this.lenSqr());
	},

	cross2d: function(b) {
		return a.x * b.y - a.y * b.x;
	},
};
