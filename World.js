function World(balls) {
	this.balls = balls;
}

World.prototype = {
	move: function(dt) {
		let balls = this.balls;
		for (let i in balls) {
			let enumConns = function(fe) {
				for (let j in balls) if (j != i) {
					fe(balls[j]);
				}
			};
			balls[i].move(dt, enumConns);
		}
	},
};
